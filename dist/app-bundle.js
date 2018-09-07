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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_app_module_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/app-module.model.js */ \"./models/app-module.model.js\");\n/* harmony import */ var _utilities_navigation_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/navigation.utility */ \"./utilities/navigation.utility.js\");\n/* harmony import */ var _views_home_home_viewcontroller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/home/home.viewcontroller.js */ \"./views/home/home.viewcontroller.js\");\n/* harmony import */ var _views_profile_profile_viewcontroller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/profile/profile.viewcontroller.js */ \"./views/profile/profile.viewcontroller.js\");\n// Models\n\n\n// Utilities\n\n\n// Viewcontrollers\n\n\n\n/**\n * @description Bootstrap the app\n */\nnew (class App extends _models_app_module_model_js__WEBPACK_IMPORTED_MODULE_0__[\"AppModule\"] {\n\n    applicationWillLoad() {\n        super.applicationWillLoad()\n        console.log('applicationWillLoad --> The application is about to load')\n\n        // Here you can show a splash screen and/or spinner\n    }\n\n    applicationDidLoad() {\n        super.applicationDidLoad()\n        console.log('applicationDidLoad --> The application has finished loading')\n\n        // Here you can initiate your starting page, like home\n        this.navigation.presentViewController(_views_home_home_viewcontroller_js__WEBPACK_IMPORTED_MODULE_2__[\"HomeViewController\"], {})\n\n        setTimeout(() => this.navigation.presentViewController(_views_profile_profile_viewcontroller_js__WEBPACK_IMPORTED_MODULE_3__[\"ProfileViewController\"], { transitionStyle: _utilities_navigation_utility__WEBPACK_IMPORTED_MODULE_1__[\"TransitionStyle\"].Vertical }), 2000)\n        setTimeout(() => this.navigation.presentViewController(_views_home_home_viewcontroller_js__WEBPACK_IMPORTED_MODULE_2__[\"HomeViewController\"], { transitionStyle: _utilities_navigation_utility__WEBPACK_IMPORTED_MODULE_1__[\"TransitionStyle\"].Horizontal }), 4000)\n        setTimeout(() => this.navigation.dismissViewController(), 7000)\n\n        //setInterval(() => this.navigation.presentViewController(HomeViewController, {}), 2000)\n    }\n})()\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./models/app-module.model.js":
/*!************************************!*\
  !*** ./models/app-module.model.js ***!
  \************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppModule\", function() { return AppModule; });\n/* harmony import */ var _utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/navigation.utility.js */ \"./utilities/navigation.utility.js\");\n\n\nclass AppModule {\n\n    constructor() {\n        this.navigation = new _utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"Navigation\"]()\n        this.navigationStack = _utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"NavigationStack\"]\n\n        let rootView = document.querySelector('#RootView')\n        let rootViewObserver = new MutationObserver((mutations) => {\n            mutations.forEach(mutation => this.applicationRootViewDidChange(mutation))\n        })\n\n        rootViewObserver.observe(rootView, {\n            childList: true,\n            subtree: true,\n            characterData: true\n        })\n\n        window.addEventListener('DOMContentLoaded', this.applicationWillLoad.bind(this))\n        window.addEventListener('load', this.applicationDidLoad.bind(this))\n        window.addEventListener('beforeunload', this.applicationWillUnload.bind(this))\n        window.addEventListener('unload', this.applicationDidUnload.bind(this))\n    }\n\n    applicationRootViewDidChange(mutation) {\n\n        let addedNodes = Array.from(mutation.addedNodes)\n        let removedNodes = Array.from(mutation.removedNodes)\n\n        //console.log(mutation)\n\n        // Trigger life cycle events to subviewcontrollers\n        if (addedNodes.includes(this.navigationStack.activeViewController.view)) {\n            // Previously active viewcontroller\n            let previousVC = this.navigationStack.stack[this.navigationStack.stack.length-2]\n\n            if (previousVC) previousVC.viewWillUnload()\n            this.navigationStack.activeViewController.viewDidLoad()\n        }\n\n        if (removedNodes.includes(this.navigationStack.activeViewController.view)) {\n            this.navigationStack.activeViewController.viewDidUnload()\n        }\n\n    }\n\n    /**\n     * Override these functions in your subclass to execute functions just before the the application has loaded\n     */\n    applicationWillLoad() { }\n\n    /**\n     * Override this function in your subclass to execute functions right after the application has loaded\n     */\n    applicationDidLoad() { }\n\n    /**\n     * Override this function in your subclass to execute functions just before the application has unloaded\n     */\n    applicationWillUnload() { }\n\n    /**\n     * Override this function in your subclass to execute functions right after the application has unloaded\n     */\n    applicationDidUnload() { }\n}\n\n\n//# sourceURL=webpack:///./models/app-module.model.js?");

