import { ViewController } from '../models/viewcontroller.model';
import { HTMLElementUtility } from './htmlelement.utility'

const ClassKey = {
    ROOT_VIEW: '#RootView',
    NAVIGATION_BAR_VIEW: '#NavigationBarView',
    NAVIGATION_BACK_BTN: '#BackButton',
    NAVIGATION_TITLE: '#NavigationBarView .NavigationBarItem.CenterBarItem .Title',
    NAVIGATION_LEFT_BAR_ITEM: '#NavigationBarView .NavigationBarItem.LeftBarItem',
    NAVIGATION_RIGHT_BAR_ITEM: '#NavigationBarView .NavigationBarItem.RightBarItem',
    NAVIGATION_CENTER_BAR_ITEM: '#NavigationBarView .NavigationBarItem.CenterBarItem',
    NAVIGATION_BAR_ITEM: '#NavigationBarView .NavigationBarItem',
    NAVIGATION_BAR_ITEM_BTN: '#NavigationBarView .NavigationBarItem .BarItemButton'
}

export const TransitionStyle = {
    NONE: '',
    HORIZONTAL: 'transition-horizontal',
    VERTICAL: 'transition-vertical'
}

export const NavigationStack = {
    stack:  [],  // Stack of view controllers,
    activeViewController: null, // Currently presented view controller,
    dequeuedViewController: null // Used to call viewDidUnload events
}

export const NavigationBarItemType = {
    LEFT: 'LeftBarItem',
    RIGHT: 'RightBarItem',
    CENTER: 'CenterBarItem'
}

export class NavigationBar {

    get currentContext() {
        return this._currentContext
    }

    set currentContext(isCurrentContext) {
        this._currentContext = isCurrentContext
    }

    static setNavigationBarItem(navigationBarItem, { currentContext }) {

        if (currentContext) this.currentContext = currentContext

        switch(navigationBarItem.type) {
            case NavigationBarItemType.LEFT:
                document.querySelector(ClassKey.NAVIGATION_LEFT_BAR_ITEM).appendChild(navigationBarItem.view)
                    .classList.add('active')
                break

            case NavigationBarItemType.RIGHT:
                document.querySelector(ClassKey.NAVIGATION_RIGHT_BAR_ITEM).appendChild(navigationBarItem.view)
                    .classList.add('active')
                break

            case NavigationBarItemType.CENTER:
                document.querySelector(ClassKey.NAVIGATION_CENTER_BAR_ITEM).appendChild(navigationBarItem.view)
                    .classList.add('active')
                break
        }

    }

    static resetNavigationBarItems() {
        let barItems = Array.from(document.querySelectorAll(ClassKey.NAVIGATION_BAR_ITEM))
        barItems.forEach(barItem => {
            let barItemBtn = barItem.querySelector(ClassKey.NAVIGATION_BAR_ITEM_BTN)
            if (barItemBtn) barItem.removeChild(barItemBtn)
        })
    }

    static createBarItem({ title, imgPath, type, handler }) {

        if (!title || !imgPath && !type && !handler) {
            throw 'NavigationBarItem.create --> Missing parameters in navigation bar item'
        }

        let navigationItem = {}

        let itemView = document.createElement('button')
        itemView.classList.add('BarItemButton')

        if (title) {
            itemView.innerHTML = title
            navigationItem.title = title
        } else if (imgPath) {
            let iconView = document.createElement('img')
            iconView.src = imgPath
            itemView.appendChild(iconView)
            navigationItem.icon = iconView
        }

        itemView.onclick = handler.bind(this)

        navigationItem.view = itemView
        navigationItem.type = type
        navigationItem.handler = handler

        return navigationItem
    }
}

export class Navigation {

    static get allowBackNavigation() {
        return this._allowBackNavigation
    }

    static set allowBackNavigation(isAllowed) {
        let rightBarItem = document.querySelector(ClassKey.NAVIGATION_RIGHT_BAR_ITEM)
        let backButton = document.querySelector(ClassKey.NAVIGATION_BACK_BTN)

        if (isAllowed) {
            // Bind back button
            backButton.onclick = (() => {
                Navigation.dismissViewController()
                Navigation.updateNavigationBar()
            })
        } else {
            rightBarItem.removeChild(backButton)
        }

        this._allowBackNavigation = isAllowed
    }

    static set setRootViewController(viewController) {

        // Instantiate the view controller before handling it
        if (!viewController instanceof ViewController) viewController = new viewController()
        //console.log('aaa', viewController.view)
        let avc = NavigationStack.activeViewController

        // Clear all stacked views from DOM, and then insert the new root view controller
        // before the active view controller
        let rootView = document.querySelector(ClassKey.ROOT_VIEW)
        NavigationStack.stack.forEach((vc) => {
            if (vc.view !== avc.view) {
                rootView.removeChild(vc.view)
            }
        })

        if (viewController.displayName !== avc.displayName) rootView.insertBefore(viewController.view, avc.view)

        // Clear array and only add the the new root view controller and the active view controller
        NavigationStack.stack = viewController.displayName === avc.displayName ? [avc] : [viewController, avc]
        Navigation.updateNavigationBar()

        console.log('Root view controller -->', viewController.displayName)
    }

