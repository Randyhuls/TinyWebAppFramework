import { TransitionStyle } from '../utilities/navigation.utility';

export class ViewController {

    constructor(displayName, view, transitionStyle) {
        // Parse the raw HTML document
        let parser = new DOMParser()
        let document = parser.parseFromString(view, 'text/html')

        let vcContainer = document.querySelector('body').firstElementChild
        vcContainer.classList.add('_VIEWCONTROLLER_')

        this.view = vcContainer
        this.displayName = displayName

        // Set transition style
        this.transitionStyle = transitionStyle || TransitionStyle.Horizontal

        // Trigger viewBeforeLoad
        this.viewWillLoad()
    }

    /**
     * Override these functions in your subclass to execute functions just before the the content has loaded
     */
    viewWillLoad() { }

    /**
     * Override this function in your subclass to execute functions right after the content has loaded
     */
    viewDidLoad() { }

    /**
     * Override this function in your subclass to execute functions just before the content has unloaded
     */
    viewWillUnload() { }

    /**
     * Override this function in your subclass to execute functions right after the content has unloaded
     */
    viewDidUnload() { }
}