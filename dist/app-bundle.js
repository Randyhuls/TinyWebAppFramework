/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_app_module_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/app-module.model.js */ \"./models/app-module.model.js\");\n/* harmony import */ var _utilities_navigation_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/navigation.utility */ \"./utilities/navigation.utility.js\");\n/* harmony import */ var _views_home_home_viewcontroller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/home/home.viewcontroller.js */ \"./views/home/home.viewcontroller.js\");\n/* harmony import */ var _views_profile_profile_viewcontroller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/profile/profile.viewcontroller.js */ \"./views/profile/profile.viewcontroller.js\");\n// Models\n\n\n// Utilities\n\n\n// Viewcontrollers\n\n\n\n/**\n * @description Bootstrap the app\n */\nnew (class App extends _models_app_module_model_js__WEBPACK_IMPORTED_MODULE_0__[\"AppModule\"] {\n\n    applicationWillLoad() {\n        super.applicationWillLoad()\n        console.log('applicationWillLoad --> The application is about to load')\n\n        // Here you can show a splash screen and/or spinner\n    }\n\n    applicationDidLoad() {\n        super.applicationDidLoad()\n        console.log('applicationDidLoad --> The application has finished loading')\n\n        // Here you can initiate your starting page, like home\n        // Note: the first page on the stack is never transitioned\n        _utilities_navigation_utility__WEBPACK_IMPORTED_MODULE_1__[\"Navigation\"].presentViewController(_views_home_home_viewcontroller_js__WEBPACK_IMPORTED_MODULE_2__[\"HomeViewController\"], {})\n\n        setTimeout(() => _utilities_navigation_utility__WEBPACK_IMPORTED_MODULE_1__[\"Navigation\"].presentViewController(_views_profile_profile_viewcontroller_js__WEBPACK_IMPORTED_MODULE_3__[\"ProfileViewController\"], {}), 500)\n    }\n})()\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./models/app-module.model.js":
/*!************************************!*\
  !*** ./models/app-module.model.js ***!
  \************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppModule\", function() { return AppModule; });\n/* harmony import */ var _utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/navigation.utility.js */ \"./utilities/navigation.utility.js\");\n// Utilities\n\n\nclass AppModule {\n\n    constructor() {\n        let rootView = document.querySelector('#RootView')\n        let rootViewObserver = new MutationObserver((mutations) => {\n            mutations.forEach(mutation => this.applicationRootViewDidChange(mutation))\n        })\n\n        rootViewObserver.observe(rootView, {\n            childList: true,\n            subtree: true\n        })\n\n        window.addEventListener('DOMContentLoaded', this.applicationWillLoad.bind(this))\n        window.addEventListener('load', this.applicationDidLoad.bind(this))\n        window.addEventListener('beforeunload', this.applicationWillUnload.bind(this))\n        window.addEventListener('unload', this.applicationDidUnload.bind(this))\n\n        _utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"Navigation\"].allowBackNavigation = true\n    }\n\n    applicationRootViewDidChange(mutation) {\n\n        let addedNodes = Array.from(mutation.addedNodes)\n        let removedNodes = Array.from(mutation.removedNodes)\n\n        // Previously active view controller\n        let previousVC = _utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"NavigationStack\"].stack[_utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"NavigationStack\"].stack.length-2]\n\n        // Trigger life cycle events to subview controllers\n        if (addedNodes.includes(_utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"NavigationStack\"].activeViewController.view)) {\n            if (previousVC) {\n                if (_utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"NavigationBar\"].currentContext) _utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"NavigationBar\"].resetNavigationBarItems()\n                previousVC.viewWillUnload()\n            }\n            _utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"NavigationStack\"].activeViewController.viewDidLoad()\n            _utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"NavigationStack\"].activeViewController.viewDidAppear()\n        }\n\n        // If what was removed is a view controller,  its viewDidUnload should be called.\n        // It  also means there was a view controller stacked below it (now the active view),\n        // which means its viewWillLoad should be called\n        let removedElementWasVC = !!removedNodes.filter(node => node.classList.contains('ViewController')).length > 0\n\n        if (removedElementWasVC) {\n            _utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"NavigationStack\"].dequeuedViewController.viewDidUnload()\n            _utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"NavigationStack\"].activeViewController.viewDidAppear()\n        }\n    }\n\n    /**\n     * Override these functions in your subclass to execute functions just before the the application has loaded\n     */\n    applicationWillLoad() { }\n\n    /**\n     * Override this function in your subclass to execute functions right after the application has loaded\n     */\n    applicationDidLoad() { }\n\n    /**\n     * Override this function in your subclass to execute functions just before the application has unloaded\n     */\n    applicationWillUnload() { }\n\n    /**\n     * Override this function in your subclass to execute functions right after the application has unloaded\n     */\n    applicationDidUnload() { }\n}\n\n\n//# sourceURL=webpack:///./models/app-module.model.js?");

