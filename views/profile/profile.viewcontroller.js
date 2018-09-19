// HTML template
import * as ProfileTemplate from './profile.html'

// Models
import { ViewController } from '../../models/viewcontroller.model'

// Utilities
import { NavigationBar, NavigationBarItemType, TransitionStyle } from '../../utilities/navigation.utility'

// Services
import { HTTP } from '../../services/http.service'

export class ProfileViewController extends ViewController {

    constructor() {
        super('Profile', ProfileTemplate, {
            delegateData: { 'DataPassedByProfile': 'SomeTestObject' }
        })
    }

    viewDidAppear() {
        super.viewDidAppear()
        console.log('ProfileViewController.viewDidAppear --> The view did appear')
    }

    viewWillLoad() {
        super.viewWillLoad()
        console.log('ProfileViewController.viewWillLoad --> The view is about to load')

    }

    viewDidLoad() {
        super.viewDidLoad()
        console.log('ProfileViewController.viewDidLoad --> The view has finished loading')

    }

    viewWillUnload() {
        super.viewWillUnload()
        console.log('ProfileViewController.viewWillUnload --> The view will unload from the rootview')

    }

    viewDidUnload() {
        super.viewDidUnload()
        console.log('ProfileViewController.viewDidUnload --> The view was unloaded from the rootview')

    }
}