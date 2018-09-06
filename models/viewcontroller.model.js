export class ViewController {

    constructor() {
        this.view = document.createElement('template')
        this.view.addEventListener('', this.viewBeforeLoad.bind(this))
        this.view.addEventListener('', this.viewDidLoad.bind(this))
        this.view.addEventListener('', this.viewBeforeUnload.bind(this))
        this.view.addEventListener('', this.viewDidUnload.bind(this))
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