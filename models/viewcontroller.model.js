import { TransitionStyle } from '../utilities/navigation.utility';
import { Helpers } from '../utilities/helpers.utility.js'
import { Renderer } from '../utilities/renderer.utility.js'

const EventKeys = {
    DISMISS_VIEWCONTROLLER: 'dismissviewcontroller'
}

export class ViewController {

    constructor(displayName, view, { transitionStyle, isModal, delegateData } ) {
        // Parse the raw HTML document
        let parser = new DOMParser()
        let document = parser.parseFromString(view, 'text/html')
        let vcContainer = document.body.firstElementChild
        vcContainer.classList.add('ViewController')
        if (isModal) vcContainer.classList.add('Modal')

        this.view = vcContainer
        this.displayName = displayName
        this.id = `vc-instance-${Helpers.generateId()}`

        // Set transition style
        this.transitionStyle = transitionStyle

        // Set template renderer
        this.renderer = new Renderer()

        // Delegate event for passing data between view controllers
        this.delegateData = delegateData ? delegateData : {}
        this.delegateEvent = new CustomEvent(EventKeys.DISMISS_VIEWCONTROLLER, { detail: this.delegateData })
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
    viewDidUnload() {
        // Set up dismissal event when the view controller is dismissed
        this.view.dispatchEvent(this.delegateEvent)
    }

    /**
     * Call onDismiss to pass data between view controllers
     */
    onDismiss(delegateFunction) {
        if (delegateFunction instanceof Function) this.view.addEventListener(EventKeys.DISMISS_VIEWCONTROLLER, delegateFunction.bind(this))
    }
}