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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_viewcontroller_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/viewcontroller.model.js */ \"./models/viewcontroller.model.js\");\n/* harmony import */ var _services_mob_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/mob.service.js */ \"./services/mob.service.js\");\n\n\n\nnew (class App extends _models_viewcontroller_model_js__WEBPACK_IMPORTED_MODULE_0__[\"ViewController\"] {\n\n    constructor() {\n        super()\n    }\n\n    viewBeforeLoad() {\n        super.viewBeforeLoad()\n        console.log('viewBeforeLoad --> The view has is about to load')\n\n        // TODO: Here you can start making API calls\n        _services_mob_service_js__WEBPACK_IMPORTED_MODULE_1__[\"MobService\"].shared().mobs.push('Orc')\n        console.log(_services_mob_service_js__WEBPACK_IMPORTED_MODULE_1__[\"MobService\"].shared().mobs)\n    }\n\n    viewDidLoad() {\n        super.viewDidLoad()\n        console.log('viewDidLoad --> The view has finished loading')\n        _services_mob_service_js__WEBPACK_IMPORTED_MODULE_1__[\"MobService\"].shared().mobs.push('Elf')\n        console.log(_services_mob_service_js__WEBPACK_IMPORTED_MODULE_1__[\"MobService\"].shared().mobs)\n    }\n})()\n\n//# sourceURL=webpack:///./app.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTTPMethod\", function() { return HTTPMethod; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTTP\", function() { return HTTP; });\nconst HTTPMethod = {\n    'GET': 0,\n    'POST': 1\n}\n\nclass HTTP {\n    static get(URL) {\n        return new Promise((resolve, reject) => {\n            let request = new XMLHttpRequest()\n\n            request.onload = () => resolve(request.response)\n            request.onerror = (err) => reject(err)\n\n            request.open(HTTPMethod.GET, URL)\n            request.send()\n        })\n    }\n\n    static post(URL, body) {\n        return new Promise((resolve, reject) => {\n            let request = new XMLHttpRequest()\n\n            request.onload = () => resolve(request.response)\n            request.onerror = (err) => reject(err)\n\n            request.open(HTTPMethod.GET, URL)\n            request.send(body)\n        })\n    }\n}\n\n\n\n//# sourceURL=webpack:///./services/http.service.js?");

/***/ }),

/***/ "./services/mob.service.js":
/*!*********************************!*\
  !*** ./services/mob.service.js ***!
  \*********************************/
/*! exports provided: MobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MobService\", function() { return MobService; });\n/* harmony import */ var _http_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service.js */ \"./services/http.service.js\");\n\n\nclass MobService {\n\n    constructor() {\n        this.BASE_URL = \"http://www.some-url.com/\"\n\n        this.mobs = []\n    }\n\n    static shared() {\n        return new MobService()\n    }\n\n    getMobById(id) {\n        let URL = `${this.BASE_URL}'mob?id='${id}`\n        return _http_service_js__WEBPACK_IMPORTED_MODULE_0__[\"HTTP\"].get(URL)\n    }\n\n    getDropsByMobId() {\n        let URL = `${this.BASE_URL}'drops/mob?id='${id}`\n        return _http_service_js__WEBPACK_IMPORTED_MODULE_0__[\"HTTP\"].get(URL)\n    }\n\n    getItemById() {\n        let URL = `${this.BASE_URL}'item?id='${id}`\n        return _http_service_js__WEBPACK_IMPORTED_MODULE_0__[\"HTTP\"].get(URL)\n    }\n}\n\n//# sourceURL=webpack:///./services/mob.service.js?");

/***/ })

/******/ });