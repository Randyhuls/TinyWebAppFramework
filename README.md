# TinyWebAppFramework
Small client-side iOS inspired web-app framework

## WIP
* Contains mock up and test code
* Readme is still being updated

## Table of contents
1. Install
2. Usage

## 1. Install
WIP

## 2. Usage
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

##### Presenting view controllers
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

##### Dismissing view controllers
> Calling the `dismissViewController` method will pop the active view controller from the navigation stack.
Optionally, you can pass an `instance` of a view controller - and view controllers will be popped until it 
finds a similar instance.

```javascript
Navigation.dismissViewController()
// Navigation.dismissViewController(HomeViewController)
```

##### Setting the root view controller
> Setting the root view controller will clear the navigation stack, with the exception of the active view controller.

```javascript
Navigation.setRootViewController(HomeViewController)
```

##### Adding navigation bar items
> Adding custom navigation bar items can be done through the `NavigationBar` utility.
Supported `NavigationBarItemType`'s are `LEFT`, `RIGHT` and `CENTER`. 
Passing the `currentContext` option will determine whether the bar items are available in the current view or in all views.
A bar item must either be passed the `title` or `imgPath` property. 
The latter will allow you to set an image icon for the bar item. 

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

##### Creating a custom view controller
> You create view controllers by extending the `ViewController` class. 
The display name and HTML template string need to be passed to the super. 
```javascript
// HTML template
import * as HomeTemplate from './home.html'

// Models
import { ViewController } from '../../models/viewcontroller.model'

// Utilities
import { NavigationBar, NavigationBarItemType } from '../../utilities/navigation.utility'

export class HomeViewController extends ViewController {

    constructor() {
        // Pass the display name and HTML template string to the super
        super('Home', HomeTemplate)
    }

    viewDidAppear() {
        super.viewDidAppear()
        // The view did appear --> Will be called each time the view appears
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
