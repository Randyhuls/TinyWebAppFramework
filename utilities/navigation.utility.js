import {ViewController} from "../models/viewcontroller.model";

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

        if (!transitionStyle) transitionStyle = TransitionStyle.Horizontal

        Navigation.addToStack(viewController)
        Navigation.setTransitionStyle(viewController, {
            transitionStyle: transitionStyle,
            animationDirection: AnimationDirection.Normal
        })
        Navigation.updateDOM(viewController, false)
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

        Navigation.removeFromStack()
        Navigation.setTransitionStyle(viewController, {
            transitionStyle: viewController.transitionStyle,
            animationDirection: AnimationDirection.Reverse
        })
        Navigation.updateDOM(viewController, true)
    }

    static addToStack(viewController) {
        let stack = NavigationStack.stack
        stack.push(viewController)
        NavigationStack.activeViewController = stack[stack.length-1]

        console.log('Active view controller -->', NavigationStack.activeViewController.displayName)
    }

    static removeFromStack() {
        let stack = NavigationStack.stack
        if (stack.length === 1) return

        stack.pop()
        NavigationStack.activeViewController = stack[stack.length-1]

        console.log('Active view controller -->', NavigationStack.activeViewController.displayName)
    }

    static setTransitionStyle(viewController, { transitionStyle, animationDirection }) {
        if (!transitionStyle) {
            transitionStyle = TransitionStyle.Horizontal
        } else if (this.stack.length <= 1) {
            transitionStyle = TransitionStyle.None
        }

        if (animationDirection === AnimationDirection.Reverse) {

        }

        switch(transitionStyle) {
            case TransitionStyle.None: break // No transition
            case TransitionStyle.Horizontal:
                viewController.view.classList.add(TransitionStyle.Horizontal)
                break

            case TransitionStyle.Vertical:

                viewController.view.classList.add(TransitionStyle.Vertical)
                break
        }
    }

    static updateNavigationView() {
        let navigationBarView = document.querySelector('#NavigationBarView')
        let title = navigationBarView.querySelector('.Title')
        let backButton = navigationBarView.querySelector('.BackButton')

        if (this.stack.length <= 1) backButton.style.display = 'none'

        title.innerHTML = NavigationStack.activeViewController.displayName
    }

    // TODO: clean up this strange stack comparison
    static updateDOM(viewController, shouldPop) {
        let rootView = document.querySelector('#RootView')

        if (!shouldPop) {
            if (this.stack.length === 1) { // Means this is the first, but not yet in the DOM
                rootView.appendChild(viewController.view)
            } else {
                let previousVC = NavigationStack.stack[NavigationStack.stack.length-2]
                rootView.insertBefore(viewController.view, previousVC.view)
            }
            this.updateNavigationView()
        } else {
            if (this.stack.length === 1) { // Means this is the remainder, the view has already been popped in the array
                //rootView.removeChild(viewController.view)
                this.updateNavigationView()
            } else {
                console.log('This view controller is the last in the stack, and therefore cannot be popped')
            }
        }

    }
}