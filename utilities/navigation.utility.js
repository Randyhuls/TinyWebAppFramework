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

    setRootViewController(viewController) {
        // Instantiate the view controller before handling it
        viewController = new viewController()

        if (!viewController instanceof ViewController) return

        NavigationStack.stack.unshift(viewController)
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

    dismissViewController(viewController) {
        let popTo = !!viewController
        let targetVC = viewController;

        (function dismiss(viewController) {
            if (!viewController instanceof ViewController) return

            Navigation.initiateNavigation(viewController, {shouldPop: true}, () => {
                Navigation.updateNavigationView()
                console.log(popTo, targetVC, viewController)
                if (popTo) {
                    if (NavigationStack.activeViewController.displayName === targetVC.displayName) {
                        console.log('dismissViewController --> Popped to ' + NavigationStack.activeViewController.displayName)
                    } else {
                        // Make sure that when dismissing, a viewcontroller always has a transitionstyle,
                        // even if the presentation style is none; this will make sure that even if the first in the stack,
                        // is passed, any instance of the same type will be dismissed with a transition
                        if (!viewController.transitionStyle) viewController.transitionStyle = TransitionStyle.Horizontal
                        dismiss(NavigationStack.activeViewController)
                    }
                }
            })
        })(NavigationStack.activeViewController)
    }

    static setTransitionStyle(viewController, transitionStyle) {
        if (NavigationStack.stack.length === 0) {
            viewController.transitionStyle = TransitionStyle.None
        } else {
            viewController.transitionStyle = transitionStyle ? transitionStyle : TransitionStyle.Horizontal
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
            case TransitionStyle.None: transitionStyle = TransitionStyle.None; break
            case TransitionStyle.Horizontal: transitionStyle = TransitionStyle.Horizontal; break
            case TransitionStyle.Vertical: transitionStyle = TransitionStyle.Vertical; break
        }

        // A. If viewcontroller needs to be presented, insert it into the DOM first
        if (!shouldPop) {
            Navigation.addToStack(viewController)
            viewController = NavigationStack.activeViewController
        }

        if (transitionStyle === TransitionStyle.None) {
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

    static updateNavigationView() {
        let navigationBarView = document.querySelector(ClassKey.NAVIGATION_BAR_VIEW)
        let title = navigationBarView.querySelector(ClassKey.NAVIGATION_TITLE)
        let backButton = navigationBarView.querySelector(ClassKey.NAVIGATION_BACK_BTN)

        if (NavigationStack.stack.length <= 1) backButton.style.display = 'none'
        title.innerHTML = NavigationStack.activeViewController.displayName
    }

    static removeFromDOM(viewController) {
        let rootView = document.querySelector(ClassKey.ROOT_VIEW)
        if (NavigationStack.stack.length !== 1) {
            rootView.removeChild(viewController.view)
            console.log(`Removed viewcontroller ${viewController.displayName} from DOM`)
        }
    }

    static addToDOM(viewController) {
        let rootView = document.querySelector(ClassKey.ROOT_VIEW)
        rootView.appendChild(viewController.view)
        console.log(`Added viewcontroller ${viewController.displayName} to DOM`)
    }
}