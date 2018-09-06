import { Navigation, NavigationStack } from '../utilities/navigation.utility.js'

export class AppModule {

    constructor() {
        this.navigation = new Navigation()
        this.navigationStack = NavigationStack

        window.addEventListener('DOMContentLoaded', this.applicationWillLoad.bind(this))
        window.addEventListener('load', this.applicationDidLoad.bind(this))
        window.addEventListener('beforeunload', this.applicationWillUnload.bind(this))
        window.addEventListener('unload', this.applicationDidUnload.bind(this))
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
