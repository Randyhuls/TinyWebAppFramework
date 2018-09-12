// Models
import { AppModule } from './models/app-module.model.js'

// Utilities
import {Navigation, NavigationBarItemType, TransitionStyle} from './utilities/navigation.utility'

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
        Navigation.presentViewController(HomeViewController, {})

        setTimeout(() => Navigation.presentViewController(ProfileViewController, {}), 500)
    }
})()