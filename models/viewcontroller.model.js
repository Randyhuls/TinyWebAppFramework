import { TransitionStyle } from '../utilities/navigation.utility';

export class ViewController {

    constructor(view, transitionStyle) {
        // Parse the raw HTML document
        let parser = new DOMParser()
        let document = parser.parseFromString(view, 'text/html')

        let vcContainer = document.createElement('div')
        vcContainer.classList.add('_VIEWCONTROLLER_')
        vcContainer.appendChild(document.querySelector('body').firstElementChild)

        this.view = vcContainer

        // Set transition style
        this.transitionStyle = transitionStyle || TransitionStyle.Horizontal

        // Bind life cycle events
       /* this.view.addEventListener('', this.viewBeforeLoad.bind(this))
        this.view.addEventListener('', this.viewDidLoad.bind(this))
        this.view.addEventListener('', this.viewBeforeUnload.bind(this))
        this.view.addEventListener('', this.viewDidUnload.bind(this))*/
    }

    /**
     * Override these functions in your subclass to execute functions just before the the content has loaded
     */
    viewBeforeLoad() { }

    /**
     * Override this function in your subclass to execute functions right after the content has loaded
     */
    viewDidLoad() { }

    /**
     * Override this function in your subclass to execute functions just before the content has unloaded
     */
    viewBeforeUnload() { }

    /**
     * Override this function in your subclass to execute functions right after the content has unloaded
     */
    viewDidUnload() { }
}