/***/ }),

/***/ "./models/viewcontroller.model.js":
/*!****************************************!*\
  !*** ./models/viewcontroller.model.js ***!
  \****************************************/
/*! exports provided: ViewController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ViewController\", function() { return ViewController; });\n/* harmony import */ var _utilities_navigation_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/navigation.utility */ \"./utilities/navigation.utility.js\");\n\n\nclass ViewController {\n\n    constructor(displayName, view, transitionStyle) {\n        // Parse the raw HTML document\n        let parser = new DOMParser()\n        let document = parser.parseFromString(view, 'text/html')\n\n        let vcContainer = document.querySelector('body').firstElementChild\n        vcContainer.classList.add('ViewController')\n\n        this.view = vcContainer\n        this.displayName = displayName\n\n        // Set transition style\n        this.transitionStyle = transitionStyle\n\n        // Trigger viewBeforeLoad\n        this.viewWillLoad()\n    }\n\n    /**\n     * Override these functions in your subclass to execute functions just before the the content has loaded\n     */\n    viewWillLoad() { }\n\n    /**\n     * Override these functions in your subclass to execute functions after the view has (re)appeared\n     */\n    viewDidAppear() { }\n\n    /**\n     * Override this function in your subclass to execute functions right after the content has loaded\n     */\n    viewDidLoad() { }\n\n    /**\n     * Override this function in your subclass to execute functions just before the content has unloaded\n     */\n    viewWillUnload() { }\n\n    /**\n     * Override this function in your subclass to execute functions right after the content has unloaded\n     */\n    viewDidUnload() { }\n}\n\n//# sourceURL=webpack:///./models/viewcontroller.model.js?");

/***/ }),

/***/ "./services/http.service.js":
/*!**********************************!*\
  !*** ./services/http.service.js ***!
  \**********************************/
/*! exports provided: HTTPMethod, HTTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTTPMethod\", function() { return HTTPMethod; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTTP\", function() { return HTTP; });\nconst HTTPMethod = {\n    GET: 'GET',\n    POST: 'POST'\n}\n\nclass HTTP {\n\n    static get(URL) {\n        return HTTP.request(HTTPMethod.GET, URL)\n    }\n\n    static post(URL, body) {\n        return HTTP.request(HTTPMethod.POST, URL, body)\n    }\n\n    static request(method, URL, body, headers) {\n        return new Promise((resolve, reject) => {\n            let request = new XMLHttpRequest()\n\n            request.onload = () => resolve(request.response)\n            request.onerror = (err) => reject(err)\n\n            if (headers) {\n                headers.forEach((header) => {\n                    for (prop in header) request.setRequestHeader(prop, header[prop])\n                })\n            }\n\n            request.open(method, URL)\n            request.send(body)\n        })\n    }\n}\n\n\n//# sourceURL=webpack:///./services/http.service.js?");

/***/ }),

/***/ "./utilities/htmlelement.utility.js":
/*!******************************************!*\
  !*** ./utilities/htmlelement.utility.js ***!
  \******************************************/
/*! exports provided: HTMLElementUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTMLElementUtility\", function() { return HTMLElementUtility; });\nclass HTMLElementUtility {\n    static setClassWithAnimation(element, className, reversed, onFinished) {\n        // If animations needs to be reversed\n        if (reversed) {\n            element.classList.remove(className)\n            void element.offsetWidth // Force DOM to reflow the page\n            element.style.animationDirection = 'reverse'\n            element.classList.add(className)\n\n        } else {\n            element.classList.add(className)\n        }\n\n        let computed = window.getComputedStyle(element)\n        let duration = parseFloat(computed.animationDuration || computed.transitionDuration || 0)*1000\n\n        setTimeout(onFinished, duration)\n    }\n}\n\n//# sourceURL=webpack:///./utilities/htmlelement.utility.js?");

/***/ }),

