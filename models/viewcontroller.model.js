import { TransitionStyle } from '../utilities/navigation.utility';

export class ViewController {

    constructor(view, transitionStyle) {
        this.view = view || document.createElement('template')
        this.transitionStyle = transitionStyle || TransitionStyle.Horizontal

        this.view.addEventListener('', this.viewBeforeLoad.bind(this))
        this.view.addEventListener('', this.viewDidLoad.bind(this))
        this.view.addEventListener('', this.viewBeforeUnload.bind(this))
        this.view.addEventListener('', this.viewDidUnload.bind(this))

        console.log(this.view)
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