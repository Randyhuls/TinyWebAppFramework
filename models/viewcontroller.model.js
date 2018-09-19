import { TransitionStyle } from '../utilities/navigation.utility';
import { Helpers } from '../utilities/helpers.utility.js'

export class ViewController {

    constructor(displayName, view, transitionStyle) {
        // Parse the raw HTML document
        let parser = new DOMParser()
        let document = parser.parseFromString(view, 'text/html')

        let vcContainer = document.body.firstElementChild
        vcContainer.classList.add('ViewController')

        this.view = vcContainer
        this.displayName = displayName
        this.id = `vc-instance-${Helpers.generateId()}`

        // Set transition style
        this.transitionStyle = transitionStyle

        // Trigger viewBeforeLoad
        this.viewWillLoad()
    }

    /**
     * Override these functions in your subclass to execute functions just before the the content has loaded
     */
    viewWillLoad() { }

    /**
     * Override these functions in your subclass to execute functions after the view has (re)appeared
     */
    viewDidAppear() { }

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