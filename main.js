(self["webpackChunkmy_switch_web"] = self["webpackChunkmy_switch_web"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites/favorites.component */ 5055);
/* harmony import */ var _relays_relays_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relays/relays.component */ 5529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    { path: 'favorites', component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_0__.FavoritesComponent },
    { path: 'relays', component: _relays_relays_component__WEBPACK_IMPORTED_MODULE_1__.RelaysComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
    constructor() {
        this.title = 'mySwitchWeb';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 0, consts: [["role", "banner", 1, "toolbar"], ["href", "/"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], ["onclick", "javascript:location.href='/'", 2, "cursor", "pointer"], [1, "spacer"], ["href", "relays/"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "src", "/assets/bulb-on.png", 1, "material-icons"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/angular", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], ["aria-label", "Angular on YouTube", "target", "_blank", "rel", "noopener", "href", "https://youtube.com/angular", "title", "YouTube"], ["id", "youtube-logo", "height", "24", "width", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "#fff"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Myswitch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorites/favorites.component */ 5055);
/* harmony import */ var _relays_relays_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relays/relays.component */ 5529);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_2__.FavoritesComponent,
        _relays_relays_component__WEBPACK_IMPORTED_MODULE_3__.RelaysComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeModule] }); })();


/***/ }),

/***/ 5055:
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesComponent": () => (/* binding */ FavoritesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class FavoritesComponent {
    constructor() { }
    ngOnInit() {
    }
}
FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) { return new (t || FavoritesComponent)(); };
FavoritesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoritesComponent, selectors: [["app-favorites"]], decls: 2, vars: 0, template: function FavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "favorites works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvcml0ZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7792:
/*!**********************************************!*\
  !*** ./src/app/model/udpRelayStateChange.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UdpRelayStateChange": () => (/* binding */ UdpRelayStateChange)
/* harmony export */ });
/* harmony import */ var _util_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/base64 */ 6790);
/* harmony import */ var _util_messageParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/messageParser */ 4816);


class UdpRelayStateChange extends _util_messageParser__WEBPACK_IMPORTED_MODULE_1__.MessageParser {
    constructor(nodeName, relayName, status) {
        super();
        this.header = _util_messageParser__WEBPACK_IMPORTED_MODULE_1__.MessageParser.RELAYSTATE_CHANGE;
        this.nodeName = nodeName;
        this.relayName = relayName;
        this.relayStatus = status;
    }
    copy(buffer, str, pos, len) {
        for (var i = 0; i < len; ++i) {
            var code = str.length > i ? str.charCodeAt(i) : 0;
            buffer[pos + i] = code;
        }
    }
    zeroFill(buffer, pos, len) {
        for (var i = 0; i < len; ++i) {
            buffer[pos + i] = 0;
        }
    }
    getMessage() {
        let buffer = new Uint8Array(40);
        buffer[3] = (this.header & 0XFF000000) >> 24;
        buffer[2] = (this.header & 0XFF0000) >> 16;
        buffer[1] = (this.header & 0XFF00) >> 8;
        buffer[0] = (this.header & 0XFF);
        let pos = 4;
        this.copy(buffer, this.nodeName, pos, 16);
        pos += 16;
        this.copy(buffer, this.relayName, pos, 16);
        pos += 16;
        buffer[pos] = this.relayStatus;
        pos++;
        buffer[pos] = 0;
        let b64 = (0,_util_base64__WEBPACK_IMPORTED_MODULE_0__.bytesToBase64)(buffer);
        return b64;
    }
}


/***/ }),

/***/ 2534:
/*!***************************************!*\
  !*** ./src/app/model/udpStatusReq.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UdpStatusReq": () => (/* binding */ UdpStatusReq)
/* harmony export */ });
/* harmony import */ var _util_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/base64 */ 6790);
/* harmony import */ var _util_messageParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/messageParser */ 4816);