    static presentViewController(viewController, { transitionStyle }) {
        // Instantiate the view controller before handling it
        viewController = new viewController()

        if (!viewController instanceof ViewController) return

        this.setTransitionStyle(viewController, transitionStyle)

        this.initiateNavigation(viewController, { shouldPop: false }, () => {
            Navigation.updateNavigationBar()
            console.log('Active view controller -->', NavigationStack.activeViewController.displayName)
        })

    }

    static dismissViewController(viewControllerToPopTo) {
        let self = this
        let popTo = !!viewControllerToPopTo;

        (function dismiss(viewController) {
            if (!viewController instanceof ViewController) return

            self.initiateNavigation(viewController, {shouldPop: true}, () => {
                self.updateNavigationBar()
                if (popTo) {
                    // TODO: should compare based on some type of id, like an instanceID
                    if (NavigationStack.activeViewController.displayName === viewControllerToPopTo.displayName) {
                        console.log('dismissViewController --> Popped to ' + NavigationStack.activeViewController.displayName)
                    } else {
                        // Make sure that when dismissing, a view controller always has a transition style,
                        // even if the presentation style is none; this will make sure that even if the first in the stack,
                        // is passed, any instance of the same type will be dismissed with a transition
                        if (!viewController.transitionStyle) viewController.transitionStyle = TransitionStyle.HORIZONTAL
                        dismiss(NavigationStack.activeViewController)
                    }
                }
            })
        })(NavigationStack.activeViewController)
    }

    static setTransitionStyle(viewController, transitionStyle) {
        if (NavigationStack.stack.length === 0) {
            viewController.transitionStyle = TransitionStyle.NONE
        } else {
            viewController.transitionStyle = transitionStyle ? transitionStyle : TransitionStyle.HORIZONTAL
        }
    }

    static addToStack(viewController) {
        let stack = NavigationStack.stack
        stack.push(viewController)
        NavigationStack.activeViewController = stack[stack.length-1]
        this.addToDOM(NavigationStack.activeViewController)
    }

    static removeFromStack() {
        let stack = NavigationStack.stack
        if (stack.length === 1) return

        NavigationStack.dequeuedViewController = NavigationStack.activeViewController
        stack.pop()
        this.removeFromDOM(NavigationStack.activeViewController)
        NavigationStack.activeViewController = stack[stack.length-1]
    }

    static initiateNavigation(viewController, { shouldPop }, callback) {
        let transitionStyle = ''

        switch(viewController.transitionStyle) {
            case TransitionStyle.NONE: transitionStyle = TransitionStyle.NONE; break
            case TransitionStyle.HORIZONTAL: transitionStyle = TransitionStyle.HORIZONTAL; break
            case TransitionStyle.VERTICAL: transitionStyle = TransitionStyle.VERTICAL; break
        }

        // A. If viewcontroller needs to be presented, insert it into the DOM first
        if (!shouldPop) {
            this.addToStack(viewController)
            viewController = NavigationStack.activeViewController
        }

        if (transitionStyle === TransitionStyle.NONE) {
            if (shouldPop) this.removeFromStack()
            callback()
        } else {
            // Only modify DOM and call callback when the animation has finished
            HTMLElementUtility.setClassWithAnimation(viewController.view, transitionStyle, shouldPop, () => {
                // B. If viewcontroller needs to be dismissed, remove it from the DOM after the transition ends
                if (shouldPop) this.removeFromStack()
                callback()
            })
        }
    }

    static setBackButton() {
        let backButton = document.querySelector(ClassKey.NAVIGATION_BACK_BTN)

        if (NavigationStack.stack.length > 1) {
            let nextInLineVC = NavigationStack.stack[NavigationStack.stack.length-2];
            backButton.innerHTML = nextInLineVC.displayName
            backButton.classList.add('active')
        } else {
            backButton.classList.remove('active')
        }
    }

    static updateNavigationBar() {
        let navigationBarView = document.querySelector(ClassKey.NAVIGATION_BAR_VIEW)
        let title = navigationBarView.querySelector(ClassKey.NAVIGATION_TITLE)

        if (Navigation.allowBackNavigation) this.setBackButton()
        title.innerHTML = NavigationStack.activeViewController.displayName
    }

    static removeFromDOM(viewController) {
        let rootView = document.querySelector(ClassKey.ROOT_VIEW)
        rootView.removeChild(viewController.view)
        console.log(`Removed viewcontroller ${viewController.displayName} from DOM`)
    }

    static addToDOM(viewController) {
        let rootView = document.querySelector(ClassKey.ROOT_VIEW)
        rootView.appendChild(viewController.view)
        console.log(`Added viewcontroller ${viewController.displayName} to DOM`)
    }
}