/***/ "./utilities/navigation.utility.js":
/*!*****************************************!*\
  !*** ./utilities/navigation.utility.js ***!
  \*****************************************/
/*! exports provided: TransitionStyle, NavigationStack, NavigationBarItemType, NavigationBar, Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TransitionStyle\", function() { return TransitionStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationStack\", function() { return NavigationStack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationBarItemType\", function() { return NavigationBarItemType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationBar\", function() { return NavigationBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navigation\", function() { return Navigation; });\n/* harmony import */ var _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/viewcontroller.model */ \"./models/viewcontroller.model.js\");\n/* harmony import */ var _htmlelement_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlelement.utility */ \"./utilities/htmlelement.utility.js\");\n\n\n\nconst ClassKey = {\n    ROOT_VIEW: '#RootView',\n    NAVIGATION_BAR_VIEW: '#NavigationBarView',\n    NAVIGATION_BACK_BTN: '#BackButton',\n    NAVIGATION_TITLE: '#NavigationBarView .NavigationBarItem.CenterBarItem .Title',\n    NAVIGATION_LEFT_BAR_ITEM: '#NavigationBarView .NavigationBarItem.LeftBarItem',\n    NAVIGATION_RIGHT_BAR_ITEM: '#NavigationBarView .NavigationBarItem.RightBarItem',\n    NAVIGATION_CENTER_BAR_ITEM: '#NavigationBarView .NavigationBarItem.CenterBarItem',\n    NAVIGATION_BAR_ITEM: '#NavigationBarView .NavigationBarItem',\n    NAVIGATION_BAR_ITEM_BTN: '#NavigationBarView .NavigationBarItem .BarItemButton'\n}\n\nconst TransitionStyle = {\n    NONE: '',\n    HORIZONTAL: 'transition-horizontal',\n    VERTICAL: 'transition-vertical'\n}\n\nconst NavigationStack = {\n    stack:  [],  // Stack of view controllers,\n    activeViewController: null, // Currently presented view controller,\n    dequeuedViewController: null // Used to call viewDidUnload events\n}\n\nconst NavigationBarItemType = {\n    LEFT: 'LeftBarItem',\n    RIGHT: 'RightBarItem',\n    CENTER: 'CenterBarItem'\n}\n\nclass NavigationBar {\n\n    get currentContext() {\n        return this._currentContext\n    }\n\n    set currentContext(isCurrentContext) {\n        this._currentContext = isCurrentContext\n    }\n\n    static setNavigationBarItem(navigationBarItem, { currentContext }) {\n\n        if (currentContext) this.currentContext = currentContext\n\n        switch(navigationBarItem.type) {\n            case NavigationBarItemType.LEFT:\n                document.querySelector(ClassKey.NAVIGATION_LEFT_BAR_ITEM).appendChild(navigationBarItem.view)\n                    .classList.add('active')\n                break\n\n            case NavigationBarItemType.RIGHT:\n                document.querySelector(ClassKey.NAVIGATION_RIGHT_BAR_ITEM).appendChild(navigationBarItem.view)\n                    .classList.add('active')\n                break\n\n            case NavigationBarItemType.CENTER:\n                document.querySelector(ClassKey.NAVIGATION_CENTER_BAR_ITEM).appendChild(navigationBarItem.view)\n                    .classList.add('active')\n                break\n        }\n\n    }\n\n    static resetNavigationBarItems() {\n        let barItems = Array.from(document.querySelectorAll(ClassKey.NAVIGATION_BAR_ITEM))\n        barItems.forEach(barItem => {\n            let barItemBtn = barItem.querySelector(ClassKey.NAVIGATION_BAR_ITEM_BTN)\n            if (barItemBtn) barItem.removeChild(barItemBtn)\n        })\n    }\n\n    static createBarItem({ title, imgPath, type, handler }) {\n\n        if (!title || !imgPath && !type && !handler) {\n            throw 'NavigationBarItem.create --> Missing parameters in navigation bar item'\n        }\n\n        let navigationItem = {}\n\n        let itemView = document.createElement('button')\n        itemView.classList.add('BarItemButton')\n\n        if (title) {\n            itemView.innerHTML = title\n            navigationItem.title = title\n        } else if (imgPath) {\n            let iconView = document.createElement('img')\n            iconView.src = imgPath\n            itemView.appendChild(iconView)\n            navigationItem.icon = iconView\n        }\n\n        itemView.onclick = handler.bind(this)\n\n        navigationItem.view = itemView\n        navigationItem.type = type\n        navigationItem.handler = handler\n\n        return navigationItem\n    }\n}\n\nclass Navigation {\n\n    static get allowBackNavigation() {\n        return this._allowBackNavigation\n    }\n\n    static set allowBackNavigation(isAllowed) {\n        let rightBarItem = document.querySelector(ClassKey.NAVIGATION_RIGHT_BAR_ITEM)\n        let backButton = document.querySelector(ClassKey.NAVIGATION_BACK_BTN)\n\n        if (isAllowed) {\n            // Bind back button\n            backButton.onclick = (() => {\n                Navigation.dismissViewController()\n                Navigation.updateNavigationBar()\n            })\n        } else {\n            rightBarItem.removeChild(backButton)\n        }\n\n        this._allowBackNavigation = isAllowed\n    }\n\n    static set setRootViewController(viewController) {\n\n        // Instantiate the view controller before handling it\n        if (!viewController instanceof _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_0__[\"ViewController\"]) viewController = new viewController()\n        //console.log('aaa', viewController.view)\n        let avc = NavigationStack.activeViewController\n\n        // Clear all stacked views from DOM, and then insert the new root view controller\n        // before the active view controller\n        let rootView = document.querySelector(ClassKey.ROOT_VIEW)\n        NavigationStack.stack.forEach((vc) => {\n            if (vc.view !== avc.view) {\n                rootView.removeChild(vc.view)\n            }\n        })\n\n        if (viewController.displayName !== avc.displayName) rootView.insertBefore(viewController.view, avc.view)\n\n        // Clear array and only add the the new root view controller and the active view controller\n        NavigationStack.stack = viewController.displayName === avc.displayName ? [avc] : [viewController, avc]\n        Navigation.updateNavigationBar()\n\n        console.log('Root view controller -->', viewController.displayName)\n    }\n\n    static presentViewController(viewController, { transitionStyle }) {\n        // Instantiate the view controller before handling it\n        viewController = new viewController()\n\n        if (!viewController instanceof _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_0__[\"ViewController\"]) return\n\n        this.setTransitionStyle(viewController, transitionStyle)\n\n        this.initiateNavigation(viewController, { shouldPop: false }, () => {\n            Navigation.updateNavigationBar()\n            console.log('Active view controller -->', NavigationStack.activeViewController.displayName)\n        })\n\n    }\n\n    static dismissViewController(viewControllerToPopTo) {\n        let self = this\n        let popTo = !!viewControllerToPopTo;\n\n        (function dismiss(viewController) {\n            if (!viewController instanceof _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_0__[\"ViewController\"]) return\n\n            self.initiateNavigation(viewController, {shouldPop: true}, () => {\n                self.updateNavigationBar()\n                if (popTo) {\n                    if (NavigationStack.activeViewController.displayName === viewControllerToPopTo.displayName) {\n                        console.log('dismissViewController --> Popped to ' + NavigationStack.activeViewController.displayName)\n                    } else {\n                        // Make sure that when dismissing, a view controller always has a transition style,\n                        // even if the presentation style is none; this will make sure that even if the first in the stack,\n                        // is passed, any instance of the same type will be dismissed with a transition\n                        if (!viewController.transitionStyle) viewController.transitionStyle = TransitionStyle.HORIZONTAL\n                        dismiss(NavigationStack.activeViewController)\n                    }\n                }\n            })\n        })(NavigationStack.activeViewController)\n    }\n\n    static setTransitionStyle(viewController, transitionStyle) {\n        if (NavigationStack.stack.length === 0) {\n            viewController.transitionStyle = TransitionStyle.NONE\n        } else {\n            viewController.transitionStyle = transitionStyle ? transitionStyle : TransitionStyle.HORIZONTAL\n        }\n    }\n\n    static addToStack(viewController) {\n        let stack = NavigationStack.stack\n        stack.push(viewController)\n        NavigationStack.activeViewController = stack[stack.length-1]\n        this.addToDOM(NavigationStack.activeViewController)\n    }\n\n    static removeFromStack() {\n        let stack = NavigationStack.stack\n        if (stack.length === 1) return\n\n        NavigationStack.dequeuedViewController = NavigationStack.activeViewController\n        stack.pop()\n        this.removeFromDOM(NavigationStack.activeViewController)\n        NavigationStack.activeViewController = stack[stack.length-1]\n    }\n\n    static initiateNavigation(viewController, { shouldPop }, callback) {\n        let transitionStyle = ''\n\n        switch(viewController.transitionStyle) {\n            case TransitionStyle.NONE: transitionStyle = TransitionStyle.NONE; break\n            case TransitionStyle.HORIZONTAL: transitionStyle = TransitionStyle.HORIZONTAL; break\n            case TransitionStyle.VERTICAL: transitionStyle = TransitionStyle.VERTICAL; break\n        }\n\n        // A. If viewcontroller needs to be presented, insert it into the DOM first\n        if (!shouldPop) {\n            this.addToStack(viewController)\n            viewController = NavigationStack.activeViewController\n        }\n\n        if (transitionStyle === TransitionStyle.NONE) {\n            if (shouldPop) this.removeFromStack()\n            callback()\n        } else {\n            // Only modify DOM and call callback when the animation has finished\n            _htmlelement_utility__WEBPACK_IMPORTED_MODULE_1__[\"HTMLElementUtility\"].setClassWithAnimation(viewController.view, transitionStyle, shouldPop, () => {\n                // B. If viewcontroller needs to be dismissed, remove it from the DOM after the transition ends\n                if (shouldPop) this.removeFromStack()\n                callback()\n            })\n        }\n    }\n\n    static setBackButton() {\n        let backButton = document.querySelector(ClassKey.NAVIGATION_BACK_BTN)\n\n        if (NavigationStack.stack.length > 1) {\n            let nextInLineVC = NavigationStack.stack[NavigationStack.stack.length-2];\n            backButton.innerHTML = nextInLineVC.displayName\n            backButton.classList.add('active')\n        } else {\n            backButton.classList.remove('active')\n        }\n    }\n\n    static updateNavigationBar() {\n        let navigationBarView = document.querySelector(ClassKey.NAVIGATION_BAR_VIEW)\n        let title = navigationBarView.querySelector(ClassKey.NAVIGATION_TITLE)\n\n        if (Navigation.allowBackNavigation) this.setBackButton()\n        title.innerHTML = NavigationStack.activeViewController.displayName\n    }\n\n    static removeFromDOM(viewController) {\n        let rootView = document.querySelector(ClassKey.ROOT_VIEW)\n        rootView.removeChild(viewController.view)\n        console.log(`Removed viewcontroller ${viewController.displayName} from DOM`)\n    }\n\n    static addToDOM(viewController) {\n        let rootView = document.querySelector(ClassKey.ROOT_VIEW)\n        rootView.appendChild(viewController.view)\n        console.log(`Added viewcontroller ${viewController.displayName} to DOM`)\n    }\n}\n\n//# sourceURL=webpack:///./utilities/navigation.utility.js?");

