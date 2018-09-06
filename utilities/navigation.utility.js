import { ViewController } from '../models/viewcontroller.model'

export const TransitionStyle = {
    Horizontal: 0,
    Vertical: 1
}

const AnimationDirection = {
    Forwards: 0,
    Backwards: 1
}

export const NavigationStack = {
    stack:  [],  // Stack of viewcontrollers,
    activeViewController: null // Currently presented viewcontroller
}

export class Navigation {

    constructor() {
        console.log('stack', NavigationStack)
    }

    get stack() {
        return NavigationStack.stack
    }

    get activeViewController() {
        return NavigationStack.activeViewController
    }

    static presentViewController(viewController, { transitionStyle }) {
        //if (typeof viewController !== ViewController) return

        if (!transitionStyle) transitionStyle = TransitionStyle.Horizontal

        Navigation.addToStack(viewController)
        Navigation.animate(viewController, {
            transitionStyle: transitionStyle,
            animationDirection: AnimationDirection.Forwards
        })
    }

    static dismissViewController(viewController) {
        // If no view controller was passed, dismiss the active view controller
        if (!viewController) viewController = stack[stack.length-1]

        //if (typeof viewController !== ViewController) return

        Navigation.animate(viewController, {
            transitionStyle: viewController.transitionStyle,
            animationDirection: AnimationDirection.Backwards
        })
    }

    static addToStack(viewController) {
        NavigationStack.stack.push(viewController)
        NavigationStack.activeViewController = NavigationStack.stack[NavigationStack.stack-1]
    }

    static animate(viewController, { transitionStyle, animationDirection }) {
        if (!transitionStyle) transitionStyle = TransitionStyle.Horizontal
        console.log('view', viewController.view)
        switch(transitionStyle) {
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

        document.body.insertBefore(viewController.view, this.activeViewController.view)
    }
}