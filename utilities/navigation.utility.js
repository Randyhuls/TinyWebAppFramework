export const TransitionStyle = {
    None: 0,
    Horizontal: 1,
    Vertical: 2
}

const AnimationDirection = {
    Forwards: 0,
    Backwards: 1
}

export const NavigationStack = {
    stack:  [],  // Stack of viewcontrollers,
    activeViewController: null // Currently presented viewcontroller
}

// TODO: clean up this wrong use of static functions
export class Navigation {

    constructor() {
        console.log('stack', NavigationStack)
    }

    static get stack() {
        return NavigationStack.stack
    }

    static get activeViewController() {
        return NavigationStack.activeViewController
    }

    presentViewController(viewController, { transitionStyle }) {
        // Instantiate the view controller before handling it
        viewController = new viewController()

        //if (typeof viewController !== ViewController) return

        if (!transitionStyle) transitionStyle = TransitionStyle.Horizontal

        Navigation.addToStack(viewController)
        Navigation.setTransitionStyle(viewController, {
            transitionStyle: transitionStyle,
            animationDirection: AnimationDirection.Forwards
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

        //if (typeof viewController !== ViewController) return

        Navigation.removeFromStack()
        Navigation.setTransitionStyle(viewController, {
            transitionStyle: viewController.transitionStyle,
            animationDirection: AnimationDirection.Backwards
        })
        Navigation.updateDOM(viewController, true)
    }

    static addToStack(viewController) {
        NavigationStack.stack.push(viewController)
        NavigationStack.activeViewController = NavigationStack.stack[NavigationStack.stack.length-1]

        console.log('Active view controller -->', NavigationStack.activeViewController)
    }

    static removeFromStack() {
        if (this.stack.length === 1) return

        NavigationStack.stack.pop()
        NavigationStack.activeViewController = NavigationStack.stack[NavigationStack.stack.length-1]

        console.log('Active view controller -->', NavigationStack.activeViewController)
    }

    static setTransitionStyle(viewController, { transitionStyle, animationDirection }) {
        if (!transitionStyle) {
            transitionStyle = TransitionStyle.Horizontal
        } else if (this.stack.length <= 1) {
            transitionStyle = TransitionStyle.None
        }

        switch(transitionStyle) {
            case TransitionStyle.None: break // No transition
            case TransitionStyle.Horizontal:
                viewController.view.classList.add('transition-horizontal')
                break

            case TransitionStyle.Vertical:
                viewController.view.classList.add('transition-vertical')
                break
        }

        if (animationDirection === AnimationDirection.Backwards) {
            viewController.view.style.animationDirection = 'backwards'
        }
    }

    static updateDOM(viewController, shouldPop) {

        if (!shouldPop) {
            if (this.stack.length <= 1) {
                document.body.appendChild(viewController.view)
            } else {
                document.body.insertBefore(viewController.view, viewController.view.previousElementSibling)
            }
        } else {
            if (this.stack.length > 1) {
                document.body.removeChild(viewController.view)
            } else {
                console.log('This view controller is the last in the stack, and therefore cannot be popped')
            }
        }

    }
}