/***/ }),

/***/ "./models/viewcontroller.model.js":
/*!****************************************!*\
  !*** ./models/viewcontroller.model.js ***!
  \****************************************/
/*! exports provided: ViewController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ViewController\", function() { return ViewController; });\n/* harmony import */ var _utilities_navigation_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/navigation.utility */ \"./utilities/navigation.utility.js\");\n\n\nclass ViewController {\n\n    constructor(displayName, view, transitionStyle) {\n        // Parse the raw HTML document\n        let parser = new DOMParser()\n        let document = parser.parseFromString(view, 'text/html')\n\n        let vcContainer = document.querySelector('body').firstElementChild\n        vcContainer.classList.add('_VIEWCONTROLLER_')\n\n        this.view = vcContainer\n        this.displayName = displayName\n\n        // Set transition style\n        this.transitionStyle = transitionStyle || _utilities_navigation_utility__WEBPACK_IMPORTED_MODULE_0__[\"TransitionStyle\"].Horizontal\n\n        // Trigger viewBeforeLoad\n        this.viewWillLoad()\n    }\n\n    /**\n     * Override these functions in your subclass to execute functions just before the the content has loaded\n     */\n    viewWillLoad() { }\n\n    /**\n     * Override this function in your subclass to execute functions right after the content has loaded\n     */\n    viewDidLoad() { }\n\n    /**\n     * Override this function in your subclass to execute functions just before the content has unloaded\n     */\n    viewWillUnload() { }\n\n    /**\n     * Override this function in your subclass to execute functions right after the content has unloaded\n     */\n    viewDidUnload() { }\n}\n\n//# sourceURL=webpack:///./models/viewcontroller.model.js?");

/***/ }),

/***/ "./services/http.service.js":
/*!**********************************!*\
  !*** ./services/http.service.js ***!
  \**********************************/
/*! exports provided: HTTPMethod, HTTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTTPMethod\", function() { return HTTPMethod; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTTP\", function() { return HTTP; });\nconst HTTPMethod = {\n    'GET': 0,\n    'POST': 1\n}\n\nclass HTTP {\n\n    static get(URL) {\n        return HTTP.request(HTTPMethod.GET, URL)\n    }\n\n    static post(URL, body) {\n        return HTTP.request(HTTPMethod.POST, URL, body)\n    }\n\n    static request(method, URL, body, headers) {\n        return new Promise((resolve, reject) => {\n            let request = new XMLHttpRequest()\n\n            request.onload = () => resolve(request.response)\n            request.onerror = (err) => reject(err)\n\n            if (headers) {\n                headers.forEach((header) => {\n                    for (prop in header) request.setRequestHeader(prop, header[prop])\n                })\n            }\n\n            request.open(method, URL)\n            request.send(body)\n        })\n    }\n}\n\n\n//# sourceURL=webpack:///./services/http.service.js?");

/***/ }),

/***/ "./services/item.service.js":
/*!**********************************!*\
  !*** ./services/item.service.js ***!
  \**********************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ItemService\", function() { return ItemService; });\n/* harmony import */ var _http_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service.js */ \"./services/http.service.js\");\n\n\nclass ItemService {\n\n    constructor() {\n        this.BASE_URL = \"http://www.some-url.com/items/\"\n    }\n\n    static getItemById(itemId) {\n        let URL = `${this.BASE_URL}item?id=${id}`\n        return _http_service_js__WEBPACK_IMPORTED_MODULE_0__[\"HTTP\"].get(URL)\n    }\n\n    static getItemsByPlayerId(playerId) {\n        let URL = `${this.BASE_URL}items/player?id=${id}`\n        return _http_service_js__WEBPACK_IMPORTED_MODULE_0__[\"HTTP\"].get(URL)\n    }\n\n    static getItemsByMobId(playerId) {\n        let URL = `${this.BASE_URL}items/mob?id=${id}`\n        return _http_service_js__WEBPACK_IMPORTED_MODULE_0__[\"HTTP\"].get(URL)\n    }\n\n\n}\n\n//# sourceURL=webpack:///./services/item.service.js?");