/***/ }),

/***/ "./views/home/home.html":
/*!******************************!*\
  !*** ./views/home/home.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div id=HomeViewController> <h1>Home</h1> <article> <p>This is the home page. This is the landing page of the app</p> </article> </div>\";\n\n//# sourceURL=webpack:///./views/home/home.html?");

/***/ }),

/***/ "./views/home/home.viewcontroller.js":
/*!*******************************************!*\
  !*** ./views/home/home.viewcontroller.js ***!
  \*******************************************/
/*! exports provided: HomeViewController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomeViewController\", function() { return HomeViewController; });\n/* harmony import */ var _home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.html */ \"./views/home/home.html\");\n/* harmony import */ var _home_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/viewcontroller.model */ \"./models/viewcontroller.model.js\");\n/* harmony import */ var _utilities_navigation_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/navigation.utility */ \"./utilities/navigation.utility.js\");\n/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ \"./services/http.service.js\");\n// HTML template\n\n\n// Models\n\n\n// Utilities\n\n\n// Services\n\n\nclass HomeViewController extends _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_1__[\"ViewController\"] {\n\n    constructor() {\n        super('Home', '<div>hallo</div>')\n    }\n\n    viewDidAppear() {\n        super.viewDidAppear()\n        console.log('HomeViewController.viewDidAppear --> The view did appear')\n\n        // Adding a button to the navigation bar\n        let rightNavItem = _utilities_navigation_utility__WEBPACK_IMPORTED_MODULE_2__[\"NavigationBar\"].createBarItem({\n            title: 'See more',\n            type: _utilities_navigation_utility__WEBPACK_IMPORTED_MODULE_2__[\"NavigationBarItemType\"].RIGHT,\n            handler: () => alert('hello')\n        })\n        _utilities_navigation_utility__WEBPACK_IMPORTED_MODULE_2__[\"NavigationBar\"].setNavigationBarItem(rightNavItem, { currentContext: true })\n    }\n\n    viewWillLoad() {\n        super.viewWillLoad()\n        console.log('ProfileViewController.viewWillLoad --> The view is about to load')\n\n    }\n\n    viewDidLoad() {\n        super.viewDidLoad()\n        console.log('HomeViewController.viewDidLoad --> The view has finished loading')\n\n    }\n\n    viewWillUnload() {\n        super.viewWillUnload()\n        console.log('HomeViewController.viewWillUnload --> The view will unload from the rootview')\n\n    }\n\n    viewDidUnload() {\n        super.viewDidUnload()\n        console.log('HomeViewController.viewDidUnload --> The view was unloaded from the rootview')\n\n    }\n}\n\n//# sourceURL=webpack:///./views/home/home.viewcontroller.js?");

