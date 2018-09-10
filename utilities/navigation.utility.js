import {ViewController} from "../models/viewcontroller.model";
import { HTMLElementUtility } from './htmlelement.utility'

export const TransitionStyle = {
    None: '',
    Horizontal: 'transition-horizontal',
    Vertical: 'transition-vertical'
}

const AnimationDirection = {
    Normal: 0,
    Reverse: 1
}

export const NavigationStack = {
    stack:  [],  // Stack of viewcontrollers,
    activeViewController: null // Currently presented viewcontroller
}

const ClassKey = {
    ROOT_VIEW: '#RootView',
    NAVIGATION_BAR_VIEW: '#NavigationBarView',
    NAVIGATION_BACK_BTN: '.BackButton',
    NAVIGATION_TITLE: '.Title'
}

// TODO: clean up this wrong use of static functions
export class Navigation {

    constructor() { }

    static get stack() {
        return NavigationStack.stack
    }

    static get activeViewController() {
        return this.stack.activeViewController
    }

    presentViewController(viewController, { transitionStyle }) {
        // Instantiate the view controller before handling it
        viewController = new viewController()

        if (!viewController instanceof ViewController) return

        Navigation.setTransitionStyle(viewController, transitionStyle)

        Navigation.initiateNavigation(viewController, { shouldPop: false }, () => {
            Navigation.addToStack(viewController)
            Navigation.updateNavigationView()

            console.log('Active view controller -->', NavigationStack.activeViewController.displayName)
        })

    }

    // TODO: allow dismissing view controller that is not the active view controller
    dismissViewController(viewController) {
        // If no view controller was passed, dismiss the active view controller
        if (!viewController) {
            viewController = NavigationStack.stack[NavigationStack.stack.length-1]
        } else {
            // Instantiate the view controller before handling it
            viewController = new viewController()
        }

        if (!viewController instanceof ViewController) return

        Navigation.initiateNavigation(viewController, { shouldPop: true }, () => {
            Navigation.removeFromStack()
            Navigation.updateNavigationView()

            console.log('Active view controller -->', NavigationStack.activeViewController.displayName)
        })
    }

    static setTransitionStyle(viewController, transitionStyle) {
        if (this.stack.length === 0) {
            viewController.transitionStyle = TransitionStyle.None
        } else {
            viewController.transitionStyle = transitionStyle ? transitionStyle : TransitionStyle.Horizontal
        }
    }

    static addToStack(viewController) {
        let stack = NavigationStack.stack
        stack.push(viewController)
        NavigationStack.activeViewController = stack[stack.length-1]
    }

    static removeFromStack() {
        let stack = NavigationStack.stack
        if (stack.length === 1) return

        stack.pop()
        NavigationStack.activeViewController = stack[stack.length-1]
    }

    static initiateNavigation(viewController, { shouldPop }, callback) {
        let transitionStyle = ''

        switch(viewController.transitionStyle) {
            case TransitionStyle.None: transitionStyle = TransitionStyle.None; break
            case TransitionStyle.Horizontal: transitionStyle = TransitionStyle.Horizontal; break
            case TransitionStyle.Vertical: transitionStyle = TransitionStyle.Vertical; break
        }

        // A. If viewcontroller needs to be presented, insert it into the DOM first
        if (!shouldPop) Navigation.addToDOM(viewController)

        if (transitionStyle === TransitionStyle.None) {
            callback()
        } else {
            // Only modify DOM and call callback when the animation has finished
            HTMLElementUtility.setClassWithAnimation(viewController.view, transitionStyle, shouldPop, () => {
                // B. If viewcontroller needs to be dismissed, remove it from the DOM after the transition ends
                //if (shouldPop) Navigation.removeFromDOM(viewController)
                callback()
            })
        }
    }

    static updateNavigationView() {
        let navigationBarView = document.querySelector(ClassKey.NAVIGATION_BAR_VIEW)
        let title = navigationBarView.querySelector(ClassKey.NAVIGATION_TITLE)
        let backButton = navigationBarView.querySelector(ClassKey.NAVIGATION_BACK_BTN)

        if (this.stack.length <= 1) backButton.style.display = 'none'
        title.innerHTML = NavigationStack.activeViewController.displayName
    }

    static removeFromDOM(viewController) {
        console.log(`removing viewcontroller ${viewController.displayName} from DOM`)
        let rootView = document.querySelector(ClassKey.ROOT_VIEW)
        if (this.stack.length !== 1) {
            rootView.removeChild(viewController.view)
        }
    }

    static addToDOM(viewController) {
        let rootView = document.querySelector(ClassKey.ROOT_VIEW)
        rootView.appendChild(viewController.view)
    }
}