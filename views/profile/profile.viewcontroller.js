// HTML template
import * as ProfileTemplate from './profile.html'

// Models
import { ViewController } from '../../models/viewcontroller.model'

// Services

export class ProfileViewController extends ViewController {

    constructor() {
        super('Profile', ProfileTemplate)
    }

    viewWillLoad() {
        super.viewWillLoad()
        console.log('ProfileViewController.viewWillLoad --> The view is about to load')

        // TODO:  Here you can perform things just before the view has loaded, like making API calls

    }

    viewDidLoad() {
        super.viewDidLoad()
        console.log('ProfileViewController.viewDidLoad --> The view has finished loading')

        // TODO: Here you can perform things right after the view has loaded, like UI changes

    }

    viewWillUnload() {
        super.viewWillUnload()
        console.log('ProfileViewController.viewWillUnload --> The view will unload from the rootview')

        // TODO: Here you can perform things just before the view is about to be unloaded
    }

    viewDidUnload() {
        super.viewDidUnload()
        console.log('ProfileViewController.viewDidUnload --> The view was unloaded from the rootview')

        // TODO: Here you can perform things right after the view has unloaded
    }
}