/***/ }),

/***/ "./services/mob.service.js":
/*!*********************************!*\
  !*** ./services/mob.service.js ***!
  \*********************************/
/*! exports provided: MobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MobService\", function() { return MobService; });\n/* harmony import */ var _http_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service.js */ \"./services/http.service.js\");\n\n\nclass MobService {\n\n    constructor() {\n        this.BASE_URL = \"http://www.some-url.com/mobs/\"\n    }\n\n    static getMobById(mobId) {\n        let URL = `${this.BASE_URL}mob?id=${id}`\n        return _http_service_js__WEBPACK_IMPORTED_MODULE_0__[\"HTTP\"].get(URL)\n    }\n\n    static getDropsByMobId(mobId) {\n        let URL = `${this.BASE_URL}drops/mob?id=${id}`\n        return _http_service_js__WEBPACK_IMPORTED_MODULE_0__[\"HTTP\"].get(URL)\n    }\n}\n\n//# sourceURL=webpack:///./services/mob.service.js?");

/***/ }),

/***/ "./services/player.service.js":
/*!************************************!*\
  !*** ./services/player.service.js ***!
  \************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerService\", function() { return PlayerService; });\n/* harmony import */ var _http_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service.js */ \"./services/http.service.js\");\n\n\nclass PlayerService {\n\n    constructor() {\n        this.BASE_URL = \"http://www.some-url.com/players/\"\n    }\n\n    static getPlayerById(playerId) {\n        let URL = `${this.BASE_URL}player?id=${id}`\n        return _http_service_js__WEBPACK_IMPORTED_MODULE_0__[\"HTTP\"].get(URL)\n    }\n\n    static getCharactersByPlayerId(playerId) {\n        let URL = `${this.BASE_URL}player/characters?playerid=${playerId}`\n        return _http_service_js__WEBPACK_IMPORTED_MODULE_0__[\"HTTP\"].get(URL)\n    }\n\n    static getCharacterById(characterId) {\n        let URL = `${this.BASE_URL}player/character?characterid=${characterId}`\n        return _http_service_js__WEBPACK_IMPORTED_MODULE_0__[\"HTTP\"].get(URL)\n    }\n}\n\n//# sourceURL=webpack:///./services/player.service.js?");

/***/ }),

/***/ "./services/trade.service.js":
/*!***********************************!*\
  !*** ./services/trade.service.js ***!
  \***********************************/
/*! exports provided: TradeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TradeService\", function() { return TradeService; });\n/* harmony import */ var _http_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service.js */ \"./services/http.service.js\");\n\n\nclass TradeService {\n\n    constructor() {\n        this.BASE_URL = \"http://www.some-url.com/trades/\"\n    }\n\n    static requestTradeWithUserByPlayerById(playerId) {\n        let URL = `${this.BASE_URL}request-trade?playerid=${id}` // player here is the opposing player\n        return _http_service_js__WEBPACK_IMPORTED_MODULE_0__[\"HTTP\"].get(URL)\n    }\n\n    /**\n     * @description Adds the items to the current trade request\n     * @param items: array of items\n     * @returns {*}\n     */\n    static submitItemsToTrade(tradeId, items) {\n        let URL = `${this.BASE_URL}submit-trade?tradeid=${tradeId}/`\n        return _http_service_js__WEBPACK_IMPORTED_MODULE_0__[\"HTTP\"].post(URL)\n    }\n\n    /**\n     * @description Confirm trade; tradeId should be returned by server\n     * @param tradeId\n     * @returns {*}\n     */\n    static confirmTrade(tradeId) {\n        let URL = `${this.BASE_URL}confirm-trade?tradeid=${tradeId}/`\n        return _http_service_js__WEBPACK_IMPORTED_MODULE_0__[\"HTTP\"].post(URL)\n    }\n}\n\n//# sourceURL=webpack:///./services/trade.service.js?");

/***/ }),

/***/ "./utilities/navigation.utility.js":
/*!*****************************************!*\
  !*** ./utilities/navigation.utility.js ***!
  \*****************************************/