/***/ }),

/***/ "./views/profile/profile.html":
/*!************************************!*\
  !*** ./views/profile/profile.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div id=ProfileViewController> <h1>Profile</h1> <article> <p>This is the profile page. This is where you show detailed information about the app</p> </article> </div>\";\n\n//# sourceURL=webpack:///./views/profile/profile.html?");

/***/ }),

/***/ "./views/profile/profile.viewcontroller.js":
/*!*************************************************!*\
  !*** ./views/profile/profile.viewcontroller.js ***!
  \*************************************************/
/*! exports provided: ProfileViewController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProfileViewController\", function() { return ProfileViewController; });\n/* harmony import */ var _profile_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.html */ \"./views/profile/profile.html\");\n/* harmony import */ var _profile_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_profile_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/viewcontroller.model */ \"./models/viewcontroller.model.js\");\n/* harmony import */ var _utilities_navigation_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/navigation.utility */ \"./utilities/navigation.utility.js\");\n/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ \"./services/http.service.js\");\n// HTML template\n\n\n// Models\n\n\n// Utilities\n\n\n// Services\n\n\nclass ProfileViewController extends _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_1__[\"ViewController\"] {\n\n    constructor() {\n        super('Profile', _profile_html__WEBPACK_IMPORTED_MODULE_0__)\n    }\n\n    viewDidAppear() {\n        super.viewDidAppear()\n        console.log('ProfileViewController.viewDidAppear --> The view did appear')\n    }\n\n    viewWillLoad() {\n        super.viewWillLoad()\n        console.log('ProfileViewController.viewWillLoad --> The view is about to load')\n\n    }\n\n    viewDidLoad() {\n        super.viewDidLoad()\n        console.log('ProfileViewController.viewDidLoad --> The view has finished loading')\n\n    }\n\n    viewWillUnload() {\n        super.viewWillUnload()\n        console.log('ProfileViewController.viewWillUnload --> The view will unload from the rootview')\n\n    }\n\n    viewDidUnload() {\n        super.viewDidUnload()\n        console.log('ProfileViewController.viewDidUnload --> The view was unloaded from the rootview')\n\n    }\n}\n\n//# sourceURL=webpack:///./views/profile/profile.viewcontroller.js?");

/***/ })

/******/ });