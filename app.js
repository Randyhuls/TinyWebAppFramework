// Models
import { AppModule } from './models/app-module.model.js'

// Utilities
import { NavigationBarItemType, TransitionStyle } from './utilities/navigation.utility'

// Viewcontrollers
import { HomeViewController } from './views/home/home.viewcontroller.js'
import { ProfileViewController } from './views/profile/profile.viewcontroller.js'

/**
 * @description Bootstrap the app
 */
new (class App extends AppModule {

    applicationWillLoad() {
        super.applicationWillLoad()
        console.log('applicationWillLoad --> The application is about to load')

        // Here you can show a splash screen and/or spinner
    }

    applicationDidLoad() {
        super.applicationDidLoad()
        console.log('applicationDidLoad --> The application has finished loading')

        // Here you can initiate your starting page, like home
        // Note: the first page on the stack is never transitioned
        this.navigation.presentViewController(HomeViewController, {})

        // Adding a button to the navigation bar
        let rightNavItem = this.navigationBar.createBarItem({
            title: 'See more',
            type: NavigationBarItemType.RIGHT,
            handler: () => this.navigation.presentViewController(ProfileViewController, { transitionStyle: TransitionStyle.VERTICAL })
        })

        this.navigationBar.setNavigationBarItem(rightNavItem)

        // To dismiss a specific controller: loop through the stack to find instance you need in whichever way,
        // and pass it to the dismissViewController function
        //let instanceVC = this.navigationStack.stack.filter((vc) => vc instanceof ProfileViewController)[0]
        //setTimeout(() => this.navigation.dismissViewController(instanceVC), 4000) // Dismiss to home

        // Set a new root controller, which will clear the current stack - aside from the active view controller
        //this.navigation.setRootViewController = instanceVC

        // Dismiss the active view controller
        //setTimeout(() => this.navigation.dismissViewController(), 4000)
    }
})()