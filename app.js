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
        // Note: the first page on the stack is never transitioned
        this.navigation.presentViewController(HomeViewController, {})

        // Examples of presenting and dismissing viewcontrollers
        setTimeout(() => this.navigation.presentViewController(ProfileViewController, { transitionStyle: TransitionStyle.Horizontal }), 1000)
        setTimeout(() => this.navigation.presentViewController(ProfileViewController, { transitionStyle: TransitionStyle.Vertical }), 1500)
        setTimeout(() => this.navigation.presentViewController(ProfileViewController, { transitionStyle: TransitionStyle.Horizontal }), 2000)
        setTimeout(() => this.navigation.presentViewController(ProfileViewController, { transitionStyle: TransitionStyle.Vertical }), 2500)
        setTimeout(() => this.navigation.presentViewController(ProfileViewController, { transitionStyle: TransitionStyle.Horizontal }), 3000)
        setTimeout(() => this.navigation.presentViewController(ProfileViewController, { transitionStyle: TransitionStyle.Vertical }), 3500)

        // To dismiss a specific controller: loop through the stack to find instance you need in whichever way,
        // and pass it to the dismissViewController function
        let instanceVC = this.navigationStack.stack.filter((vc) => vc instanceof HomeViewController)[0]
        setTimeout(() => this.navigation.dismissViewController(instanceVC), 4000) // Dismiss to home
        //setTimeout(() => this.navigation.dismissViewController(), 4000)
    }
})()