class UdpStatusReq extends _util_messageParser__WEBPACK_IMPORTED_MODULE_1__.MessageParser {
    constructor(obj) {
        super();
        this.relays = [];
        this.buttons = [];
        this.relayStatus = [];
        this.header = _util_messageParser__WEBPACK_IMPORTED_MODULE_1__.MessageParser.STATUS_REQ;
        this.nodeName = obj;
    }
    addButton(name) {
        this.buttons.push(name);
    }
    addRelay(name, status) {
        this.relays.push(name);
        this.relayStatus.push(status);
    }
    copyToString(buffer, pos, len) {
        let str = '';
        for (var i = 0; i < len; ++i) {
            var code = buffer[pos + i];
            str += String.fromCharCode(code);
        }
        return str;
    }
    copy(buffer, str, pos, len) {
        for (var i = 0; i < len; ++i) {
            var code = str.length > i ? str.charCodeAt(i) : 0;
            buffer[pos + i] = code;
        }
    }
    zeroFill(buffer, pos, len) {
        for (var i = 0; i < len; ++i) {
            buffer[pos + i] = 0;
        }
    }
    getMessage() {
        let buffer = new Uint8Array(120);
        buffer[3] = (this.header & 0XFF000000) >> 24;
        buffer[2] = (this.header & 0XFF0000) >> 16;
        buffer[1] = (this.header & 0XFF00) >> 8;
        buffer[0] = (this.header & 0XFF);
        let pos = 4;
        this.copy(buffer, this.nodeName, pos, 16);
        pos += 16;
        for (let i = 0; i < 3; i++) {
            if (this.relays.length > i)
                this.copy(buffer, this.relays[i], pos, 16);
            else
                this.zeroFill(buffer, pos, 16);
            pos += 16;
        }
        for (let i = 0; i < 3; i++) {
            if (this.buttons.length > i)
                this.copy(buffer, this.buttons[i], pos, 16);
            else
                this.zeroFill(buffer, pos, 16);
            pos += 16;
        }
        ;
        for (let i = 0; i < 3; i++) {
            if (this.relayStatus.length > i)
                buffer[pos] = this.relayStatus[i];
            else
                buffer[pos] = 0;
            pos++;
        }
        buffer[pos] = 0;
        let b64 = (0,_util_base64__WEBPACK_IMPORTED_MODULE_0__.bytesToBase64)(buffer);
        return b64;
    }
}


/***/ }),

/***/ 2022:
/*!***************************************!*\
  !*** ./src/app/model/udpStatusRes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UdpStatusRes": () => (/* binding */ UdpStatusRes)
/* harmony export */ });
class UdpStatusRes {
    constructor(obj) {
        this.relays = [];
        this.buttons = [];
        this.relayStatus = [];
        this.header = obj[0];
        let pos = 4;
        this.nodeName = this.copyToString(obj, pos, 16);
        pos += 16;
        for (let i = 0; i < 3; i++) {
            this.relays[i] = this.copyToString(obj, pos, 16);
            pos += 16;
        }
        for (let i = 0; i < 3; i++) {
            this.buttons[i] = this.copyToString(obj, pos, 16);
            pos += 16;
        }
        ;
        for (let i = 0; i < 3; i++) {
            this.relayStatus[i] = obj[pos];
            pos++;
        }
    }
    copyToString(buffer, pos, len) {
        let str = '';
        while (buffer[pos + len - 1] == 0)
            len--;
        for (var i = 0; i < len; ++i) {
            var code = buffer[pos + i];
            str += String.fromCharCode(code);
        }
        return str.trim();
    }
}


/***/ }),

/***/ 5529:
/*!********************************************!*\
  !*** ./src/app/relays/relays.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelaysComponent": () => (/* binding */ RelaysComponent)
/* harmony export */ });
/* harmony import */ var _model_udpStatusReq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/udpStatusReq */ 2534);
/* harmony import */ var _model_udpRelayStateChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/udpRelayStateChange */ 7792);
/* harmony import */ var _util_messageParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/messageParser */ 4816);
/* harmony import */ var _util_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/base64 */ 6790);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 2457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);








