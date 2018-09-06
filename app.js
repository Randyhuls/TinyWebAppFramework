// Models
import { AppModule } from './models/app-module.model.js'

// Utilities


// Viewcontrollers
import { HomeViewController } from './views/home/home.viewcontroller.js'

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
        //this.navigation.presentViewController(HomeViewController, {})

        setInterval(() => this.navigation.presentViewController(HomeViewController, {}), 2000)
    }
})()