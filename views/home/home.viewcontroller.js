// HTML template
import * as HomeTemplate from './home.html'

// Models
import { ViewController } from '../../models/viewcontroller.model'

// Utilities
import { Navigation, NavigationBar, NavigationBarItemType } from '../../utilities/navigation.utility'

// Services
import { HTTP } from '../../services/http.service'

// View controllers
import { ProfileViewController } from '../profile/profile.viewcontroller'

export class HomeViewController extends ViewController {

    constructor() {
        super('Home', HomeTemplate, {})
    }

    viewDidAppear() {
        super.viewDidAppear()
        console.log('HomeViewController.viewDidAppear --> The view did appear')

        let profileVC = new ProfileViewController()

        profileVC.onDismiss((data) => {
            console.log('data', data.detail)
        })
        // Adding a button to the navigation bar
        let rightNavItem = NavigationBar.createBarItem({
            title: 'See more',
            type: NavigationBarItemType.RIGHT,
            handler: () => Navigation.presentViewController(profileVC, {})
        })
        NavigationBar.setNavigationBarItem(rightNavItem, { currentContext: true })
    }

    viewWillLoad() {
        super.viewWillLoad()
        console.log('HomeViewController.viewWillLoad --> The view is about to load')
    }

    viewDidLoad() {
        super.viewDidLoad()
        console.log('HomeViewController.viewDidLoad --> The view has finished loading')

        // Fill template with data
        this.layout.render('HomeViewController', {
            title: 'Home',
            subtitle: 'This is the homepage',
            myinput: 'This text is two-way binding'
        })

        // Do an HTTP GET request
        HTTP.get('https://jsonplaceholder.typicode.com/todos/4').then(
            (res) => {
                let response = JSON.parse(res)
                console.log('Http response:', response)

                // Setting seperate value
                this.layout.setValue('subtitle', response.title)
            },
            (err) => console.error(err)
        )
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