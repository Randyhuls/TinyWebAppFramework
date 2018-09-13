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
> Using the `Navigation` utility, you can present and dismiss view controllers.
Optionally you can pass a different transition style; currently only `VERTICAL` and `HORIZONTAL` are supported.
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

> Adding custom navigation bar buttons can be done through the `NavigationBar` utility.
Supported `NavigationBarItemType`'s are `LEFT`, `RIGHT` and `CENTER`. 
Passing the `currentContext` option will determine whether the bar items are available in the current view or in all views. 

```javascript
import { NavigationBar, NavigationBarItemType,  } from './utilities/navigation.utility'

let rightNavItem = NavigationBar.createBarItem({
    title: 'See more',
    type: NavigationBarItemType.RIGHT,
    handler: () => goToMyPage()
})
NavigationBar.setNavigationBarItem(rightNavItem, { currentContext: true })
```

### View controllers
> You create view controllers by extending the `ViewController` class. 
A display name and HTML template can be passed to the super. 
```javascript
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
        // Pass the display name and template to the super
        super('Home', HomeTemplate)
    }

    viewDidAppear() {
        super.viewDidAppear()
        // The view did appear
    }

    viewWillLoad() {
        super.viewWillLoad()
        // The view is about to load
    }

    viewDidLoad() {
        super.viewDidLoad()
        // The view has finished loading
    }

    viewWillUnload() {
        super.viewWillUnload()
        // The view will unload from the rootview
    }

    viewDidUnload() {
        super.viewDidUnload()
        // The view was unloaded from the rootview'
    }
}
```
