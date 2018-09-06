import { ViewController } from '../models/viewcontroller.model'

export const PresentationStyle = {
    'ReplaceContext': 0,
    'OverContext': 1
}

export const TransitionStyle = {
    'Horizontal': 0,
    'Vertical': 1
}



export class Navigation {

    static presentViewController(viewController, { presentationStyle, transitionStyle }) {
        if (typeof viewController !== ViewController) return

    }

    static dismissViewController() {

    }
}