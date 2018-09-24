# TinyWebAppFramework
Small client-side iOS inspired web-app framework

## WIP
* Contains mock up and test code
* Readme is still being updated

## Table of contents
1. Install (WIP)
2. Usage
    * Bootstrapping
3. Navigation
    * Presenting view controllers
    * Dismissing view controllers   
    * Setting the root view controller
    * Adding navigation bar items
4. View controllers
    * Creating a custom view controller
    * Passing data between view controllers
5. Template rendering with the `layout` utility
    * Rendering custom data in view controller view
    * Reading and updating existing data
6. HTTP requests with the `HTTP` utility
    * GET - returns Promise<ResponseText>
    * POST - returns Promise<ResponseText>
    * Request - returns Promise<ResponseText>

## 1. Install
Work in progress...

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
        
        Navigation.presentViewController(new HomeViewController(), {})
        // Navigation.presentViewController(new HomeViewController(), { transitionStyle: TransitionStyle.VERTICAL })
    }
})()
```

##### Dismissing view controllers
> Calling the `dismissViewController` method will pop the active view controller from the navigation stack.
Optionally, you can pass an `instance` of a view controller - and view controllers will be popped until this instance is matched.

```javascript
Navigation.dismissViewController()
// Navigation.dismissViewController(HomeViewController)
```

##### Setting the root view controller
> Setting a new root view controller will clear the navigation stack, with the exception of the active view controller.

```javascript
Navigation.setRootViewController(new HomeViewController())
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

export class HomeViewController extends ViewController {

    constructor() {
        // Pass the display name and HTML template string to the super - and optionally, an options object
        super('Home', HomeTemplate, {})
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

##### Passing data between view controllers
> You can pass data between view controllers by setting the `delegateData` option and passing it your custom data. 
```javascript
// HTML template
import * as ProfileTemplate from './profile.html'

// Models
import { ViewController } from '../../models/viewcontroller.model'

export class HomeViewController extends ViewController {

    constructor() {
        super('Profile', ProfileTemplate, { 
            delegateData: { 'myData': 'Hello tiny framework' } 
        })
    }

}
```

> By calling the `onDismiss` method on a view controller instance, you can listen for the data.
Upon calling the viewDidUnload life cycle function of the view controller, the `onDismiss` method is called.

```javascript
let profileVC = new ProfileViewController()

profileVC.onDismiss((data) => {
    console.log(data.detail) // { 'myData': 'Hello tiny framework' } 
})

Navigation.presentViewController(profileVC, {})
```

### Template rendering with the `layout` utility

##### Rendering custom data in view controller view
> Set an element's `data-bind` attribute to create a model reference to the renderer. 
```html
<div id="HomeViewController">
    <h1 data-bind="title"></h1>
    <article>
        <p data-bind="subtitle"></p>
        <input data-bind="myinput" type="text"/>
    </article>
</div>
```

> You can call `layout.render` inside a view controller and pass it an element or element name, along with a custom data object. 
```javascript
viewDidLoad() {
    super.viewDidLoad()

    // Fill template with data
    this.layout.render('HomeViewController', {
        title: 'Home',
        subtitle: 'This is the homepage',
        myinput: ''
    })
}
```
##### Reading and updating existing data
> Input elements automatically come with two-way binding. You may read the current data by calling `layout.data`.
With `layout.setValue(model, value)` you can update your custom data.
```javascript
viewDidLoad() {
   super.viewDidLoad()

   // Read the current data state
   console.log(this.layout.data)
   
   // Update the data
   this.layout.setValue('myinput', 'my.name@email.com')
}
```

### HTTP requests with the `HTTP` utility

##### GET - returns Promise<ResponseText>
> Takes an URL `String` and returns a `Promise`. 
```javascript
HTTP.get('https://mywebsite/api/v1/mydata').then(
    (res) => {
        let response = JSON.parse(res)
        console.log('GET response:', response)

        // Do something with the data
    },
    (err) => console.error(err)
)
```

##### POST - returns Promise<ResponseText>
> Takes an URL `String` and optionally a `Body`; returns a `Promise`. 
```javascript
HTTP.post('https://mywebsite/api/v1/mydata', { myJSON: 'test' }).then(
     (res) => {
         let response = JSON.parse(res)
         console.log('POST response:', response)
 
         // Respond to the result
     },
     (err) => console.error(err)
 )
```

##### Request - returns Promise<ResponseText>
> Takes the `Method`, an URL `String`, optionally a `Body` and custom `Headers`; returns a `Promise`.
The `Headers` parameter accepts an `Array` with key-pair values.  
```javascript
HTTP.request('GET', 'https://mywebsite/api/v1/mydata', null, [{'Content-Type': 'application/json'}]).then(
    (res) => {
        let response = JSON.parse(res)
        console.log('POST response:', response)

        // Respond to the result
    },
    (err) => console.error(err)
)
```