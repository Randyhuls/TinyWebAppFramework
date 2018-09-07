// Models
import { AppModule } from './models/app-module.model.js'

// Utilities
import { TransitionStyle } from './utilities/navigation.utility';

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
        this.navigation.presentViewController(HomeViewController, {})

        setTimeout(() => this.navigation.presentViewController(ProfileViewController, { transitionStyle: TransitionStyle.Vertical }), 2000)
        setTimeout(() => this.navigation.presentViewController(HomeViewController, { transitionStyle: TransitionStyle.Horizontal }), 4000)
        setTimeout(() => this.navigation.dismissViewController(), 7000)

        //setInterval(() => this.navigation.presentViewController(HomeViewController, {}), 2000)
    }
})()