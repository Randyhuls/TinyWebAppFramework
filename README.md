# TinyWebAppFramework
Small client-side iOS inspired web-app framework

## WIP
Readme is still being updated

### Bootstrapping
> You bootstrap your app by extending the AppModule class. Using the Navigation utility, 
view controllers can be presented onto the screen.
```javascript
import { AppModule } from './models/app-module.model.js'

new (class App extends AppModule {
    applicationWillLoad() {
        super.applicationWillLoad()
        // Here you can do preprocessing, show a splash screen, spinner etc.
    }

    applicationDidLoad() {
        super.applicationDidLoad()
        // Present the first view controller
    }
})()
```

### Navigation
> Using the Navigation utility, you can present and dismiss view controllers.
Optionally you can pass a different transition style. Currently only `VERTICAL` and `HORIZONTAL` are supported.
```javascript
import { AppModule } from './models/app-module.model.js'

// Utilities
import { Navigation, NavigationBarItemType, TransitionStyle  } from './utilities/navigation.utility'

// View controllers
import { HomeViewController } from './views/home/home.viewcontroller.js'

new (class App extends AppModule {
    applicationWillLoad() {
        super.applicationWillLoad()
        // Here you can do preprocessing, show a splash screen, spinner etc.
    }

    applicationDidLoad() {
        super.applicationDidLoad()
        // Present the first view controller
        Navigation.presentViewController(HomeViewController, {})
        // Navigation.presentViewController(HomeViewController, { transitionStyle: TransitionStyle.VERTICAL })
    }
})()
```