function RelaysComponent_a_6_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 8);
} }
function RelaysComponent_a_6_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 9);
} }
function RelaysComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RelaysComponent_a_6_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const relay_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.click(relay_r1["name"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, RelaysComponent_a_6_img_3_Template, 1, 0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, RelaysComponent_a_6_img_4_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const relay_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](relay_r1["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", relay_r1["status"] == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", relay_r1["status"] == 1);
} }
class RelaysComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.faRedoAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faRedoAlt;
        this.relays = [];
    }
    ngOnInit() {
        console.log('aaaaa');
        window.angularComponentReference = window.angularComponentReference ||
            { component: this, zone: this.ngZone, broadcastReceivedBase64: (ip, msg) => this.broadcastReceivedBase64(ip, msg), };
        this.broadcastBase64();
    }
    broadcastReceivedBase64(ip, msg) {
        let buf = (0,_util_base64__WEBPACK_IMPORTED_MODULE_3__.base64ToBytes)(msg);
        let message = _util_messageParser__WEBPACK_IMPORTED_MODULE_2__.MessageParser.parse(msg);
        if (message.header == _util_messageParser__WEBPACK_IMPORTED_MODULE_2__.MessageParser.STATUS_RES) {
            let res = message;
            for (let i = 0; i < res.relays.length; i++) {
                if (res.relays[i] && res.relays[i].trim().length > 0)
                    this.relays[this.relayIndex(res.relays[i])] = { 'name': res.relays[i], 'status': res.relayStatus[i] };
            }
        }
    }
    relayIndex(name) {
        for (let i = 0; i < this.relays.length; i++) {
            if (this.relays[i].name == name)
                return i;
        }
        return this.relays.length;
    }
    broadcastBase64() {
        try {
            let req = new _model_udpStatusReq__WEBPACK_IMPORTED_MODULE_0__.UdpStatusReq('Android');
            Android.broadcastBase64(req.getMessage());
        }
        catch (e) {
            // estamos no browser
            let result = e.message;
            this.testMsg();
        }
    }
    click(relay) {
        let status = this.relays[this.relayIndex(relay)]['status'];
        status = status == 1 ? 0 : 1;
        this.relays[this.relayIndex(relay)]['status'] = status;
        let req = new _model_udpRelayStateChange__WEBPACK_IMPORTED_MODULE_1__.UdpRelayStateChange('Android', relay, status);
        try {
            Android.broadcastBase64(req.getMessage());
        }
        catch (e) {
            // estamos no browser
            let result = e.message;
            console.log(result);
        }
    }
    testMsg() {
        let ip1 = '192.168.15.35';
        let msg1 = 'AQAAAGRpbm5pbmcgcm9vbQAAAABiYWxjb255AAAAAAAAAAAAbmljaGUAAAAAAAAAAAAAAGRpbm5pbmcAAAAAAAAAAABiYWxjb255AAAAAAAAAAAAZGlubmluZwAAAAAAAAAAAG5pY2hlAAAAAAAAAAAAAAAAAAAA';
        let ip2 = '192.168.15.33';
        let msg2 = 'AQAAAGxpdmluZyByb29tAAAAAABsaXZpbmcgcm9vbQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsaXZpbmcgcm9vbQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8A';
        let ip3 = '192.168.15.32';
        let msg3 = 'AQAAAGdhYmkgcm9vbQAAAAAAAABnYWJpIHJvb20AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABnYWJpIHJvb20AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8A';
        let ip4 = '192.168.15.34';
        let msg4 = 'AQAAAGtpdGNoZW4AAAAAAAAAAABraXRjaGVuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABraXRjaGVuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8A';
        let ip5 = '192.168.15.36';
        let msg5 = 'AQAAAGxpdmluZyAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuaWNoZQAAAAAAAAAAAAAAbGl2aW5nIHJvb20AAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A';
        this.broadcastReceivedBase64(ip1, msg1);
        this.broadcastReceivedBase64(ip2, msg2);
        this.broadcastReceivedBase64(ip3, msg3);
        this.broadcastReceivedBase64(ip4, msg4);
        this.broadcastReceivedBase64(ip5, msg5);
    }
}
RelaysComponent.ɵfac = function RelaysComponent_Factory(t) { return new (t || RelaysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone)); };
RelaysComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RelaysComponent, selectors: [["app-relays"]], decls: 12, vars: 2, consts: [["role", "main", 1, "content"], [1, "card-container"], ["class", "card", "target", "_blank", "rel", "noopener", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "highlight-card", "card-small", 2, "cursor", "pointer", 3, "click"], [3, "icon"], ["target", "_blank", "rel", "noopener", 1, "card", 3, "click"], ["style", "margin-left:5px", "class", "material-icons", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "src", "/assets/bulb-off.png", 4, "ngIf"], ["style", "margin-left:5px", "class", "material-icons", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "src", "/assets/bulb-on.png", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "src", "/assets/bulb-off.png", 1, "material-icons", 2, "margin-left", "5px"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "src", "/assets/bulb-on.png", 1, "material-icons", 2, "margin-left", "5px"]], template: function RelaysComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Relays");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Lista de relays encontrados na rede WiFi");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, RelaysComponent_a_6_Template, 5, 3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RelaysComponent_Template_div_click_8_listener() { return ctx.broadcastBase64(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.relays);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faRedoAlt);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWxheXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6790:
/*!********************************!*\
  !*** ./src/app/util/base64.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bytesToBase64": () => (/* binding */ bytesToBase64),