/*! exports provided: TransitionStyle, NavigationStack, Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TransitionStyle\", function() { return TransitionStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationStack\", function() { return NavigationStack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navigation\", function() { return Navigation; });\n/* harmony import */ var _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/viewcontroller.model */ \"./models/viewcontroller.model.js\");\n\n\nconst TransitionStyle = {\n    None: '',\n    Horizontal: 'transition-horizontal',\n    Vertical: 'transition-vertical'\n}\n\nconst AnimationDirection = {\n    Normal: 0,\n    Reverse: 1\n}\n\nconst NavigationStack = {\n    stack:  [],  // Stack of viewcontrollers,\n    activeViewController: null // Currently presented viewcontroller\n}\n\n// TODO: clean up this wrong use of static functions\nclass Navigation {\n\n    constructor() { }\n\n    static get stack() {\n        return NavigationStack.stack\n    }\n\n    static get activeViewController() {\n        return this.stack.activeViewController\n    }\n\n    presentViewController(viewController, { transitionStyle }) {\n        // Instantiate the view controller before handling it\n        viewController = new viewController()\n\n        if (!viewController instanceof _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_0__[\"ViewController\"]) return\n\n        if (!transitionStyle) transitionStyle = TransitionStyle.Horizontal\n\n        Navigation.addToStack(viewController)\n        Navigation.setTransitionStyle(viewController, {\n            transitionStyle: transitionStyle,\n            animationDirection: AnimationDirection.Normal\n        })\n        Navigation.updateDOM(viewController, false)\n    }\n\n    // TODO: allow dismissing view controller that is not the active view controller\n    dismissViewController(viewController) {\n        // If no view controller was passed, dismiss the active view controller\n        if (!viewController) {\n            viewController = NavigationStack.stack[NavigationStack.stack.length-1]\n        } else {\n            // Instantiate the view controller before handling it\n            viewController = new viewController()\n        }\n\n        if (!viewController instanceof _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_0__[\"ViewController\"]) return\n\n        Navigation.removeFromStack()\n        Navigation.setTransitionStyle(viewController, {\n            transitionStyle: viewController.transitionStyle,\n            animationDirection: AnimationDirection.Reverse\n        })\n        Navigation.updateDOM(viewController, true)\n    }\n\n    static addToStack(viewController) {\n        let stack = NavigationStack.stack\n        stack.push(viewController)\n        NavigationStack.activeViewController = stack[stack.length-1]\n\n        console.log('Active view controller -->', NavigationStack.activeViewController.displayName)\n    }\n\n    static removeFromStack() {\n        let stack = NavigationStack.stack\n        if (stack.length === 1) return\n\n        stack.pop()\n        NavigationStack.activeViewController = stack[stack.length-1]\n\n        console.log('Active view controller -->', NavigationStack.activeViewController.displayName)\n    }\n\n    static setTransitionStyle(viewController, { transitionStyle, animationDirection }) {\n        if (!transitionStyle) {\n            transitionStyle = TransitionStyle.Horizontal\n        } else if (this.stack.length <= 1) {\n            transitionStyle = TransitionStyle.None\n        }\n\n        if (animationDirection === AnimationDirection.Reverse) {\n\n        }\n\n        switch(transitionStyle) {\n            case TransitionStyle.None: break // No transition\n            case TransitionStyle.Horizontal:\n                viewController.view.classList.add(TransitionStyle.Horizontal)\n                break\n\n            case TransitionStyle.Vertical:\n\n                viewController.view.classList.add(TransitionStyle.Vertical)\n                break\n        }\n    }\n\n    static updateNavigationView() {\n        let navigationBarView = document.querySelector('#NavigationBarView')\n        let title = navigationBarView.querySelector('.Title')\n        let backButton = navigationBarView.querySelector('.BackButton')\n\n        if (this.stack.length <= 1) backButton.style.display = 'none'\n\n        title.innerHTML = NavigationStack.activeViewController.displayName\n    }\n\n    // TODO: clean up this strange stack comparison\n    static updateDOM(viewController, shouldPop) {\n        let rootView = document.querySelector('#RootView')\n\n        if (!shouldPop) {\n            if (this.stack.length === 1) { // Means this is the first, but not yet in the DOM\n                rootView.appendChild(viewController.view)\n            } else {\n                let previousVC = NavigationStack.stack[NavigationStack.stack.length-2]\n                rootView.insertBefore(viewController.view, previousVC.view)\n            }\n            this.updateNavigationView()\n        } else {\n            if (this.stack.length === 1) { // Means this is the remainder, the view has already been popped in the array\n                //rootView.removeChild(viewController.view)\n                this.updateNavigationView()\n            } else {\n                console.log('This view controller is the last in the stack, and therefore cannot be popped')\n            }\n        }\n\n    }\n}\n\n//# sourceURL=webpack:///./utilities/navigation.utility.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomeViewController\", function() { return HomeViewController; });\n/* harmony import */ var _home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.html */ \"./views/home/home.html\");\n/* harmony import */ var _home_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/viewcontroller.model */ \"./models/viewcontroller.model.js\");\n/* harmony import */ var _services_player_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/player.service.js */ \"./services/player.service.js\");\n/* harmony import */ var _services_mob_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mob.service.js */ \"./services/mob.service.js\");\n/* harmony import */ var _services_item_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/item.service.js */ \"./services/item.service.js\");\n/* harmony import */ var _services_trade_service_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/trade.service.js */ \"./services/trade.service.js\");\n/* harmony import */ var _profile_profile_viewcontroller_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile/profile.viewcontroller.js */ \"./views/profile/profile.viewcontroller.js\");\n// HTML template\n\n\n// Models\n\n\n// Services\n\n\n\n\n\n// Viewcontrollers\n\n\nclass HomeViewController extends _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_1__[\"ViewController\"] {\n\n    constructor() {\n        super('Home', _home_html__WEBPACK_IMPORTED_MODULE_0__)\n    }\n\n    viewWillLoad() {\n        super.viewWillLoad()\n        console.log('viewWillLoad --> The view is about to load')\n\n        // TODO:  Here you can perform things just before the view has loaded, like making API calls\n        // PlayerService.getPlayerById('098765')\n        // MobService.getDropsByMobId('012345')\n        // ItemService.getItemById('654321')\n        // TradeService.requestTradeWithUserByPlayerById('098765')\n    }\n\n    viewDidLoad() {\n        super.viewDidLoad()\n        console.log('viewDidLoad --> The view has finished loading')\n\n        // TODO: Here you can perform things right after the view has loaded, like UI changes\n        // doSomething()\n    }\n\n    viewWillUnload() {\n        super.viewWillUnload()\n        console.log('viewWillUnload --> The view will unload from the rootview')\n\n        // TODO: Here you can perform things just before the view is about to be unloaded\n    }\n\n    viewDidUnload() {\n        super.viewDidUnload()\n        console.log('viewDidUnload --> The view was unloaded from the rootview')\n\n        // TODO: Here you can perform things right after the view has unloaded\n    }\n\n    doSomething() {\n        // TODO: some function\n    }\n}\n\n//# sourceURL=webpack:///./views/home/home.viewcontroller.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProfileViewController\", function() { return ProfileViewController; });\n/* harmony import */ var _profile_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.html */ \"./views/profile/profile.html\");\n/* harmony import */ var _profile_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_profile_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/viewcontroller.model */ \"./models/viewcontroller.model.js\");\n// HTML template\n\n\n// Models\n\n\n// Services\n\nclass ProfileViewController extends _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_1__[\"ViewController\"] {\n\n    constructor() {\n        super('Profile', _profile_html__WEBPACK_IMPORTED_MODULE_0__)\n    }\n\n    viewWillLoad() {\n        super.viewWillLoad()\n        console.log('viewWillLoad --> The view is about to load')\n\n        // TODO:  Here you can perform things just before the view has loaded, like making API calls\n\n    }\n\n    viewDidLoad() {\n        super.viewDidLoad()\n        console.log('viewDidLoad --> The view has finished loading')\n\n        // TODO: Here you can perform things right after the view has loaded, like UI changes\n\n    }\n\n    viewWillUnload() {\n        super.viewWillUnload()\n        console.log('viewWillUnload --> The view will unload from the rootview')\n\n        // TODO: Here you can perform things just before the view is about to be unloaded\n    }\n\n    viewDidUnload() {\n        super.viewDidUnload()\n        console.log('viewDidUnload --> The view was unloaded from the rootview')\n\n        // TODO: Here you can perform things right after the view has unloaded\n    }\n}\n\n//# sourceURL=webpack:///./views/profile/profile.viewcontroller.js?");

/***/ })

/******/ });