(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["turma-turma-module"],{

/***/ "./src/app/turma/profile2/profile2.component.html":
/*!********************************************************!*\
  !*** ./src/app/turma/profile2/profile2.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile2 works! {{id}}\n</p>\n"

/***/ }),

/***/ "./src/app/turma/profile2/profile2.component.scss":
/*!********************************************************!*\
  !*** ./src/app/turma/profile2/profile2.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/turma/profile2/profile2.component.ts":
/*!******************************************************!*\
  !*** ./src/app/turma/profile2/profile2.component.ts ***!
  \******************************************************/
/*! exports provided: Profile2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile2Component", function() { return Profile2Component; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Profile2Component = /** @class */ (function () {
    function Profile2Component(router) {
        this.router = router;
    }
    Profile2Component.prototype.ngOnInit = function () {
        this.id = this.router.snapshot.paramMap.get('id');
    };
    Profile2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile2',
            template: __webpack_require__(/*! ./profile2.component.html */ "./src/app/turma/profile2/profile2.component.html"),
            styles: [__webpack_require__(/*! ./profile2.component.scss */ "./src/app/turma/profile2/profile2.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], Profile2Component);
    return Profile2Component;
}());



/***/ }),

/***/ "./src/app/turma/turma.module.ts":
/*!***************************************!*\
  !*** ./src/app/turma/turma.module.ts ***!
  \***************************************/
/*! exports provided: TurmaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaPageModule", function() { return TurmaPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _turma_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./turma.page */ "./src/app/turma/turma.page.ts");
/* harmony import */ var _profile2_profile2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile2/profile2.component */ "./src/app/turma/profile2/profile2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _turma_page__WEBPACK_IMPORTED_MODULE_5__["TurmaPage"]
    },
    {
        path: ':id',
        component: _profile2_profile2_component__WEBPACK_IMPORTED_MODULE_6__["Profile2Component"]
    }
];
var TurmaPageModule = /** @class */ (function () {
    function TurmaPageModule() {
    }
    TurmaPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_turma_page__WEBPACK_IMPORTED_MODULE_5__["TurmaPage"], _profile2_profile2_component__WEBPACK_IMPORTED_MODULE_6__["Profile2Component"]]
        })
    ], TurmaPageModule);
    return TurmaPageModule;
}());



/***/ }),

/***/ "./src/app/turma/turma.page.html":
/*!***************************************!*\
  !*** ./src/app/turma/turma.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>turma</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/turma/turma.page.scss":
/*!***************************************!*\
  !*** ./src/app/turma/turma.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/turma/turma.page.ts":
/*!*************************************!*\
  !*** ./src/app/turma/turma.page.ts ***!
  \*************************************/
/*! exports provided: TurmaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaPage", function() { return TurmaPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TurmaPage = /** @class */ (function () {
    function TurmaPage() {
    }
    TurmaPage.prototype.ngOnInit = function () {
    };
    TurmaPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-turma',
            template: __webpack_require__(/*! ./turma.page.html */ "./src/app/turma/turma.page.html"),
            styles: [__webpack_require__(/*! ./turma.page.scss */ "./src/app/turma/turma.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], TurmaPage);
    return TurmaPage;
}());



/***/ })

}]);
//# sourceMappingURL=turma-turma-module.js.map