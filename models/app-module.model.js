// Utilities
import { Navigation, NavigationStack, NavigationBar } from '../utilities/navigation.utility.js'

export class AppModule {

    constructor() {
        this.navigation = new Navigation()
        this.navigationStack = NavigationStack
        this.navigationBar = new NavigationBar()

        let rootView = document.querySelector('#RootView')
        let rootViewObserver = new MutationObserver((mutations) => {
            mutations.forEach(mutation => this.applicationRootViewDidChange(mutation))
        })

        rootViewObserver.observe(rootView, {
            childList: true,
            subtree: true,
            characterData: true
        })

        window.addEventListener('DOMContentLoaded', this.applicationWillLoad.bind(this))
        window.addEventListener('load', this.applicationDidLoad.bind(this))
        window.addEventListener('beforeunload', this.applicationWillUnload.bind(this))
        window.addEventListener('unload', this.applicationDidUnload.bind(this))
    }

    applicationRootViewDidChange(mutation) {

        let addedNodes = Array.from(mutation.addedNodes)
        let removedNodes = Array.from(mutation.removedNodes)

        //console.log(mutation)

        // Trigger life cycle events to subviewcontrollers
        if (addedNodes.includes(this.navigationStack.activeViewController.view)) {
            // Previously active viewcontroller
            let previousVC = this.navigationStack.stack[this.navigationStack.stack.length-2]

            if (previousVC) previousVC.viewWillUnload()
            this.navigationStack.activeViewController.viewDidLoad()
        }

        if (removedNodes.includes(this.navigationStack.activeViewController.view)) {
            this.navigationStack.activeViewController.viewDidUnload()
        }

    }

    /**
     * Override these functions in your subclass to execute functions just before the the application has loaded
     */
    applicationWillLoad() { }

    /**
     * Override this function in your subclass to execute functions right after the application has loaded
     */
    applicationDidLoad() { }

    /**
     * Override this function in your subclass to execute functions just before the application has unloaded
     */
    applicationWillUnload() { }

    /**
     * Override this function in your subclass to execute functions right after the application has unloaded
     */
    applicationDidUnload() { }
}