/* harmony export */   "base64ToBytes": () => (/* binding */ base64ToBytes),
/* harmony export */   "base64encode": () => (/* binding */ base64encode),
/* harmony export */   "base64decode": () => (/* binding */ base64decode)
/* harmony export */ });
/*
MIT License
Copyright (c) 2020 Egor Nepomnyaschih
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
/*
// This constant can also be computed with the following algorithm:
const base64abc = [],
    A = "A".charCodeAt(0),
    a = "a".charCodeAt(0),
    n = "0".charCodeAt(0);
for (let i = 0; i < 26; ++i) {
    base64abc.push(String.fromCharCode(A + i));
}
for (let i = 0; i < 26; ++i) {
    base64abc.push(String.fromCharCode(a + i));
}
for (let i = 0; i < 10; ++i) {
    base64abc.push(String.fromCharCode(n + i));
}
base64abc.push("+");
base64abc.push("/");
*/
const base64abc = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"
];
/*
// This constant can also be computed with the following algorithm:
const l = 256, base64codes = new Uint8Array(l);
for (let i = 0; i < l; ++i) {
    base64codes[i] = 255; // invalid character
}
base64abc.forEach((char, index) => {
    base64codes[char.charCodeAt(0)] = index;
});
base64codes["=".charCodeAt(0)] = 0; // ignored anyway, so we just need to prevent an error
*/
const base64codes = [
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 255, 255, 255, 0, 255, 255,
    255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255,
    255, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
];
function getBase64Code(charCode) {
    if (charCode >= base64codes.length) {
        throw new Error("Unable to parse base64 string.");
    }
    const code = base64codes[charCode];
    if (code === 255) {
        throw new Error("Unable to parse base64 string.");
    }
    return code;
}
function bytesToBase64(bytes) {
    let result = '', i, l = bytes.length;
    for (i = 2; i < l; i += 3) {
        result += base64abc[bytes[i - 2] >> 2];
        result += base64abc[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
        result += base64abc[((bytes[i - 1] & 0x0F) << 2) | (bytes[i] >> 6)];
        result += base64abc[bytes[i] & 0x3F];
    }
    if (i === l + 1) { // 1 octet yet to write
        result += base64abc[bytes[i - 2] >> 2];
        result += base64abc[(bytes[i - 2] & 0x03) << 4];
        result += "==";
    }
    if (i === l) { // 2 octets yet to write
        result += base64abc[bytes[i - 2] >> 2];
        result += base64abc[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
        result += base64abc[(bytes[i - 1] & 0x0F) << 2];
        result += "=";
    }
    return result;
}
function base64ToBytes(str) {
    if (str.length % 4 !== 0) {
        throw new Error("Unable to parse base64 string." + str.length);
    }
    const index = str.indexOf("=");
    if (index !== -1 && index < str.length - 2) {
        throw new Error("Unable to parse base64 string2.");
    }
    let missingOctets = str.endsWith("==") ? 2 : str.endsWith("=") ? 1 : 0, n = str.length, result = new Uint8Array(3 * (n / 4)), buffer;
    for (let i = 0, j = 0; i < n; i += 4, j += 3) {
        buffer =
            getBase64Code(str.charCodeAt(i)) << 18 |
                getBase64Code(str.charCodeAt(i + 1)) << 12 |
                getBase64Code(str.charCodeAt(i + 2)) << 6 |
                getBase64Code(str.charCodeAt(i + 3));
        result[j] = buffer >> 16;
        result[j + 1] = (buffer >> 8) & 0xFF;
        result[j + 2] = buffer & 0xFF;
    }
    return result.subarray(0, result.length - missingOctets);
}
function base64encode(str, encoder = new TextEncoder()) {
    return bytesToBase64(encoder.encode(str));
}
function base64decode(str, decoder = new TextDecoder()) {
    return decoder.decode(base64ToBytes(str));
}


/***/ }),

/***/ 4816:
/*!***************************************!*\
  !*** ./src/app/util/messageParser.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageParser": () => (/* binding */ MessageParser)
/* harmony export */ });
/* harmony import */ var _util_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/base64 */ 6790);
/* harmony import */ var _model_udpStatusRes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/udpStatusRes */ 2022);


// header[0]:	0 - status request
//				1 - status reply
//				2 - button change
class MessageParser {
    static parse(msg) {
        let buf = (0,_util_base64__WEBPACK_IMPORTED_MODULE_0__.base64ToBytes)(msg);
        let header = (buf[3] << 24) + (buf[2] << 16) + (buf[1] << 8) + buf[0];
        if (header == this.STATUS_RES) {
            return new _model_udpStatusRes__WEBPACK_IMPORTED_MODULE_1__.UdpStatusRes(buf);
        }
        return new _model_udpStatusRes__WEBPACK_IMPORTED_MODULE_1__.UdpStatusRes(buf);
    }
}
MessageParser.STATUS_REQ = 0;
MessageParser.STATUS_RES = 1;
MessageParser.RELAYSTATE_TOGGLE = 2;
MessageParser.RELAYSTATE_CHANGE = 3;


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map