export class ViewController {

    constructor() {
        window.addEventListener('DOMContentLoaded', this.viewBeforeLoad.bind(this))
        window.addEventListener('load', this.viewDidLoad.bind(this))
        window.addEventListener('beforeunload', this.viewBeforeUnload.bind(this))
        window.addEventListener('unload', this.viewDidUnload.bind(this))
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