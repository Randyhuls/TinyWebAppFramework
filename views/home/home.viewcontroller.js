// HTML template
import * as HomeTemplate from './home.html'

// Models
import { ViewController } from '../../models/viewcontroller.model'

// Utilities
import { NavigationBar, NavigationBarItemType } from '../../utilities/navigation.utility'

// Services
import { HTTP } from '../../services/http.service'

export class HomeViewController extends ViewController {

    constructor() {
        super('Home', HomeTemplate)
    }

    viewDidAppear() {
        super.viewDidAppear()
        console.log('HomeViewController.viewDidAppear --> The view did appear')

        // Adding a button to the navigation bar
        let rightNavItem = NavigationBar.createBarItem({
            title: 'See more',
            type: NavigationBarItemType.RIGHT,
            handler: () => alert('hello')
        })
        NavigationBar.setNavigationBarItem(rightNavItem, { currentContext: true })
    }

    viewWillLoad() {
        super.viewWillLoad()
        console.log('ProfileViewController.viewWillLoad --> The view is about to load')

    }

    viewDidLoad() {
        super.viewDidLoad()
        console.log('HomeViewController.viewDidLoad --> The view has finished loading')

    }

    viewWillUnload() {
        super.viewWillUnload()
        console.log('HomeViewController.viewWillUnload --> The view will unload from the rootview')

    }

    viewDidUnload() {
        super.viewDidUnload()
        console.log('HomeViewController.viewDidUnload --> The view was unloaded from the rootview')

    }
}