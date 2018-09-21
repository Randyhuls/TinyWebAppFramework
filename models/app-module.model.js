// Utilities
import { Navigation, NavigationStack, NavigationBar } from '../utilities/navigation.utility.js'

export class AppModule {

    constructor() {
        let rootView = document.querySelector('#RootView')
        let rootViewObserver = new MutationObserver((mutations) => {
            mutations.forEach(mutation => this.applicationRootViewDidChange(mutation))
        })

        rootViewObserver.observe(rootView, {
            childList: true,
            subtree: true
        })

        window.addEventListener('DOMContentLoaded', this.applicationWillLoad.bind(this))
        window.addEventListener('load', this.applicationDidLoad.bind(this))
        window.addEventListener('beforeunload', this.applicationWillUnload.bind(this))
        window.addEventListener('unload', this.applicationDidUnload.bind(this))

        Navigation.allowBackNavigation = true
    }

    applicationRootViewDidChange(mutation) {
        let addedNodes = Array.from(mutation.addedNodes)
        let removedNodes = Array.from(mutation.removedNodes)

        // If the removedNodes contain text nodes, return function
        if (removedNodes.filter(n => n.nodeType === Node.TEXT_NODE).length > 0) return

        // Previously active view controller
        let previousVC = NavigationStack.stack[NavigationStack.stack.length-2]

        // Trigger life cycle events to subview controllers
        if (addedNodes.includes(NavigationStack.activeViewController.view)) {
            if (previousVC) {
                if (NavigationBar.currentContext) NavigationBar.resetNavigationBarItems()
                previousVC.viewWillUnload()
            }
            NavigationStack.activeViewController.viewDidLoad()
            NavigationStack.activeViewController.viewDidAppear()
        }

        // If what was removed is a view controller,  its viewDidUnload should be called.
        // It  also means there was a view controller stacked below it (now the active view),
        // which means its viewWillLoad should be called
        let removedElementWasVC = !!removedNodes.filter(n => n.classList.contains('ViewController')).length > 0

        if (removedElementWasVC) {
            NavigationStack.dequeuedViewController.viewDidUnload()
            NavigationStack.activeViewController.viewDidAppear()
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
