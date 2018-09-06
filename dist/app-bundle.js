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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_viewcontroller_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/viewcontroller.model.js */ \"./models/viewcontroller.model.js\");\n/* harmony import */ var _utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/navigation.utility.js */ \"./utilities/navigation.utility.js\");\n/* harmony import */ var _services_player_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/player.service.js */ \"./services/player.service.js\");\n/* harmony import */ var _services_mob_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/mob.service.js */ \"./services/mob.service.js\");\n/* harmony import */ var _services_item_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/item.service.js */ \"./services/item.service.js\");\n/* harmony import */ var _services_trade_service_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/trade.service.js */ \"./services/trade.service.js\");\n/* harmony import */ var _views_home_home_viewcontroller_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/home/home.viewcontroller.js */ \"./views/home/home.viewcontroller.js\");\n// Models\n\n\n// Utilities\n\n\n// Services\n\n\n\n\n\n// Viewcontrollers\n\n\n/**\n * @description Bootstrap the app\n */\nnew (class App extends _models_viewcontroller_model_js__WEBPACK_IMPORTED_MODULE_0__[\"ViewController\"] {\n\n    viewBeforeLoad() {\n        super.viewBeforeLoad()\n        console.log('viewBeforeLoad --> The view has is about to load')\n\n        // Here you can show a splash screen and/or spinner\n    }\n\n    viewDidLoad() {\n        super.viewDidLoad()\n        console.log('viewDidLoad --> The view has finished loading')\n\n        // Here you can initiate your starting page, like home\n        _utilities_navigation_utility_js__WEBPACK_IMPORTED_MODULE_1__[\"Navigation\"].instantiateViewController(_views_home_home_viewcontroller_js__WEBPACK_IMPORTED_MODULE_6__[\"HomeViewController\"])\n    }\n})()\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./models/viewcontroller.model.js":
/*!****************************************!*\
  !*** ./models/viewcontroller.model.js ***!
  \****************************************/
/*! exports provided: ViewController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ViewController\", function() { return ViewController; });\nclass ViewController {\n\n    constructor() {\n        window.addEventListener('DOMContentLoaded', this.viewBeforeLoad.bind(this))\n        window.addEventListener('load', this.viewDidLoad.bind(this))\n        window.addEventListener('beforeunload', this.viewBeforeUnload.bind(this))\n        window.addEventListener('unload', this.viewDidUnload.bind(this))\n    }\n\n    /**\n     * Override these functions in your subclass to execute functions just before the the content has loaded\n     */\n    viewBeforeLoad() { }\n\n    /**\n     * Override this function in your subclass to execute functions right after the content has loaded\n     */\n    viewDidLoad() { }\n\n    /**\n     * Override this function in your subclass to execute functions just before the content has unloaded\n     */\n    viewBeforeUnload() { }\n\n    /**\n     * Override this function in your subclass to execute functions right after the content has unloaded\n     */\n    viewDidUnload() { }\n}\n\n//# sourceURL=webpack:///./models/viewcontroller.model.js?");

/***/ }),

/***/ "./services/http.service.js":
/*!**********************************!*\
  !*** ./services/http.service.js ***!
  \**********************************/
/*! exports provided: HTTPMethod, HTTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTTPMethod\", function() { return HTTPMethod; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTTP\", function() { return HTTP; });\nconst HTTPMethod = {\n    'GET': 0,\n    'POST': 1\n}\n\nclass HTTP {\n\n    static get(URL) {\n        return HTTP.request(HTTPMethod.GET, URL)\n    }\n\n    static post(URL, body) {\n        return HTTP.request(HTTPMethod.POST, URL, body)\n    }\n\n    static request(method, URL, body, headers) {\n        return new Promise((resolve, reject) => {\n            let request = new XMLHttpRequest()\n\n            request.onload = () => resolve(request.response)\n            request.onerror = (err) => reject(err)\n\n            if (headers) {\n                headers.forEach((header) => {\n                    for (prop in header) request.setRequestHeader(prop, header[prop.hasOwnProperty()])\n                })\n            }\n\n            request.open(method, URL)\n            request.send(body)\n        })\n    }\n}\n\n\n//# sourceURL=webpack:///./services/http.service.js?");

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
/*! exports provided: PresentationStyle, TransitionStyle, Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PresentationStyle\", function() { return PresentationStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TransitionStyle\", function() { return TransitionStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navigation\", function() { return Navigation; });\n/* harmony import */ var _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/viewcontroller.model */ \"./models/viewcontroller.model.js\");\n\n\nconst PresentationStyle = {\n    'ReplaceContext': 0,\n    'OverContext': 1\n}\n\nconst TransitionStyle = {\n    'Horizontal': 0,\n    'Vertical': 1\n}\n\nclass Navigation {\n\n    static instantiateViewController(viewController, { presentationStyle, transitionStyle }) {\n        if (typeof viewController !== _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_0__[\"ViewController\"]) return\n        \n\n    }\n}\n\n//# sourceURL=webpack:///./utilities/navigation.utility.js?");

/***/ }),

/***/ "./views/home/home.viewcontroller.js":
/*!*******************************************!*\
  !*** ./views/home/home.viewcontroller.js ***!
  \*******************************************/
/*! exports provided: HomeViewController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomeViewController\", function() { return HomeViewController; });\n/* harmony import */ var _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/viewcontroller.model */ \"./models/viewcontroller.model.js\");\n/* harmony import */ var _profile_profile_viewcontroller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile/profile.viewcontroller.js */ \"./views/profile/profile.viewcontroller.js\");\n// Models\n\n\n// Viewcontrollers\n\n\nclass HomeViewController extends _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_0__[\"ViewController\"] {\n    viewBeforeLoad() {\n        super.viewBeforeLoad()\n        console.log('viewBeforeLoad --> The view has is about to load')\n\n        // TODO: Here you can start making API calls\n        // PlayerService.getPlayerById('098765')\n        // MobService.getDropsByMobId('012345')\n        // ItemService.getItemById('654321')\n        // TradeService.requestTradeWithUserByPlayerById('098765')\n    }\n\n    viewDidLoad() {\n        super.viewDidLoad()\n        console.log('viewDidLoad --> The view has finished loading')\n\n        // TODO: Here you can perform an UI changes\n        // doSomething()\n    }\n\n    doSomething() {\n        // TODO: some function\n    }\n}\n\n//# sourceURL=webpack:///./views/home/home.viewcontroller.js?");

/***/ }),

/***/ "./views/profile/profile.viewcontroller.js":
/*!*************************************************!*\
  !*** ./views/profile/profile.viewcontroller.js ***!
  \*************************************************/
/*! exports provided: ProfileViewController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProfileViewController\", function() { return ProfileViewController; });\n/* harmony import */ var _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/viewcontroller.model */ \"./models/viewcontroller.model.js\");\n\n\nclass ProfileViewController extends _models_viewcontroller_model__WEBPACK_IMPORTED_MODULE_0__[\"ViewController\"] {\n\n}\n\n//# sourceURL=webpack:///./views/profile/profile.viewcontroller.js?");

/***/ })

/******/ });