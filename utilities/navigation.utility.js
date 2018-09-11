import {ViewController} from "../models/viewcontroller.model";
import { HTMLElementUtility } from './htmlelement.utility'

const ClassKey = {
    ROOT_VIEW: '#RootView',
    NAVIGATION_BAR_VIEW: '#NavigationBarView',
    NAVIGATION_BACK_BTN: '#BackButton',
    NAVIGATION_TITLE: '.Title'
}

export const TransitionStyle = {
    NONE: '',
    HORIZONTAL: 'transition-horizontal',
    VERTICAL: 'transition-vertical'
}

export const NavigationStack = {
    stack:  [],  // Stack of view controllers,
    activeViewController: null // Currently presented view controller
}

export const NavigationBarItemType = {
    LEFT: 'LeftBarItem',
    RIGHT: 'RightBarItem'
}

export class NavigationBarItem {

    setNavigationBarItem(navigationBarItemType) {
        switch(navigationBarItemType) {
            
        }
    }

}

export class Navigation {

    constructor() {
        // Bind back button
        document.querySelector(ClassKey.NAVIGATION_BACK_BTN).onclick = (() => {
            this.dismissViewController()
            Navigation.updateNavigationView()
        })
    }

    set setRootViewController(viewController) {
        console.log(viewController)

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
        Navigation.updateNavigationView()

        console.log('Root view controller -->', viewController.displayName)
    }

    presentViewController(viewController, { transitionStyle }) {
        // Instantiate the view controller before handling it
        viewController = new viewController()

        if (!viewController instanceof ViewController) return

        Navigation.setTransitionStyle(viewController, transitionStyle)

        Navigation.initiateNavigation(viewController, { shouldPop: false }, () => {
            Navigation.updateNavigationView()
            console.log('Active view controller -->', NavigationStack.activeViewController.displayName)
        })

    }

    dismissViewController(viewControllerToPopTo) {
        let popTo = !!viewControllerToPopTo;

        (function dismiss(viewController) {
            if (!viewController instanceof ViewController) return

            Navigation.initiateNavigation(viewController, {shouldPop: true}, () => {
                Navigation.updateNavigationView()
                if (popTo) {
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
        Navigation.addToDOM(NavigationStack.activeViewController)
    }

    static removeFromStack() {
        let stack = NavigationStack.stack
        if (stack.length === 1) return

        stack.pop()
        Navigation.removeFromDOM(NavigationStack.activeViewController)
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
            Navigation.addToStack(viewController)
            viewController = NavigationStack.activeViewController
        }

        if (transitionStyle === TransitionStyle.NONE) {
            if (shouldPop) Navigation.removeFromStack()
            callback()
        } else {
            // Only modify DOM and call callback when the animation has finished
            HTMLElementUtility.setClassWithAnimation(viewController.view, transitionStyle, shouldPop, () => {
                // B. If viewcontroller needs to be dismissed, remove it from the DOM after the transition ends
                if (shouldPop) Navigation.removeFromStack()
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

    static updateNavigationView() {
        let navigationBarView = document.querySelector(ClassKey.NAVIGATION_BAR_VIEW)
        let title = navigationBarView.querySelector(ClassKey.NAVIGATION_TITLE)

        this.setBackButton()
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