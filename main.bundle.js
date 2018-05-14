webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_bad_input_exception__ = __webpack_require__("./src/app/common/bad-input-exception.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_not_found_exception__ = __webpack_require__("./src/app/common/not-found-exception.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_generic_exception__ = __webpack_require__("./src/app/common/generic-exception.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DataService = /** @class */ (function () {
    function DataService(url, http) {
        this.url = url;
        this.http = http;
    }
    DataService.prototype.getAll = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.get = function (id) {
        var urlPrefix = "";
        if (id) {
            if (id.startsWith("?") == false) {
                urlPrefix = "\\";
            }
            return this.http.get(this.url + urlPrefix + id)
                .map(function (response) { return response.json(); })
                .catch(this.handleError);
        }
    };
    DataService.prototype.getRecord = function (resource) {
        var head = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]();
        options.headers = head;
        return this.http.post(this.url, JSON.stringify(resource), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.create = function (resource) {
        var head = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]();
        options.headers = head;
        return this.http.post(this.url, JSON.stringify(resource), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.update = function (resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this.url + '/' + id)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        if (error.status === 400)
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_0__common_bad_input_exception__["a" /* BadInputException */](error.json()));
        if (error.status === 404)
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_1__common_not_found_exception__["a" /* NotFoundException */]());
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_2__common_generic_exception__["a" /* GenericEcxeption */](error));
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [String, __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/Services/dyanmic-grid.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DyanmicGridService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/Services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DyanmicGridService = /** @class */ (function (_super) {
    __extends(DyanmicGridService, _super);
    function DyanmicGridService(http) {
        return _super.call(this, 'https://mmsaleh.com/api/GridMetaData', http) || this;
    }
    DyanmicGridService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DyanmicGridService);
    return DyanmicGridService;
}(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]));



/***/ }),

/***/ "./src/app/Services/dynamic-form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/Services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicFormService = /** @class */ (function (_super) {
    __extends(DynamicFormService, _super);
    function DynamicFormService(http, db) {
        var _this = _super.call(this, 'https://mmsaleh.com/api/values', http) || this;
        _this.db = db;
        return _this;
    }
    DynamicFormService.prototype.get1 = function (text, language) {
        return this.db.object('/Organizations/PortalOrg/forms/' + text + '/' + language).valueChanges();
    };
    DynamicFormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DynamicFormService);
    return DynamicFormService;
}(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]));



/***/ }),

/***/ "./src/app/Services/lookups.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookupsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/Services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LookupsService = /** @class */ (function (_super) {
    __extends(LookupsService, _super);
    function LookupsService(http) {
        return _super.call(this, 'https://mmsaleh.com/api/lookups', http) || this;
    }
    LookupsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LookupsService);
    return LookupsService;
}(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]));



/***/ }),

/***/ "./src/app/Services/operations.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/Services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OperationsService = /** @class */ (function (_super) {
    __extends(OperationsService, _super);
    function OperationsService(http) {
        return _super.call(this, 'https://mmsaleh.com/api/data', http) || this;
    }
    OperationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], OperationsService);
    return OperationsService;
}(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]));



/***/ }),

/***/ "./src/app/Services/optionsets.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsetsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/Services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OptionsetsService = /** @class */ (function (_super) {
    __extends(OptionsetsService, _super);
    function OptionsetsService(http) {
        return _super.call(this, 'https://mmsaleh.com/api/optionsets', http) || this;
    }
    OptionsetsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], OptionsetsService);
    return OptionsetsService;
}(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]));



/***/ }),

/***/ "./src/app/admin/add-form/add-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/add-form/add-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n<span>Entity Name</span>\n<select name=\"\" id=\"\">\n  <option>Entity 1</option>\n  <option>Entity 2</option>\n  <option>Entity 3</option>\n</select>\n\n<span>Listing View</span>\n<select name=\"\" id=\"\">\n  <option>View 1</option>\n  <option>View 2</option>\n  <option>View 3</option>\n</select>\n\n<span>Base customer field</span>\n<select name=\"\" id=\"\">\n  <option>Field 1</option>\n  <option>Field 2</option>\n  <option>Field 3</option>\n</select>"

/***/ }),

/***/ "./src/app/admin/add-form/add-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddFormComponent = /** @class */ (function () {
    function AddFormComponent() {
    }
    AddFormComponent.prototype.ngOnInit = function () {
    };
    AddFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-form',
            template: __webpack_require__("./src/app/admin/add-form/add-form.component.html"),
            styles: [__webpack_require__("./src/app/admin/add-form/add-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddFormComponent);
    return AddFormComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n\r\n <!-- <dynamic-menu></dynamic-menu> -->\r\n\r\n<!-- <router-outlet></router-outlet> -->\r\n<home></home>\r\n\r\n\r\n<!-- <dynamic-form></dynamic-form> --> \r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_operations_service__ = __webpack_require__("./src/app/Services/operations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dynamic_form_dynamic_form_component__ = __webpack_require__("./src/app/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dynamic_form_form_components_dynamic_field_dynamic_field_component__ = __webpack_require__("./src/app/dynamic-form/form.components/dynamic-field/dynamic-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_paginator__ = __webpack_require__("./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Services_dynamic_form_service__ = __webpack_require__("./src/app/Services/dynamic-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dynamic_form_form_components_form_tab_form_tab_component__ = __webpack_require__("./src/app/dynamic-form/form.components/form-tab/form-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dynamic_form_form_components_form_section_form_section_component__ = __webpack_require__("./src/app/dynamic-form/form.components/form-section/form-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dynamic_form_form_components_form_column_form_column_component__ = __webpack_require__("./src/app/dynamic-form/form.components/form-column/form-column.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_accordion__ = __webpack_require__("./node_modules/primeng/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_gmap__ = __webpack_require__("./node_modules/primeng/gmap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_gmap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_primeng_gmap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dynamic_form_form_components_sub_grid_sub_grid_component__ = __webpack_require__("./src/app/dynamic-form/form.components/sub-grid/sub-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_datatable__ = __webpack_require__("./node_modules/primeng/datatable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_primeng_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Services_dyanmic_grid_service__ = __webpack_require__("./src/app/Services/dyanmic-grid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_primeng_tabview__ = __webpack_require__("./node_modules/primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__dynamic_form_form_components_dynamic_dropdownlist_dynamic_dropdownlist_component__ = __webpack_require__("./src/app/dynamic-form/form.components/dynamic-dropdownlist/dynamic-dropdownlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Services_lookups_service__ = __webpack_require__("./src/app/Services/lookups.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_primeng_progressbar__ = __webpack_require__("./node_modules/primeng/progressbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_primeng_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_primeng_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Services_optionsets_service__ = __webpack_require__("./src/app/Services/optionsets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__dynamic_form_form_components_dynamic_optionset_dynamic_optionset_component__ = __webpack_require__("./src/app/dynamic-form/form.components/dynamic-optionset/dynamic-optionset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_primeng_menubar__ = __webpack_require__("./node_modules/primeng/menubar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_primeng_menubar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_primeng_menubar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__dynamic_form_form_components_dynamic_menu_dynamic_menu_component__ = __webpack_require__("./src/app/dynamic-form/form.components/dynamic-menu/dynamic-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__common_not_found_not_found_component__ = __webpack_require__("./src/app/common/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__test_test_component__ = __webpack_require__("./src/app/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__test2_test2_component__ = __webpack_require__("./src/app/test2/test2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__listview_listview_component__ = __webpack_require__("./src/app/listview/listview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__left_side_left_side_component__ = __webpack_require__("./src/app/left-side/left-side.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__notifications_notifications_component__ = __webpack_require__("./src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__page_page_footer_page_footer_component__ = __webpack_require__("./src/app/page/page-footer/page-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__page_page_header_page_header_component__ = __webpack_require__("./src/app/page/page-header/page-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__profile_profile_timeline_profile_timeline_component__ = __webpack_require__("./src/app/profile/profile-timeline/profile-timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__page_photo_header_photo_header_component__ = __webpack_require__("./src/app/page/photo-header/photo-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__profile_professional_career_professional_career_component__ = __webpack_require__("./src/app/profile/professional-career/professional-career.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__profile_skills_skills_component__ = __webpack_require__("./src/app/profile/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__profile_profile_profile_component__ = __webpack_require__("./src/app/profile/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__page_page_header_simple_page_header_simple_component__ = __webpack_require__("./src/app/page/page-header-simple/page-header-simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__admin_add_form_add_form_component__ = __webpack_require__("./src/app/admin/add-form/add-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















 //accordion and accordion tab


































// import {FormsModule} from '@angular/forms/forms'
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dynamic_form_form_components_dynamic_field_dynamic_field_component__["a" /* DynamicFieldComponent */],
                __WEBPACK_IMPORTED_MODULE_16__dynamic_form_form_components_form_tab_form_tab_component__["a" /* FormTabComponent */],
                __WEBPACK_IMPORTED_MODULE_17__dynamic_form_form_components_form_section_form_section_component__["a" /* FormSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_18__dynamic_form_form_components_form_column_form_column_component__["a" /* FormColumnComponent */],
                __WEBPACK_IMPORTED_MODULE_23__dynamic_form_form_components_sub_grid_sub_grid_component__["a" /* SubGridComponent */],
                __WEBPACK_IMPORTED_MODULE_27__dynamic_form_form_components_dynamic_dropdownlist_dynamic_dropdownlist_component__["a" /* DynamicDropdownlistComponent */],
                __WEBPACK_IMPORTED_MODULE_31__dynamic_form_form_components_dynamic_optionset_dynamic_optionset_component__["a" /* DynamicOptionsetComponent */],
                __WEBPACK_IMPORTED_MODULE_33__dynamic_form_form_components_dynamic_menu_dynamic_menu_component__["a" /* DynamicMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_35__common_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_36__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_37__test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_38__test2_test2_component__["a" /* Test2Component */],
                __WEBPACK_IMPORTED_MODULE_40__listview_listview_component__["a" /* ListviewComponent */],
                __WEBPACK_IMPORTED_MODULE_43__left_side_left_side_component__["a" /* LeftSideComponent */],
                __WEBPACK_IMPORTED_MODULE_44__notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_45__page_page_footer_page_footer_component__["a" /* PageFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_46__page_page_header_page_header_component__["a" /* PageHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_47__profile_profile_timeline_profile_timeline_component__["a" /* ProfileTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_48__page_photo_header_photo_header_component__["a" /* PhotoHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_49__profile_professional_career_professional_career_component__["a" /* ProfessionalCareerComponent */],
                __WEBPACK_IMPORTED_MODULE_50__profile_skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_51__profile_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_52__page_page_header_simple_page_header_simple_component__["a" /* PageHeaderSimpleComponent */],
                __WEBPACK_IMPORTED_MODULE_53__admin_add_form_add_form_component__["a" /* AddFormComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_20_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_accordion__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_22_primeng_gmap__["GMapModule"],
                __WEBPACK_IMPORTED_MODULE_24_primeng_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_26_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_29_primeng_progressbar__["ProgressBarModule"],
                __WEBPACK_IMPORTED_MODULE_32_primeng_menubar__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_39__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_paginator__["a" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_41_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_42_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_router__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_51__profile_profile_profile_component__["a" /* ProfileComponent */]
                    },
                    {
                        path: 'home',
                        component: __WEBPACK_IMPORTED_MODULE_36__home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: 'form',
                        component: __WEBPACK_IMPORTED_MODULE_7__dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */]
                    },
                    {
                        path: 'aboutme',
                        component: __WEBPACK_IMPORTED_MODULE_51__profile_profile_profile_component__["a" /* ProfileComponent */]
                    },
                    {
                        path: 'form/:id/:lang',
                        component: __WEBPACK_IMPORTED_MODULE_7__dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */]
                    },
                    {
                        path: 'form/:id',
                        component: __WEBPACK_IMPORTED_MODULE_7__dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */]
                    },
                    {
                        path: "test2",
                        component: __WEBPACK_IMPORTED_MODULE_38__test2_test2_component__["a" /* Test2Component */]
                    },
                    {
                        path: '**',
                        component: __WEBPACK_IMPORTED_MODULE_35__common_not_found_not_found_component__["a" /* NotFoundComponent */]
                    }
                ])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__Services_dynamic_form_service__["a" /* DynamicFormService */],
                __WEBPACK_IMPORTED_MODULE_25__Services_dyanmic_grid_service__["a" /* DyanmicGridService */],
                __WEBPACK_IMPORTED_MODULE_28__Services_lookups_service__["a" /* LookupsService */],
                __WEBPACK_IMPORTED_MODULE_30__Services_optionsets_service__["a" /* OptionsetsService */],
                __WEBPACK_IMPORTED_MODULE_1__Services_operations_service__["a" /* OperationsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/bad-input-exception.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadInputException; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_exception__ = __webpack_require__("./src/app/common/generic-exception.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BadInputException = /** @class */ (function (_super) {
    __extends(BadInputException, _super);
    function BadInputException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BadInputException;
}(__WEBPACK_IMPORTED_MODULE_0__generic_exception__["a" /* GenericEcxeption */]));



/***/ }),

/***/ "./src/app/common/generic-exception.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericEcxeption; });
var GenericEcxeption = /** @class */ (function () {
    function GenericEcxeption(originalException) {
        this.originalException = originalException;
    }
    return GenericEcxeption;
}());



/***/ }),

/***/ "./src/app/common/not-found-exception.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundException; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_exception__ = __webpack_require__("./src/app/common/generic-exception.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NotFoundException = /** @class */ (function (_super) {
    __extends(NotFoundException, _super);
    function NotFoundException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundException;
}(__WEBPACK_IMPORTED_MODULE_0__generic_exception__["a" /* GenericEcxeption */]));



/***/ }),

/***/ "./src/app/common/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/common/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/common/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/common/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/common/utilities.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utilities; });
var utilities = /** @class */ (function () {
    function utilities() {
    }
    utilities.getIcon = function (text) {
        // return "";
        if (text == undefined)
            return "view_compact";
        var icon = "";
        switch (text) {
            case "account":
                icon = "work";
                break;
            case "contact":
                icon = "person";
                break;
            case "contractdetail":
                icon = "person";
                break;
            case "incident":
                icon = "build";
                break;
            case "kbarticle":
                icon = "book";
                break;
            case "subject":
                icon = "subject";
                break;
            case "product":
                icon = "shopping_cart";
                break;
            case "entitlement":
                icon = "import_contacts";
                break;
            default:
                icon = "";
                break;
        }
        if (icon)
            return icon;
        if (icon == "") {
            var fieldName = text.toLowerCase();
            // alert(fieldName);
            if (fieldName.indexOf("mobile") > 0) {
                icon = "smartphone";
            }
            else if (fieldName.indexOf("phone") > 0) {
                icon = "phone";
            }
            else if (fieldName.indexOf("email") > 0) {
                icon = "email";
            }
            else if (fieldName.indexOf("address") > 0) {
                icon = "location_on";
            }
            else if (fieldName.indexOf("note") > 0) {
                icon = "note";
            }
            else if (fieldName.indexOf("desciption") > 0) {
                icon = "description";
            }
            else if (fieldName.indexOf("date") > 0) {
                icon = "date_range";
            }
            else if (fieldName.indexOf("title") > 0) {
                icon = "subtitles";
            }
            else if (fieldName.indexOf("subject") > 0) {
                icon = "subject";
            }
            else if (fieldName.indexOf("number") > 0) {
                icon = "format_list_numbered";
            }
            else if (fieldName.indexOf("amount") > 0) {
                icon = "attach_money";
            }
            else if (fieldName.indexOf("currency") > 0) {
                icon = "attach_money";
            }
            else if (fieldName.indexOf("duration") > 0) {
                icon = "access_time";
            }
        }
        if (icon == "")
            return "view_compact";
        else {
            return icon;
        }
    };
    return utilities;
}());



/***/ }),

/***/ "./src/app/dynamic-form/dynamic-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dynamic-form/dynamic-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div dir=\"{{ rtl }}\" class=\"ui-{{ rtl }}\" id=\"main-form\">\n  <form class=\"dynamic-form\" [formGroup]=\"form\" (ngSubmit)=\"submit(form)\">    \n      <!-- <div class=\"button-row\" *ngIf=\"entityAttributes.formType==2\">\n  \n          <button mat-raised-button color=\"primary\">Save</button>\n          <button mat-raised-button color=\"accent\">Delete</button>\n          <button mat-raised-button color=\"accent\">Reopen</button>\n          \n        </div> -->\n\n\n    <p-accordion [multiple]=\"true\" >\n      <p-accordionTab *ngFor=\"let row of CRMForm\" [selected]=\"true\" header=\"{{ (row.showlabel==true?  row.labels.label.description : '') }}\">\n        <form-tab class=\"form-tab\" [parent]=\"form\" [name]=\"row.name\" [columns]=\"row.columns\" [labels]=\"row.labels.label.description\"\n          [showlabel]=\"row.showlabel\" [visible]=\"row.visible\" [disabled]=\"disabled\" [entityAttributes]=\"entityAttributes\">\n        </form-tab>\n      </p-accordionTab>\n    </p-accordion>    \n  </form>\n</div>"

/***/ }),

/***/ "./src/app/dynamic-form/dynamic-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_dynamic_form_service__ = __webpack_require__("./src/app/Services/dynamic-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_operations_service__ = __webpack_require__("./src/app/Services/operations.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormType;
(function (FormType) {
    FormType[FormType["Form"] = 2] = "Form";
    FormType[FormType["QuickView"] = 1] = "QuickView";
})(FormType || (FormType = {}));
var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(service, activeRouter, router, operations) {
        this.service = service;
        this.activeRouter = activeRouter;
        this.router = router;
        this.operations = operations;
        this._formID = "";
        this.formType = FormType.Form;
        this.recordID = "";
        // @Input("language") language: number = 1033;
        this.entityAttributes = { formType: 0 }; //={entityName:"",entityCode:1};
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            controls: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormArray"]([]),
            control: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
    }
    Object.defineProperty(DynamicFormComponent.prototype, "formID", {
        get: function () {
            return this._formID;
        },
        set: function (value) {
            this._formID = value.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "rtl", {
        get: function () {
            if (this.entityAttributes.language == 1025) {
                return "rtl";
            }
            else {
                return "ltr";
            }
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.entityAttributes.language) {
            this.entityAttributes.language = 1033;
        }
        if (this.formType == FormType.Form) {
            this.activeRouter.paramMap.subscribe(function (params) {
                _this.formID = params.get("id");
                var lang = +params.get("lang");
                if (lang)
                    _this.entityAttributes.language = lang;
                _this.service
                    .get1(_this.formID, _this.entityAttributes.language
                // "?id=" + this.formID + "&language=" + this.entityAttributes.language
                )
                    .subscribe(function (response) {
                    _this.handleResonse(response);
                    // this.getGata("49A0E5B9-88DF-E311-B8E5-6C3BE5A8B200");
                });
            });
        }
        else {
            this.service
                .get1(this.formID.toLowerCase(), this.entityAttributes.language)
                .subscribe(function (response) {
                _this.handleResonse(response, 1);
            });
        }
    };
    DynamicFormComponent.prototype.getGata = function (recordId) {
        var _this = this;
        var obj = {
            entityName: this.entityAttributes.entityName,
            id: recordId,
            attributes: []
        };
        Object.keys(this.form.controls).forEach(function (key) {
            var ctrl = _this.form.get(key);
            obj.attributes.push({
                key: key,
                type: ctrl.controlType
            });
        });
        this.operations.getRecord(obj).subscribe(function (response) {
            // console.log(response);
            response.forEach(function (kv) {
                var ctrl = _this.form.get(kv.key);
                if (ctrl != null) {
                    if (kv.value.value != null) {
                        // console.log(kv.value);
                        ctrl.targetEntity = kv.value.key;
                        ctrl.setValue(kv.value);
                    }
                    else {
                        ctrl.setValue(kv.value);
                    }
                }
            });
        });
    };
    DynamicFormComponent.prototype.handleResonse = function (response, formType) {
        if (formType === void 0) { formType = 2; }
        this.CRMForm = response.tabs;
        this.entityAttributes["entityName"] = response.entityName;
        this.entityAttributes["entityCode"] = response.entityCode;
        this.entityAttributes["formType"] = formType == 2 ? 2 : this.formType;
        this.form = this.buildForm(response.tabs);
    };
    DynamicFormComponent.prototype.buildForm = function (formTabs) {
        var _this = this;
        var group = {};
        if (formTabs)
            formTabs.forEach(function (tab) {
                if (tab.columns)
                    tab.columns.forEach(function (column) {
                        if (column.sections)
                            column.sections.forEach(function (section) {
                                if (section.rows)
                                    section.rows.forEach(function (row) {
                                        row.forEach(function (control) {
                                            if (control.control != null) {
                                                var newControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null);
                                                if (_this.formType != FormType.Form)
                                                    newControl.disable();
                                                newControl.controlType = control.control.classid;
                                                newControl.relatedEntities =
                                                    control.control.relatedEntities;
                                                if (newControl.relatedEntities != null &&
                                                    newControl.relatedEntities.length > 0)
                                                    newControl.targetEntity =
                                                        newControl.relatedEntities[0];
                                                if (control.control != null) {
                                                    group[control.control.id] = newControl;
                                                }
                                            }
                                        });
                                    });
                            });
                    });
            });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](group);
    };
    DynamicFormComponent.prototype.ngAfterViewInit = function () {
    };
    DynamicFormComponent.prototype.submit = function (form) {
        var _this = this;
        var obj = {
            entityName: this.entityAttributes.entityName,
            attributes: []
        };
        Object.keys(this.form.controls).forEach(function (key) {
            var ctrl = _this.form.get(key);
            if (ctrl.dirty) {
                obj.attributes.push({
                    key: key,
                    value: ctrl.value,
                    type: ctrl.controlType,
                    targetEntity: ctrl.targetEntity
                });
            }
        });
        this.service.create(obj).subscribe(function (response) {
            // console.log(response);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("formID"),
        __metadata("design:type", String)
    ], DynamicFormComponent.prototype, "_formID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("formType"),
        __metadata("design:type", Number)
    ], DynamicFormComponent.prototype, "formType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("recordID"),
        __metadata("design:type", String)
    ], DynamicFormComponent.prototype, "recordID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("Tab"),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "Tab", void 0);
    DynamicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "dynamic-form",
            template: __webpack_require__("./src/app/dynamic-form/dynamic-form.component.html"),
            styles: [__webpack_require__("./src/app/dynamic-form/dynamic-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_dynamic_form_service__["a" /* DynamicFormService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4__Services_operations_service__["a" /* OperationsService */]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form/form.components/ListControlBase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListControlBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controlBase__ = __webpack_require__("./src/app/dynamic-form/form.components/controlBase.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ListControlBase = /** @class */ (function (_super) {
    __extends(ListControlBase, _super);
    function ListControlBase(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.dataLoaded = false;
        _this.propagateChange = function (_) { };
        return _this;
    }
    ListControlBase.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    ListControlBase.prototype.registerOnTouched = function (fn) {
        this.toched = fn;
    };
    ListControlBase.prototype.setDisabledState = function (isDisabled) {
        //alert("disabled" + isDisabled )
    };
    return ListControlBase;
}(__WEBPACK_IMPORTED_MODULE_0__controlBase__["a" /* ControlBase */]));



/***/ }),

/***/ "./src/app/dynamic-form/form.components/controlBase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlBase = /** @class */ (function () {
    function ControlBase() {
        this.options = [];
        this.maxlength = 1000;
        this.minlength = 0;
        this.formID = 0;
        this.propagateChange = function (_) { };
        this.toched = function (_) { };
    }
    Object.defineProperty(ControlBase.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.propagateChange(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("label"),
        __metadata("design:type", String)
    ], ControlBase.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("fieldName"),
        __metadata("design:type", String)
    ], ControlBase.prototype, "fieldName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("name"),
        __metadata("design:type", String)
    ], ControlBase.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("type"),
        __metadata("design:type", String)
    ], ControlBase.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("placeholder"),
        __metadata("design:type", String)
    ], ControlBase.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("options"),
        __metadata("design:type", Array)
    ], ControlBase.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("parent"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
    ], ControlBase.prototype, "parent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("required"),
        __metadata("design:type", Number)
    ], ControlBase.prototype, "required", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("maxLength"),
        __metadata("design:type", Number)
    ], ControlBase.prototype, "maxlength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("minLength"),
        __metadata("design:type", Number)
    ], ControlBase.prototype, "minlength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("formID"),
        __metadata("design:type", Number)
    ], ControlBase.prototype, "formID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("disabled"),
        __metadata("design:type", Boolean)
    ], ControlBase.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("viewId"),
        __metadata("design:type", String)
    ], ControlBase.prototype, "viewId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("entityName"),
        __metadata("design:type", String)
    ], ControlBase.prototype, "entityName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("entityAttributes"),
        __metadata("design:type", Object)
    ], ControlBase.prototype, "entityAttributes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("value"),
        __metadata("design:type", Object)
    ], ControlBase.prototype, "_value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("field"),
        __metadata("design:type", Object)
    ], ControlBase.prototype, "field", void 0);
    return ControlBase;
}());



/***/ }),

/***/ "./src/app/dynamic-form/form.components/dynamic-dropdownlist/dynamic-dropdownlist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dynamic-form/form.components/dynamic-dropdownlist/dynamic-dropdownlist.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form [formGroup] = \"parent\"> -->\n<mat-form-field \n  *ngIf=\"entityAttributes.formType==2\"\n  class=\"LookupControl dynamic-form-control\"\n  [hideRequiredMarker]=\"'true'\"\n  [floatLabel]=\"'auto'\"\n>\n  <mat-select  [(ngModel)]=\"value\" (change)=\"test()\" required >\n    <mat-option *ngFor=\"let option of options\"  [value]=\"option.key\">\n      {{ option.value }}\n    </mat-option>\n  </mat-select>\n <mat-placeholder><mat-icon>{{ getIcon() }}</mat-icon> {{ label }} </mat-placeholder>\n</mat-form-field>\n<mat-progress-bar \n*ngIf=\"dataLoaded==false && entityAttributes.formType==2\"\nclass=\"example-margin\"\n[color]=\"'accent'\"\n[mode]=\"'indeterminate'\"\nclass=\"customProgress ui-progressbar ui-progressbar-label  mat-input-subscript-wrapper mat-form-field-subscript-wrapper\"\nstyle=\"height: 2px; margin-top: -20px;\"\n>\n</mat-progress-bar>\n\n<mat-form-field *ngIf=\"entityAttributes.formType==1\" class=\"TextBoxControl dynamic-form-control\">            \n  <input matInput \n    class=\"\"    \n    type=\"text\" \n    value=\"{{ value }}\" \n    id=\"{{ name }}\" \n    name=\"{{ name }}\" \n    placeholder=\"{{ label }}\"\n    formField       \n  >\n</mat-form-field>       \n<!-- </form> -->"

/***/ }),

/***/ "./src/app/dynamic-form/form.components/dynamic-dropdownlist/dynamic-dropdownlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicDropdownlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_lookups_service__ = __webpack_require__("./src/app/Services/lookups.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ListControlBase__ = __webpack_require__("./src/app/dynamic-form/form.components/ListControlBase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utilities__ = __webpack_require__("./src/app/common/utilities.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DynamicDropdownlistComponent = /** @class */ (function (_super) {
    __extends(DynamicDropdownlistComponent, _super);
    function DynamicDropdownlistComponent(lookupService) {
        var _this = _super.call(this, lookupService) || this;
        _this.lookupService = lookupService;
        // @Input("label") label:string;
        _this.targetEntity = "";
        return _this;
    }
    DynamicDropdownlistComponent_1 = DynamicDropdownlistComponent;
    DynamicDropdownlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.entityAttributes.formType == 2) {
            var ctrl = this.parent.get(this.fieldName);
            this.targetEntity = ctrl.targetEntity;
            this.lookupService
                .get("?entityName=" +
                ctrl.targetEntity +
                "&language=" +
                this.entityAttributes.language)
                .subscribe(function (response) {
                _this.options = response;
                _this.dataLoaded = true;
                // console.log(this.options);
            });
        }
    };
    DynamicDropdownlistComponent.prototype.writeValue = function (obj) {
        var _this = this;
        if (obj &&
            obj.value &&
            this.options &&
            this.options.filter(function (option) { return option.key === obj.key; }).length > 0) {
            // console.log("obj key " + obj.key);
            // console.log("obj value " + obj.value);
            this.targetEntity = obj.value;
            this._value = obj.key;
            return;
        }
        else if (obj && obj.key && obj.value) {
            this.targetEntity = obj.value;
            this.lookupService
                .get("?entityName=" +
                obj.value +
                "&id=" +
                obj.key +
                "&language=" +
                this.entityAttributes.language)
                .subscribe(function (response) {
                _this.dataLoaded = false;
                //  console.log(response);
                //  console.log(this.options[0]);
                if (_this.options.filter(function (option) { return option.key === obj.key; }).length == 0)
                    _this.options.push(response);
                _this._value = response.key;
                _this.dataLoaded = true;
            });
        }
    };
    DynamicDropdownlistComponent.prototype.getIcon = function () {
        return __WEBPACK_IMPORTED_MODULE_4__common_utilities__["a" /* utilities */].getIcon(this.targetEntity);
    };
    DynamicDropdownlistComponent.prototype.test = function () {
        //let ctrl: AbstractControl = this.parent.get(this.fieldName);
    };
    DynamicDropdownlistComponent = DynamicDropdownlistComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "dynamic-dropdownlist",
            template: __webpack_require__("./src/app/dynamic-form/form.components/dynamic-dropdownlist/dynamic-dropdownlist.component.html"),
            styles: [__webpack_require__("./src/app/dynamic-form/form.components/dynamic-dropdownlist/dynamic-dropdownlist.component.css")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DynamicDropdownlistComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_lookups_service__["a" /* LookupsService */]])
    ], DynamicDropdownlistComponent);
    return DynamicDropdownlistComponent;
    var DynamicDropdownlistComponent_1;
}(__WEBPACK_IMPORTED_MODULE_3__ListControlBase__["a" /* ListControlBase */]));



/***/ }),

/***/ "./src/app/dynamic-form/form.components/dynamic-field/dynamic-field.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dynamic-form/form.components/dynamic-field/dynamic-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col\" *ngIf=\"type!=null\">\n  <form [formGroup]=\"parent\">\n\n    <div [ngSwitch]=\"type.toLowerCase()\">\n      <div *ngSwitchCase=\"TextBoxControl\" class=\"form-group Text\">\n        <mat-form-field class=\"TextBoxControl dynamic-form-control\">\n          <input matInput class=\"\" ngModel type=\"text\" value=\"{{ value }}\" id=\"{{ name }}\" name=\"{{ name }}\" \n            formControlName=\"{{ name }}\" [required]=\"required==1?true:false\" maxlength=\"{{ maxlength }}\" maxlength=\"{{ maxlength }}\">\n            <mat-placeholder><mat-icon>{{ getIcon() }}</mat-icon> {{ placeholder }} </mat-placeholder>\n          </mat-form-field>\n      </div>\n      <div *ngSwitchCase=\"PicklistControl\" class=\"form-group\">\n        <dynamic-optionset [entityAttributes]=\"entityAttributes\" [options]=\"options\" [fieldName]=\"name\" [label]=\"placeholder\" formControlName=\"{{ name }}\"\n          ngModel [value]=\"temp\">\n\n        </dynamic-optionset>\n      </div>\n      <div *ngSwitchCase=\"PicklistStatusControl\" class=\"form-group\">\n        <dynamic-optionset [entityAttributes]=\"entityAttributes\" [fieldName]=\"name\" [label]=\"placeholder\" formControlName=\"{{ name }}\"\n          ngModel [value]=\"temp\">\n\n        </dynamic-optionset>\n      </div>\n      <div *ngSwitchCase=\"LookupControl\" class=\"form-group\">\n        <dynamic-dropdownlist [entityAttributes]=\"entityAttributes\" [fieldName]=\"name\" [label]=\"placeholder\" formControlName=\"{{ name }}\"\n          [parent]=\"parent\"></dynamic-dropdownlist>\n      </div>\n      <div *ngSwitchCase=\"CheckBoxControl\" class=\"form-group\">\n          <mat-form-field>\n        <mat-checkbox class=\"CheckBoxControl dynamic-form-control\" checked='{{ value }}' id=\"{{ name }}\" name=\"{{ name }}\" ngModel\n          formControlName=\"{{ name }}\">\n          {{ placeholder }}\n        </mat-checkbox>\n        </mat-form-field>\n      </div>\n      <div *ngSwitchCase=\"RadioControl\" class=\"form-group\">\n        <mat-checkbox class=\"RadioControl dynamic-form-control\" checked='{{ value }}' id=\"{{ name }}\" name=\"{{ name }}\">\n          {{ placeholder }}\n        </mat-checkbox>\n      </div>\n      <div *ngSwitchCase=\"ButtonControl\" class=\"form-group\">\n        <button class=\"CheckBoxControl dynamic-form-control btn btn-small btn-primary\" type=\"{{ type }}\" id=\"{{ name }}\">\n          {{ label }}\n        </button>\n      </div>\n      <div *ngSwitchCase=\"DateTimeControl\" class=\"form-group\">\n        <mat-form-field class=\"DateTimeControl dynamic-form-control\">\n          <input matInput class=\"\" ngModel type=\"date\" value=\"{{ value }}\" id=\"{{ name }}\" name=\"{{ name }}\" placeholder=\"{{ placeholder }}\"\n            formControlName=\"{{ name }}\" [required]=\"required==1?true:false\">\n        </mat-form-field>\n      </div>\n      <div *ngSwitchCase=\"TextAreaControl\" class=\"form-group\">\n        <mat-form-field class=\"TextAreaControl dynamic-form-control\">\n          <textarea rows=\"4\" cols=\"50\" matInput class=\"\" ngModel id=\"{{ name }}\" name=\"{{ name }}\" placeholder=\"{{ placeholder }}\"\n            formControlName=\"{{ name }}\" [required]=\"required==1?true:false\">\"{{ value }}\"</textarea>\n        </mat-form-field>\n      </div>\n      <div *ngSwitchCase=\"EmailAddressControl\" class=\"form-group\">\n        <mat-form-field class=\"EmailAddressControl dynamic-form-control\">\n          <input matInput class=\"\" ngModel type=\"email\" value=\"{{ value }}\" id=\"{{ name }}\" name=\"{{ name }}\" placeholder=\"{{ placeholder }}\"\n            formControlName=\"{{ name }}\" [required]=\"required==1?true:false\" maxlength=\"{{ maxlength }}\" minlength=\"{{ maxlength }}\">\n        </mat-form-field>\n      </div>\n      <div *ngSwitchCase=\"UrlControl\" class=\"form-group\">\n        <mat-form-field class=\"UrlControl dynamic-form-control\">\n          <input matInput class=\"\" ngModel type=\"url\" value=\"{{ value }}\" id=\"{{ name }}\" name=\"{{ name }}\" placeholder=\"{{ placeholder }}\"\n            formControlName=\"{{ name }}\" [required]=\"required==1?true:false\">\n        </mat-form-field>\n      </div>\n      <div *ngSwitchCase=\"IntegerControl\" class=\"form-group\">\n        <mat-form-field class=\"IntegerControl dynamic-form-control\">\n          <input matInput class=\"\" ngModel type=\"number\" value=\"{{ value }}\" id=\"{{ name }}\" name=\"{{ name }}\" placeholder=\"{{ placeholder }}\"\n            formControlName=\"{{ name }}\" [required]=\"required==1?true:false\" max=\"{{ maxlength }}\" min=\"{{ maxlength }}\">\n        </mat-form-field>\n      </div>\n      <div *ngSwitchCase=\"DecimalControl\" class=\"form-group\">\n        <mat-form-field class=\"DecimalControl dynamic-form-control\">\n          <input matInput class=\"\" ngModel type=\"number\" value=\"{{ value }}\" id=\"{{ name }}\" name=\"{{ name }}\" placeholder=\"{{ placeholder }}\"\n            formControlName=\"{{ name }}\" [required]=\"required==1?true:false\" max=\"{{ maxlength }}\" min=\"{{ maxlength }}\">\n        </mat-form-field>\n      </div>\n      <div *ngSwitchCase=\"MoneyControl\" class=\"form-group\">\n        <mat-form-field class=\"MoneyControl dynamic-form-control\">\n          <input matInput class=\"\" ngModel type=\"number\" value=\"{{ value }}\" id=\"{{ name }}\" name=\"{{ name }}\" placeholder=\"{{ placeholder }}\"\n            formControlName=\"{{ name }}\" [required]=\"required==1?true:false\" max=\"{{ maxlength }}\" min=\"{{ maxlength }}\">\n        </mat-form-field>\n      </div>\n      <div *ngSwitchCase=\"QuickFormCollectionControl\" class=\"form-group\">\n        <span>{{ label }}</span>\n        <dynamic-form [formID]=\"viewId\" [formType]=\"1\" [recordID]=\"1213\"></dynamic-form>\n      </div>\n      <div *ngSwitchCase=\"GridControl\" class=\"form-group\">\n        <sub-grid [gridHeader]=\"label\" [field]=\"field\" [viewId]=\"viewId\" [entityAttributes]=\"entityAttributes\"></sub-grid>\n      </div>\n      <div *ngSwitchCase=\"ActionCardControl\" class=\"form-group\">\n      </div>\n      <div *ngSwitchCase=\"KBViewerControl\" class=\"form-group\">\n      </div>\n      <div *ngSwitchCase=\"NotesControl\" class=\"form-group notes\">\n\n        \n            <mat-tab-group class=\"demo-tab-group\">\n              <mat-tab label=\"Posts\">\n                <div class=\"demo-tab-content\">\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis\n                  vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin\n                  consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n                  orci enim rutrum enim, vel tempor sapien arcu a tellus.\n                </div>\n              </mat-tab>\n              <mat-tab label=\"Activities\">\n                  <div class=\"demo-tab-content\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis\n                    vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin\n                    consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n                    orci enim rutrum enim, vel tempor sapien arcu a tellus.\n                  </div>\n                </mat-tab>\n                <mat-tab label=\"Notes\">\n                    <div class=\"demo-tab-content\">\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis\n                      vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin\n                      consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n                      orci enim rutrum enim, vel tempor sapien arcu a tellus.\n                    </div>\n                  </mat-tab>\n                <mat-tab label=\"Assistant\">\n                    <div class=\"demo-tab-content\">\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis\n                      vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin\n                      consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n                      orci enim rutrum enim, vel tempor sapien arcu a tellus.\n                    </div>\n                  </mat-tab>\n            </mat-tab-group>          \n        \n      </div>\n      <div *ngSwitchCase=\"MapsControl\" class=\"form-group notes\">\n        <p-gmap [style]=\"{'width':'100%','height':'200px'}\"></p-gmap>\n      </div>\n      <div *ngSwitchCase=\"WebResourceHtmlControl\" class=\"form-group notes\">        \n      </div>\n      <div *ngSwitchCase=\"unknown\" class=\"form-group notes\">        \n      </div>\n      <div *ngSwitchDefault class=\"form-group\">\n        <span>{{ label + ' ' + type }}</span>\n      </div>\n    </div>\n\n\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/dynamic-form/form.components/dynamic-field/dynamic-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controlBase__ = __webpack_require__("./src/app/dynamic-form/form.components/controlBase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_utilities__ = __webpack_require__("./src/app/common/utilities.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicFieldComponent = /** @class */ (function (_super) {
    __extends(DynamicFieldComponent, _super);
    //#endregion
    function DynamicFieldComponent() {
        var _this = _super.call(this) || this;
        // options: any;
        _this.temp = 1;
        //#region Constants
        _this.AccessPrivilegeControl = "f93a31b2-99ac-4084-8ec2-d4027c31369a";
        _this.AccessTeamEntityPicker = "3f4e2a56-f102-4b4d-ab9c-f1574ca5bfda";
        _this.ActivitiesContainerControl = "c72511ab-84e5-4fb7-a543-25b4fc01e83e";
        _this.ActivitiesWallControl = "6636847d-b74d-4994-b55a-a6faf97ecea2";
        _this.ArticleContentControl = "f02ef977-2564-4b9a-b2f0-df083d8a019b";
        _this.ButtonControl = "00ad73da-bd4d-49c6-88a8-2f4f4cad4a20";
        _this.CheckBoxControl = "b0c6723a-8503-4fd7-bb28-c8a06ac933c2";
        _this.CompositionLinkControl = "db1284ef-9ffc-4e99-b382-0cc082fe2364";
        _this.ConnectionControl = "3246f906-1f71-45f7-b11f-d7be0f9d04c9";
        _this.ConnectionRoleObjectTypeListControl = "821acf1a-7e46-4a0c-965d-fe14a57d78c7";
        _this.CoverPagePicklistControl = "4168a05c-d857-46af-8457-5bb47eb04ea1";
        _this.DateTimeControl = "5b773807-9fb2-42db-97c3-7a91eff8adff";
        _this.DecimalControl = "c3efe0c3-0ec6-42be-8349-cbd9079dfd8e";
        _this.DurationControl = "aa987274-ce4e-4271-a803-66164311a958";
        _this.DynamicPropertyListControl = "6896f004-b17a-4202-861e-8b7ea2080e0b";
        _this.EmailAddressControl = "ada2203e-b4cd-49be-9ddf-234642b43b52";
        _this.EmailBodyControl = "6f3fb987-393b-4d2d-859f-9d0f0349b6ad";
        _this.ErrorStatusControl = "f4c16eca-ca81-4e39-9448-834b8378721e";
        _this.FloatControl = "0d2c745a-e5a8-4c8f-ba63-c6d3bb604660";
        _this.FrameControl = "fd2a7985-3187-444e-908d-6624b21f69c0";
        _this.GridControl = "e7a81278-8635-4d9e-8d4d-59480b391c5b";
        _this.HiddenInputControl = "5546e6cd-394c-4bee-94a8-4425e17ef6c6";
        _this.IntegerControl = "c6d124ca-7eda-4a60-aea9-7fb8d318b68f";
        _this.KBViewerControl = "a62b6fa9-169e-406c-b1aa-eab828cb6026";
        _this.LabelControl = "5635c4df-1453-413e-b213-e81b65411150";
        _this.LanguagePicker = "671a9387-ca5a-4d1e-8ab7-06e39ddcf6b5";
        _this.LinkControl = "dfdf1cde-837b-4ac9-98cf-ac74361fd89d";
        _this.LookupControl = "270bd3db-d9af-4782-9025-509e298dec0a";
        _this.MailMergeLanguagePicker = "b634828e-c390-444a-afe6-e07315d9d970";
        _this.MapLinkControl = "91dc0675-c8b9-4421-b1e0-261cebf02bac";
        _this.MapsControl = "62b0df79-0464-470f-8af7-4483cfea0c7d";
        _this.MoneyControl = "533b9e00-756b-4312-95a0-dc888637ac78";
        _this.NotesControl = "06375649-c143-495e-a496-c962e5b4488e";
        _this.PartyListControl = "cbfb742c-14e7-4a17-96bb-1a13f7f64aa2";
        _this.PhoneNumberControl = "8c10015a-b339-4982-9474-a95fe05631a5";
        _this.PicklistControl = "3ef39988-22bb-4f0b-bbbe-64b5a3748aee";
        _this.PicklistLookupControl = "2305e33a-bad3-4022-9e15-1856cf218333";
        _this.PicklistStatusControl = "5d68b988-0661-4db2-bc3e-17598ad3be6c";
        _this.ProcessControl = "06e9f7af-1f54-4681-8eec-1e21a1ceb465";
        _this.QuickFormCollectionControl = "5c5600e0-1d6e-4205-a272-be80da87fd42";
        _this.QuickFormControl = "69af7dca-2e3b-4ee7-9201-0da731dd2413";
        _this.RadioControl = "67fac785-cd58-4f9f-abb3-4b7ddc6ed5ed";
        _this.RegardingControl = "f3015350-44a2-4aa0-97b5-00166532b5e9";
        _this.RelatedInformationControl = "163b90a6-eb64-49d2-9df8-3c84a4f0a0f8";
        _this.RelationshipRolePicklist = "5f986642-5961-4d9f-ab5e-643d71e231e9";
        _this.ReportControl = "a28f441b-916c-4865-87fd-0c5d53bd59c9";
        _this.SearchWidget = "e616a57f-20e0-4534-8662-a101b5ddf4e0";
        _this.SocialInsightControl = "86b9e25e-695e-4fef-ac69-f05cfa96739c";
        _this.TextAreaControl = "e0dece4b-6fc8-4a8f-a065-082708572369";
        _this.TextBoxControl = "4273edbd-ac1d-40d3-9fb2-095c621b552d";
        _this.TickerControl = "1e1fc551-f7a8-43af-ac34-a8dc35c7b6d4";
        _this.TimerControl = "9c5ca0a1-ab4d-4781-be7e-8dfbe867b87e";
        _this.TimeZonePicklistControl = "7c624a0b-f59e-493d-9583-638d34759266";
        _this.UrlControl = "71716b6c-711e-476c-8ab8-5d11542bfb47";
        _this.WebResourceHtmlControl = "9fdf5f91-88b1-47f4-ad53-c11efc01a01d";
        _this.WebResourceImageControl = "587cdf98-c1d5-4bde-8473-14a0bc7644a7";
        _this.WebResourceSilverlightControl = "080677db-86ec-4544-ac42-f927e74b491f";
        _this.ActionCardControl = "f9a8a302-114e-466a-b582-6771b2ae0d92";
        _this.unknown = "02d4264b-47e2-4b4c-aa95-f439f3f4d458";
        return _this;
    }
    DynamicFieldComponent.prototype.setMap = function (event) {
        this.map = event.map;
    };
    DynamicFieldComponent.prototype.ngAfterViewInit = function () {
    };
    DynamicFieldComponent.prototype.ngOnInit = function () {
    };
    DynamicFieldComponent.prototype.getIcon = function () {
        return __WEBPACK_IMPORTED_MODULE_2__common_utilities__["a" /* utilities */].getIcon(this.name);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("control"),
        __metadata("design:type", Object)
    ], DynamicFieldComponent.prototype, "control", void 0);
    DynamicFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "dynamic-field",
            template: __webpack_require__("./src/app/dynamic-form/form.components/dynamic-field/dynamic-field.component.html"),
            styles: [__webpack_require__("./src/app/dynamic-form/form.components/dynamic-field/dynamic-field.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicFieldComponent);
    return DynamicFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__controlBase__["a" /* ControlBase */]));



/***/ }),

/***/ "./src/app/dynamic-form/form.components/dynamic-menu/dynamic-menu.component.css":
/***/ (function(module, exports) {

module.exports = ".ui-menuitem\r\n{\r\n    background-color: #007bff,\r\n}\r\n\r\n.ui-accordion-header-text\r\n{\r\n    color: red;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/dynamic-form/form.components/dynamic-menu/dynamic-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<p-menubar [model]=\"items\" [autoDisplay]=\"false\" >    \n    <input type=\"text\" pInputText placeholder=\"Search\">\n    <button mat-raised-button color=\"primary\">Logout</button>\n    \n    \n\n</p-menubar>\n"

/***/ }),

/***/ "./src/app/dynamic-form/form.components/dynamic-menu/dynamic-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicMenuComponent = /** @class */ (function () {
    function DynamicMenuComponent(activeRouter, MyRouter) {
        this.activeRouter = activeRouter;
        this.MyRouter = MyRouter;
    }
    DynamicMenuComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'Contact',
                items: [
                    // {label: 'contact - Information',routerLink:'/form/894cc46a-b0cb-4ab0-8bf6-200544e46a2d',routerLinkActiveOptions:'active',},
                    // {label: 'contact - Contact - Mobile',routerLink:'/form/28b5b9b6-dfa2-45d6-8a81-3f6ba02a098a',routerLinkActiveOptions:'active',},
                    // {label: 'contact - Contact for Interactive experience',routerLink:'/form/cc760212-3eab-4009-b5c3-ea9cf6f3e141',routerLinkActiveOptions:'active',},
                    // {label: 'contact - Contact',routerLink:'/form/1fed44d1-ae68-4a41-bd2b-f13acac4acfa',routerLinkActiveOptions:'active',},
                    { label: 'contact - Information', routerLink: '/form/894cc46a-b0cb-4ab0-8bf6-200544e46a2d', routerLinkActiveOptions: 'active', },
                    { label: 'contact - Contact - Mobile', routerLink: '/form/28b5b9b6-dfa2-45d6-8a81-3f6ba02a098a', routerLinkActiveOptions: 'active', },
                    { label: 'contact - Contact for Interactive experience', routerLink: '/form/cc760212-3eab-4009-b5c3-ea9cf6f3e141', routerLinkActiveOptions: 'active', },
                    { label: 'contact - Contact', routerLink: '/form/1fed44d1-ae68-4a41-bd2b-f13acac4acfa', routerLinkActiveOptions: 'active', },
                ]
            },
            {
                label: 'Case',
                icon: 'fa-edit',
                items: [
                    { label: 'incident - Case for Interactive experience', routerLink: '/form/915f6055-2e07-4276-ae08-2b96c8d02c57', routerLinkActiveOptions: 'active', },
                    { label: 'incident - Case', routerLink: '/form/4a63c8d1-6c1e-48ec-9db4-3e6c7155334c', routerLinkActiveOptions: 'active', },
                    { label: 'incident - Information', routerLink: '/form/f658c846-f74c-459b-b591-b97558958106', routerLinkActiveOptions: 'active', },
                ]
            }
        ];
    };
    DynamicMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'dynamic-menu',
            template: __webpack_require__("./src/app/dynamic-form/form.components/dynamic-menu/dynamic-menu.component.html"),
            styles: [__webpack_require__("./src/app/dynamic-form/form.components/dynamic-menu/dynamic-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]])
    ], DynamicMenuComponent);
    return DynamicMenuComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form/form.components/dynamic-optionset/dynamic-optionset.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.customProgress .ui-progressbar .ui-progressbar-label {\r\n    color: white;\r\n}\r\n\r\n.customProgress .ui-progressbar .ui-progressbar-value {\r\n    background: #e83e8c;\r\n}"

/***/ }),

/***/ "./src/app/dynamic-form/form.components/dynamic-optionset/dynamic-optionset.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"LookupControl dynamic-form-control\">\n  <mat-select placeholder=\"{{ label }}\"  [(ngModel)]=\"value\">\n    <mat-option *ngFor=\"let option of options\" [value]=\"option.key\" >\n      {{ option.value }}\n    </mat-option> \n  </mat-select>\n  <!-- <p-progressBar mode=\"indeterminate\" *ngIf=\"dataLoaded==false\"\n  class=\"customProgress ui-progressbar ui-progressbar-label  mat-input-subscript-wrapper mat-form-field-subscript-wrapper\" [style]=\"{'height': '5px','margin-top':'10px','background':'#e83e8c'}\"></p-progressBar>   -->\n</mat-form-field>\n<mat-progress-bar \n*ngIf=\"dataLoaded==false\"\nclass=\"example-margin\"\n[color]=\"'accent'\"\n[mode]=\"'indeterminate'\"\nclass=\"customProgress ui-progressbar ui-progressbar-label  mat-input-subscript-wrapper mat-form-field-subscript-wrapper\"\nstyle=\"height: 2px; margin-top: -20px;\"\n>\n</mat-progress-bar>\n"

/***/ }),

/***/ "./src/app/dynamic-form/form.components/dynamic-optionset/dynamic-optionset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicOptionsetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_optionsets_service__ = __webpack_require__("./src/app/Services/optionsets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ListControlBase__ = __webpack_require__("./src/app/dynamic-form/form.components/ListControlBase.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicOptionsetComponent = /** @class */ (function (_super) {
    __extends(DynamicOptionsetComponent, _super);
    function DynamicOptionsetComponent(optionsetService) {
        var _this = _super.call(this, optionsetService) || this;
        _this.optionsetService = optionsetService;
        return _this;
    }
    DynamicOptionsetComponent_1 = DynamicOptionsetComponent;
    DynamicOptionsetComponent.prototype.ngOnInit = function () {
        this.dataLoaded = true;
        // if(this.entityAttributes.formType==1)
        // {
        //     this.optionsetService.get(
        //             "?fieldName=" + this.fieldName +
        //             "&entityName=" + this.entityAttributes.entityName + 
        //             "&language=" + this.entityAttributes.language
        //         )
        //         .subscribe(response => {            
        //     this.options=response;
        //     this.dataLoaded=true;
        //   });
        // }
    };
    DynamicOptionsetComponent.prototype.writeValue = function (obj) {
        if (obj != undefined)
            this._value = obj;
    };
    DynamicOptionsetComponent = DynamicOptionsetComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dynamic-optionset',
            template: __webpack_require__("./src/app/dynamic-form/form.components/dynamic-optionset/dynamic-optionset.component.html"),
            styles: [__webpack_require__("./src/app/dynamic-form/form.components/dynamic-optionset/dynamic-optionset.component.css")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DynamicOptionsetComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_optionsets_service__["a" /* OptionsetsService */]])
    ], DynamicOptionsetComponent);
    return DynamicOptionsetComponent;
    var DynamicOptionsetComponent_1;
}(__WEBPACK_IMPORTED_MODULE_3__ListControlBase__["a" /* ListControlBase */]));



/***/ }),

/***/ "./src/app/dynamic-form/form.components/form-column/form-column.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dynamic-form/form.components/form-column/form-column.component.html":
/***/ (function(module, exports) {

module.exports = "<div ng-style=\"{width: width }\" class=\"col\">  \n  \n  <form-section class=\"form-section\"\n    *ngFor=\"let section of sections\"\n    [rows]=\"section?.rows\" \n    [labels]='section?.labels?.label?.description' \n    [parent]=\"parent\"   \n    [showlabel]='section?.showlabel'\n    [ngStyle]=\"{'width': '100px' ,'background-color':'green' }\" \n    [disabled]=\"disabled\"\n    [entityAttributes]=\"entityAttributes\"\n    > \n  </form-section>\n\n    <!-- <span *ngFor=\"let section of sections\" >eeeeeeeeeee</span> -->\n</div>"

/***/ }),

/***/ "./src/app/dynamic-form/form.components/form-column/form-column.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormColumnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormColumnComponent = /** @class */ (function () {
    function FormColumnComponent() {
        this.width = "100px";
    }
    Object.defineProperty(FormColumnComponent.prototype, "customWidth", {
        get: function () {
            return "500px";
            //  return (+this.width.replace("%",""));
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    FormColumnComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("sections"),
        __metadata("design:type", Array)
    ], FormColumnComponent.prototype, "sections", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("parent"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
    ], FormColumnComponent.prototype, "parent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("showlabel"),
        __metadata("design:type", String)
    ], FormColumnComponent.prototype, "showlabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("visible"),
        __metadata("design:type", String)
    ], FormColumnComponent.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("width"),
        __metadata("design:type", String)
    ], FormColumnComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("disabled"),
        __metadata("design:type", Boolean)
    ], FormColumnComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("entityAttributes"),
        __metadata("design:type", Object)
    ], FormColumnComponent.prototype, "entityAttributes", void 0);
    FormColumnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-column',
            template: __webpack_require__("./src/app/dynamic-form/form.components/form-column/form-column.component.html"),
            styles: [__webpack_require__("./src/app/dynamic-form/form.components/form-column/form-column.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormColumnComponent);
    return FormColumnComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form/form.components/form-section/form-section.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dynamic-form/form.components/form-section/form-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <div style=\"display: block;\">\n    <span *ngIf=\"showlabel == true\"  class=\"section-title title\">{{ labels }}</span>    \n  </div>\n\n  <div *ngFor=\"let row of rows\">      \n        <div [ngClass]=\"{'red':true,row:true}\">\n          <!-- <div *ngFor=\"let control of row\" >{{ control.labels.label.description }}</div>             -->\n            <div *ngFor=\"let cell of row\"  [ngStyle]=\"{'width': (100/row.length) + '%' }\">\n\n            \n              <dynamic-field class=\"col form-field\"                    \n                    [label]=\"cell.labels?.label?.description\"                 \n                    [name]= \"cell.control?.datafieldname\"\n                    [type]=\"cell.control?.classid.toLowerCase()\" \n                    [options]=\"cell.control?.options\" \n                    [placeholder]=\"cell.labels?.label?.description\"\n                    [parent]=\"parent\"             \n                    [formID]=\"cell.control?.id\"   \n                    [disabled]=\"disabled\"\n                    [viewId]=\"cell.control?.parameters?.viewId\"\n                    [entityName]=\"cell.control?.parameters?.EntityName\"\n                    [entityAttributes]=\"entityAttributes\"\n                    [field]=\"cell\"\n                > \n                    \n                </dynamic-field>\n            </div>  \n          </div>    \n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/dynamic-form/form.components/form-section/form-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormSectionComponent = /** @class */ (function () {
    function FormSectionComponent() {
    }
    FormSectionComponent.prototype.ngOnInit = function () {
        // console.log(this.parent);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("labels"),
        __metadata("design:type", String)
    ], FormSectionComponent.prototype, "labels", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("rows"),
        __metadata("design:type", Array)
    ], FormSectionComponent.prototype, "rows", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("parent"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
    ], FormSectionComponent.prototype, "parent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("showlabel"),
        __metadata("design:type", Boolean)
    ], FormSectionComponent.prototype, "showlabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("visible"),
        __metadata("design:type", Boolean)
    ], FormSectionComponent.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("disabled"),
        __metadata("design:type", Boolean)
    ], FormSectionComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("entityAttributes"),
        __metadata("design:type", Object)
    ], FormSectionComponent.prototype, "entityAttributes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("field"),
        __metadata("design:type", Object)
    ], FormSectionComponent.prototype, "field", void 0);
    FormSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-section',
            template: __webpack_require__("./src/app/dynamic-form/form.components/form-section/form-section.component.html"),
            styles: [__webpack_require__("./src/app/dynamic-form/form.components/form-section/form-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormSectionComponent);
    return FormSectionComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form/form.components/form-tab/form-tab.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dynamic-form/form.components/form-tab/form-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  \n  <form-column class=\"form-column\"  [ngStyle]=\"{'width': column?.width }\"\n    *ngFor=\"let column of columns\"\n    [parent]=\"parent\"\n    [sections]=\"column?.sections\"\n    [width]=\"column?.width\"\n    [disabled]=\"disabled\"\n    [entityAttributes]=\"entityAttributes\"\n    \n    >\n  </form-column>\n\n  \n</div>"

/***/ }),

/***/ "./src/app/dynamic-form/form.components/form-tab/form-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormTabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormTabComponent = /** @class */ (function () {
    function FormTabComponent() {
    }
    Object.defineProperty(FormTabComponent.prototype, "customWidth", {
        get: function () {
            return ((100 / this.columns.length)).toString() + '%';
            //  return (+this.width.replace("%",""));
        },
        enumerable: true,
        configurable: true
    });
    FormTabComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("labels"),
        __metadata("design:type", String)
    ], FormTabComponent.prototype, "labels", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("id"),
        __metadata("design:type", String)
    ], FormTabComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("name"),
        __metadata("design:type", String)
    ], FormTabComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("showlabel"),
        __metadata("design:type", Boolean)
    ], FormTabComponent.prototype, "showlabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("visible"),
        __metadata("design:type", Boolean)
    ], FormTabComponent.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("columns"),
        __metadata("design:type", Array)
    ], FormTabComponent.prototype, "columns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("parent"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"])
    ], FormTabComponent.prototype, "parent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("disabled"),
        __metadata("design:type", Boolean)
    ], FormTabComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("entityAttributes"),
        __metadata("design:type", Object)
    ], FormTabComponent.prototype, "entityAttributes", void 0);
    FormTabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'form-tab',
            template: __webpack_require__("./src/app/dynamic-form/form.components/form-tab/form-tab.component.html"),
            styles: [__webpack_require__("./src/app/dynamic-form/form.components/form-tab/form-tab.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormTabComponent);
    return FormTabComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form/form.components/sub-grid/sub-grid.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dynamic-form/form.components/sub-grid/sub-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \n<p-dataTable [value]=\"fields\" scrollable=\"true\"\n  scrollHeight=\"200px\" \n  scrollWidth=\"100%\" \n  resizableColumns=\"true\" \n  columnResizeMode=\"expand\" \n  [style]=\"{'margin-top':'30px'}\"\n  sortMode=\"multiple\" \n  [rows]=\"10\" \n  [paginator]=\"true\" \n  [pageLinks]=\"3\"     \n  >\n    <p-header>{{ gridHeader }}</p-header>\n  <p-column *ngFor=\"let field of fields\" field=\"{{ field.name }}\" [style]=\"{'width':field.width + 'px'}\" header=\"{{ field.label }}\"></p-column>  \n</p-dataTable> -->\n<div id=\"main-form\">\n\n  <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\n    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0;width:30px;\"></i>\n    <input #gb type=\"text\" pInputText size=\"10\" placeholder=\"Search\">\n  </div>\n  <p-dataTable #dt [value]=\"data\" [globalFilter]=\"gb\" scrollable=\"true\" scrollHeight=\"300px\" scrollWidth=\"100%\" resizableColumns=\"true\"\n    columnResizeMode=\"expand\" sortMode=\"multiple\" [rows]=\"getRecordsCountPerPage()\" [paginator]=\"true\" [pageLinks]=\"3\" exportFilename=\"{{ gridHeader }}\">\n\n    <p-header>\n      <!-- <b>{{ gridHeader }}</b> -->\n      <div class=\"ui-helper-clearfix\">\n        <b>{{ gridHeader }}</b>\n        <i *ngIf=\"isSimple\" class=\"material-icons\" (click)=\"dt.exportCSV()\" style=\"float:left\">file_download</i>\n      </div>\n    </p-header>\n    <!-- <p-footer>There are {{ data.length }} cars</p-footer> -->\n    <p-column [header]=\"'Open'\" [style]=\"{'width':'30px'}\">\n        <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\n          <!-- <span [style.color]=\"car[col.field]\">{{car[col.field]}}</span> -->\n          hello\n        </ng-template>\n      </p-column>\n      <p-column styleClass=\"col-button\" [style]=\"{'width':'30px'}\">\n          <ng-template pTemplate=\"header\">\n              <button type=\"button\" pButton icon=\"fa-refresh\"></button>\n          </ng-template>\n          <ng-template let-car=\"rowData\" pTemplate=\"body\">\n              <button type=\"button\" pButton (click)=\"selectCar(car)\" icon=\"fa-search\"></button>\n          </ng-template>\n      </p-column>\n      \n    <p-column *ngFor=\"let field of fields\" [field]=\"field.name\" [header]=\"field.label\" [style]=\"{'width':field.width + 'px'}\"></p-column>\n    \n  </p-dataTable>\n\n</div>\n<!-- <p-dataTable [value]=\"cars\" sortMode=\"multiple\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\">\n  <p-header>List of Cars</p-header>\n  <p-footer>There are 10 cars</p-footer>\n  <p-column field=\"vin\" header=\"Vin\"></p-column>\n  <p-column field=\"year\" header=\"Year\"></p-column>\n  <p-column field=\"brand\" header=\"Brand\"></p-column>\n  <p-column field=\"color\" header=\"Color\"></p-column>\n  \n  <ng-template pTemplate=\"paginatorLeft\">\n    <button type=\"button\" pButton icon=\"fa-refresh\"></button>\n</ng-template>\n\n<ng-template pTemplate=\"paginatorRight\">\n    <button type=\"button\" pButton icon=\"fa-cloud-upload\"></button>\n</ng-template>\n\n</p-dataTable> -->"

/***/ }),

/***/ "./src/app/dynamic-form/form.components/sub-grid/sub-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controlBase__ = __webpack_require__("./src/app/dynamic-form/form.components/controlBase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_dyanmic_grid_service__ = __webpack_require__("./src/app/Services/dyanmic-grid.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubGridComponent = /** @class */ (function (_super) {
    __extends(SubGridComponent, _super);
    function SubGridComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.gridHeader = "";
        _this.isSimple = false;
        return _this;
        // console.log(this.gridHeader);
        // console.log(this.label);
    }
    SubGridComponent.prototype.customSort = function (eventArgs) { };
    SubGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.field) {
            this.fields = this.field.control.SubGrid.row.cell;
            this.service.get("?id=" + this.viewId).subscribe(function (data) {
                if (data)
                    _this.data = JSON.parse(data);
            });
        }
        else {
            this.isSimple = true;
            this.service
                .get("?id=" + this.viewId + "&language=1033")
                .subscribe(function (headers) {
                // this.fields = response;
                if (headers) {
                    var obj = JSON.parse(headers);
                    if (_this.gridHeader == "") {
                        _this.gridHeader = obj.name;
                    }
                    _this.fields = obj.row.cell;
                    _this.service.get("?id=" + _this.viewId).subscribe(function (data) {
                        _this.data = JSON.parse(data);
                    });
                }
            });
        }
    };
    SubGridComponent.prototype.getRecordsCountPerPage = function () {
        return this.isSimple ? 10 : 5;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("gridHeader"),
        __metadata("design:type", String)
    ], SubGridComponent.prototype, "gridHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("viewId"),
        __metadata("design:type", String)
    ], SubGridComponent.prototype, "viewId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("isSimple"),
        __metadata("design:type", Boolean)
    ], SubGridComponent.prototype, "isSimple", void 0);
    SubGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "sub-grid",
            template: __webpack_require__("./src/app/dynamic-form/form.components/sub-grid/sub-grid.component.html"),
            styles: [__webpack_require__("./src/app/dynamic-form/form.components/sub-grid/sub-grid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_dyanmic_grid_service__["a" /* DyanmicGridService */]])
    ], SubGridComponent);
    return SubGridComponent;
}(__WEBPACK_IMPORTED_MODULE_0__controlBase__["a" /* ControlBase */]));



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\n\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fafafa;\r\n}\r\n\r\n\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\r\n\r\n\r\na, a:hover, a:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n}\r\n\r\n\r\n#sidebar {\r\n    /* don't forget to add all the previously mentioned styles here too */\r\n    background: white;\r\n    color: #fff;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n}\r\n\r\n\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n    background: white;\r\n}\r\n\r\n\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\r\n\r\n\r\n#sidebar ul p {\r\n    color: #fff;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\r\n\r\n\r\n#sidebar ul li a:hover {\r\n    color: white;\r\n    background: #fff;\r\n}\r\n\r\n\r\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\r\n    color: #fff;\r\n    background: white;\r\n}\r\n\r\n\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #6d7fcc;\r\n}\r\n\r\n\r\n.wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: stretch;\r\n        -ms-flex-align: stretch;\r\n            align-items: stretch;\r\n}\r\n\r\n\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n}\r\n\r\n\r\n#sidebar.active {\r\n    margin-left: -250px;\r\n}\r\n\r\n\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    min-height: 100vh;\r\n}\r\n\r\n\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n\r\n\r\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\r\n    content: '\\e259';\r\n    display: block;\r\n    position: absolute;\r\n    right: 20px;\r\n    font-family: 'Glyphicons Halflings';\r\n    font-size: 0.6em;\r\n}\r\n\r\n\r\na[aria-expanded=\"true\"]::before {\r\n    content: '\\e260';\r\n}\r\n\r\n\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        margin-left: -250px;\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"loader\" style=\"opacity: 0; display: none;\">\n    <div class=\"spinner\">\n    <div class=\"double-bounce1\"></div>\n    <div class=\"double-bounce2\"></div>\n  </div>\n  </div> -->\n<page-header></page-header>\n<!-- <page-header-simple></page-header-simple> -->\n<div class=\"main-container\">\n\n  <photo-header  [headerType]='1'></photo-header>\n  <div class=\"wrapper\">\n\n    <!-- Sidebar -->\n    <!-- <nav id=\"sidebar\" class=\"column col-xs-3\">\n        ...\n    </nav> -->\n\n    <!-- Page Content -->\n    <div id=\"content\" style=\"width: 100%\">\n      <router-outlet></router-outlet>\n    </div>\n    <!-- <nav id=\"sidebar\" class=\"column col-xs-3\">\n      ...\n  </nav> -->\n</div>       \n  \n  \n  <!-- <profile></profile> -->\n\n</div>\n<page-footer></page-footer>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/left-side/left-side.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/left-side/left-side.component.html":
/***/ (function(module, exports) {

module.exports = "<div></div>"

/***/ }),

/***/ "./src/app/left-side/left-side.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftSideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftSideComponent = /** @class */ (function () {
    function LeftSideComponent() {
    }
    LeftSideComponent.prototype.ngOnInit = function () {
    };
    LeftSideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-left-side',
            template: __webpack_require__("./src/app/left-side/left-side.component.html"),
            styles: [__webpack_require__("./src/app/left-side/left-side.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftSideComponent);
    return LeftSideComponent;
}());



/***/ }),

/***/ "./src/app/listview/listview.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n    height: 460px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/listview/listview.component.html":
/***/ (function(module, exports) {

module.exports = "<sub-grid  [viewId]=\"'0d5d377b-5e7c-47b5-bab1-a5cb8b4ac105'\" [entityAttributes]=\"\"></sub-grid>"

/***/ }),

/***/ "./src/app/listview/listview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListviewComponent; });
/* unused harmony export TableComponent */
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_dyanmic_grid_service__ = __webpack_require__("./src/app/Services/dyanmic-grid.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListviewComponent = /** @class */ (function () {
    function ListviewComponent(GridService) {
        // GridService.getAll().subscribe(response=>{
        //   console.log(response);      
        //   this.dataSource = new MatTableDataSource(response);
        // });
        this.GridService = GridService;
        this.displayedColumns = ['position', 'name', 'weight'];
        this.dataSource = new ExampleDataSource();
        this.isExpansionDetailRow = function (i, row) { return row.hasOwnProperty('detailRow'); };
    }
    ListviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'list-view',
            styles: [__webpack_require__("./src/app/listview/listview.component.css")],
            template: __webpack_require__("./src/app/listview/listview.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["trigger"])('detailExpand', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["state"])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["style"])({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["state"])('expanded', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["style"])({ height: '*', visibility: 'visible' })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["transition"])('expanded <=> collapsed', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__Services_dyanmic_grid_service__["a" /* DyanmicGridService */]])
    ], ListviewComponent);
    return ListviewComponent;
}());

var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    return TableComponent;
}());

var data = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
var ExampleDataSource = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var rows = [];
        data.forEach(function (element) { return rows.push(element, { detailRow: true, element: element }); });
        // console.log(rows);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(rows);
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));

/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/notifications/notifications.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card\">\n          <div class=\"card-header card-header-danger\">\n              <h3 class=\"card-title\">Notifications</h3>\n              <p class=\"card-category\">Handcrafted by our friend\n                  <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\n                  <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a>\n              </p>\n          </div>\n          <div class=\"card-body\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Notifications Style</h4>\n                      <div class=\"alert alert-info\">\n                          <span>This is a plain notification</span>\n                      </div>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>This is a notification with close button.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                      </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Notification states</h4>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                      </div>\n                      <div class=\"alert alert-success\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                      </div>\n                      <div class=\"alert alert-warning\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                      </div>\n                      <div class=\"alert alert-danger\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                      </div>\n                      <div class=\"alert alert-primary\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-12\">\n              <div class=\"places-buttons\">\n                  <div class=\"row\">\n                      <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                          <h4 class=\"card-title\">\n                              Notifications Places\n                              <p class=\"category\">Click to view notifications</p>\n                          </h4>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__("./src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__("./src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/page/page-footer/page-footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/page-footer/page-footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"footer-container\">\n    <footer class=\"social bg-secondary-1\">\n  \n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 text-center\">\n            <h1 class=\"text-white\">Get In Touch</h1>\n            <a href=\"tel:+966541373841\" class=\"text-white\" target=\"default\">\n              <strong>bslsmm@gmail.com\n                <br>\n              </strong>\n              <strong>+966 541 3738 41\n                <br>\n              </strong>\n              <strong>+201 200 663 700</strong>\n              <strong>\n                <br>\n              </strong>\n            </a>\n            <br>\n            <ul class=\"social-icons\">\n  \n  \n              <li>\n                <a href=\"https://www.facebook.com/mmGhoname\" target=\"_blank\">\n                  <i class=\"icon social_facebook\"></i>\n                </a>\n              </li>\n  \n  \n  \n              <li>\n                <a href=\"http://MMSaleh.com\" target=\"_blank\">\n                  <i class=\"icon social_dribbble\"></i>\n                </a>\n              </li>\n  \n  \n  \n              <li>\n                <a href=\"https://www.linkedin.com/in/mohamed-saleh-62163688/\" target=\"default\">\n                  <i class=\"icon social_linkedin\"></i>\n                </a>\n              </li>\n            </ul>\n            <br>\n            <span class=\"sub\">© Copright 2018\n              <a href=\"#\">M</a>ohamed Saleh Ghoname - All Rights Reserved</span>\n          </div>\n        </div>\n      </div>\n  \n    </footer>\n  </div>"

/***/ }),

/***/ "./src/app/page/page-footer/page-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageFooterComponent = /** @class */ (function () {
    function PageFooterComponent() {
    }
    PageFooterComponent.prototype.ngOnInit = function () {
    };
    PageFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-footer',
            template: __webpack_require__("./src/app/page/page-footer/page-footer.component.html"),
            styles: [__webpack_require__("./src/app/page/page-footer/page-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageFooterComponent);
    return PageFooterComponent;
}());



/***/ }),

/***/ "./src/app/page/page-header-simple/page-header-simple.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/page-header-simple/page-header-simple.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-container\">\n  <nav class=\"simple-bar top-bar\">\n    <div class=\"container\">\n      <div class=\"row nav-menu\">\n        <div class=\"col-md-3 col-sm-3 columns\">\n          <img class=\"logo logo-light\" style=\"display: none;\" alt=\"Logo\" src=\"../../assets/img/EmptyIcon.png\">\n          <img class=\"logo logo-dark\" style=\"display: none;\" alt=\"Logo\" src=\"../../assets/img/EmptyIcon.png\">\n        </div>\n        <div class=\"col-md-9 col-sm-9 columns text-right\">\n          <ul class=\"menu\">\n            <li class=\"has-dropdown\">\n              <a routerLink=\"/form/4a63c8d1-6c1e-48ec-9db4-3e6c7155334c\">Dynamic Portal</a>\n              <ul class=\"subnav\">\n                <li>\n                  <a routerLink=\"/form/4a63c8d1-6c1e-48ec-9db4-3e6c7155334c\">Case</a>\n                </li>\n                <li>\n                  <a routerLink=\"/form/1fed44d1-ae68-4a41-bd2b-f13acac4acfa\">Contact</a>\n                </li>\n                <li>\n                  <a routerLink=\"/form/894cc46a-b0cb-4ab0-8bf6-200544e46a2d\">Contact</a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"has-dropdown\">\n              <a routerLink=\"/aboutme\">about me</a>\n              <ul class=\"subnav\">\n                <li>\n                  <a href=\"#professional-career\" class=\"inner-link\" target=\"_self\">Professional Career</a>\n                </li>\n                <li>\n                  <a href=\"#careertimeline\" class=\"inner-link\" target=\"_self\">Career Timeline</a>\n                </li>\n                <li>\n                  <a href=\"#skillbars\" class=\"inner-link\" target=\"_self\">Skills &amp; Expertise</a>\n                </li>\n                <li>\n                  <a href=\"#statcounters\" class=\"inner-link\" target=\"default\">More About Me</a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"has-dropdown\">\n              <a href=\"#\">BLOG&nbsp;</a>\n              <ul class=\"subnav\">\n                <li>\n                  <a href=\"blogrecent.html\" target=\"_self\"> Hot topics </a>\n                </li>\n                <li>\n                  <a href=\"blogrecent.html\" target=\"_self\">Recent topics</a>\n                </li>\n                <li>\n                  <a href=\"blogalltopics.html\" target=\"_self\">All Topics</a>\n                </li>\n                <li>\n                  <a href=\"blogalltopics.html\" target=\"_self\">Events</a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"has-dropdown\">\n              <a href=\"#\">Courses&nbsp;</a>\n              <ul class=\"subnav\">\n                <li>\n                  <a href=\"#professional-career\" class=\"inner-link\" target=\"default\">C# Beginners </a>\n                </li>\n                <li>\n                  <a href=\"#careertimeline\" class=\"inner-link\" target=\"default\">C# Intermediate&nbsp;</a>\n                </li>\n                <li>\n                  <a href=\"#skillbars\" class=\"inner-link\" target=\"default\">C# Advanced&nbsp;</a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n          <ul class=\"social-icons text-right\">\n            <li>\n              <a href=\"https://www.linkedin.com/in/mohamed-saleh-62163688/\" target=\"_blank\">\n                <i class=\"icon social_linkedin\"></i>\n              </a>\n            </li>\n            <li>\n              <a href=\"https://www.facebook.com/mmGhoname\" target=\"_blank\">\n                <i class=\"icon social_facebook\"></i>\n              </a>\n            </li>\n            <li>\n              <a href=\"http://www.MMSaleh.com\" target=\"_blank\">\n                <i class=\"icon icon-dribbble\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"mobile-toggle\">\n        <i class=\"icon icon_menu\"></i>\n      </div>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/page/page-header-simple/page-header-simple.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderSimpleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderSimpleComponent = /** @class */ (function () {
    function PageHeaderSimpleComponent() {
    }
    PageHeaderSimpleComponent.prototype.ngOnInit = function () {
    };
    PageHeaderSimpleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-header-simple',
            template: __webpack_require__("./src/app/page/page-header-simple/page-header-simple.component.html"),
            styles: [__webpack_require__("./src/app/page/page-header-simple/page-header-simple.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageHeaderSimpleComponent);
    return PageHeaderSimpleComponent;
}());



/***/ }),

/***/ "./src/app/page/page-header/page-header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/page-header/page-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-container\">\n\t<nav class=\"simple-bar top-bar\">\n\t\t<div class=\"container\">\n\n\n\t\t\t<div class=\"row nav-menu\">\n\t\t\t\t<div class=\"col-md-3 col-sm-3 columns\">\n\t\t\t\t\t<img class=\"logo logo-light\" style=\"display: none;\" alt=\"Logo\" src=\"../../assets/img/EmptyIcon.png\">\n\t\t\t\t\t<img class=\"logo logo-dark\" style=\"display: none;\" alt=\"Logo\" src=\"../../assets/img/EmptyIcon.png\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-9 col-sm-9 columns text-right\">\n\t\t\t\t\t<ul class=\"menu\">\n\t\t\t\t\t\t<li class=\"has-dropdown\">\n\t\t\t\t\t\t\t<a href=\"#main-form\" class=\"inner-link\" target=\"_self\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/form/4a63c8d1-6c1e-48ec-9db4-3e6c7155334c\">Dynamic Portal</a>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul class=\"subnav\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#main-form\" class=\"inner-link\" target=\"_self\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/form/4a63c8d1-6c1e-48ec-9db4-3e6c7155334c\">Case</a>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#main-form\" class=\"inner-link\" target=\"_self\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/form/1fed44d1-ae68-4a41-bd2b-f13acac4acfa\">Contact</a>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#main-form\" class=\"inner-link\" target=\"_self\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/form/894cc46a-b0cb-4ab0-8bf6-200544e46a2d\">Contact - information</a>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#main-form\" class=\"inner-link\" target=\"_self\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/test2\">Contacts list</a>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"has-dropdown\">\n\t\t\t\t\t\t\t<a routerLink=\"/aboutme\">about me</a>\n\t\t\t\t\t\t\t<ul class=\"subnav\">\n\t\t\t\t\t\t\t\t<li>\n\n\t\t\t\t\t\t\t\t\t<a href=\"#professional-career\" class=\"inner-link\" target=\"_self\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/aboutme\">Professional Career</a>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#careertimeline\" class=\"inner-link\" target=\"_self\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/aboutme\">Career Timeline</a>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#skillbars\" class=\"inner-link\" target=\"_self\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/aboutme\"> Skills &amp; Expertise</a>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#statcounters\" class=\"inner-link\" target=\"default\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/aboutme\"> More About Me</a>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"has-dropdown\">\n\t\t\t\t\t\t\t<a href=\"#\">BLOG&nbsp;</a>\n\t\t\t\t\t\t\t<ul class=\"subnav\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"blogrecent.html\" target=\"_self\"> Hot topics </a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"blogrecent.html\" target=\"_self\">Recent topics</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"blogalltopics.html\" target=\"_self\">All Topics</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"blogalltopics.html\" target=\"_self\">Events</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"has-dropdown\">\n\t\t\t\t\t\t\t<a href=\"#\">Courses&nbsp;</a>\n\t\t\t\t\t\t\t<ul class=\"subnav\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#professional-career\" class=\"inner-link\" target=\"default\">C# Beginners </a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#careertimeline\" class=\"inner-link\" target=\"default\">C# Intermediate&nbsp;</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#skillbars\" class=\"inner-link\" target=\"default\">C# Advanced&nbsp;</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<ul class=\"social-icons text-right\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#icons4\">\n\t\t\t\t\t\t\t\t<i class=\"icon social_twitter text-twitter\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#icons4\">\n\t\t\t\t\t\t\t\t<i class=\"icon social_facebook text-facebook\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#icons4\">\n\t\t\t\t\t\t\t\t<i class=\"icon social_dribbble text-dribbble\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"mobile-toggle\">\n\t\t\t\t<i class=\"icon icon_menu\"></i>\n\t\t\t</div>\n\n\t\t</div>\n\t</nav>\n</div>"

/***/ }),

/***/ "./src/app/page/page-header/page-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    PageHeaderComponent.prototype.ngOnInit = function () {
    };
    PageHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-header',
            template: __webpack_require__("./src/app/page/page-header/page-header.component.html"),
            styles: [__webpack_require__("./src/app/page/page-header/page-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/page/photo-header/photo-header.component.css":
/***/ (function(module, exports) {

module.exports = ".page-header\r\n{\r\n    /* max-height: 40px; */\r\n}\r\n.background-image-holder\r\n{\r\n    /* height: 350px; */\r\n}\r\n.name-title\r\n{\r\n    /* height: 200px; */\r\n}"

/***/ }),

/***/ "./src/app/page/photo-header/photo-header.component.html":
/***/ (function(module, exports) {

module.exports = "\n  \n    <div class=\"simple-bar top-bar\" *ngIf=\"headerType==0\">\n    \n    </div>\n  \n  \n  \n  \n  <header *ngIf=\"headerType==1\" class=\"page-header resume-header\">\n      <div class=\"background-image-holder parallax-background\">\n        <img class=\"background-image\" alt=\"Team is power\" src=\"../../assets/img/TeamIsPower.jpg\">\n      </div>\n  \n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 name-title\">\n            <h1 class=\"text-white space-bottom-medium\">Mohamed Saleh - Ghoname</h1>\n            <span>Expert technology developer</span>\n            <ul class=\"social-icons\">\n              <li>\n                <a href=\"https://www.linkedin.com/in/mohamed-saleh-62163688/\" target=\"_blank\">\n                  <i class=\"icon social_linkedin\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"https://www.facebook.com/mmGhoname\" target=\"_blank\">\n                  <i class=\"icon social_facebook\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"MMSaleh\" target=\"_blank\">\n                  <i class=\"icon social_dribbble\"></i>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </header>\n\n\n\n    <header class=\"hero-slider\" *ngIf=\"headerType==2\" >\n      <ul class=\"slides\">\n        <li class=\"overlay hover-background\">\n          <div class=\"background-image-holder\">\n            <img class=\"background-image\" alt=\"Background Image\" src=\"../../../assets/img/layer1.jpg\">\n          </div>\n          \n          <div class=\"foreground-image-holder layer-1\">\n            <img class=\"background-image\" alt=\"Background Image\" src=\"../../../assets/img/layer2.png\">\n          </div>\n          \n          <div class=\"foreground-image-holder layer-2\">\n            <img class=\"background-image\" alt=\"Background Image\" src=\"../../../assets/img/layer3.png\">\n          </div>\n          \n          <div class=\"container align-vertical\">\n            <div class=\"row\">\n              <div class=\"col-md-6 col-sm-9\">\n                <h1 class=\"text-white\">It's all about <b>Creative ideas</b>.</h1>\n                <!-- <a target=\"_blank\" href=\"http://www.mediumra.re/pivot/variant/builder.html\" class=\"btn btn-primary btn-white\">Customize Pivot</a>\n                <a href=\"#\" class=\"btn btn-primary btn-filled\">Purchase Pivot</a> -->\n              </div>\n            </div>\n          </div>\n        </li>\n        \n        <li class=\"overlay\">\n          <div class=\"background-image-holder parallax-background\">\n            <img class=\"background-image\" alt=\"Background Image\" src=\"../../../assets/img/business-charts-commerce-265087.jpg\">\n          </div>\n          \n          <div class=\"container align-vertical\">\n            <div class=\"row\">\n              <div class=\"col-md-6 col-sm-9\">\n                <h1 class=\"text-white\">It's all about <b>Creative ideas</b>.</h1>\n                <!-- <a target=\"_blank\" href=\"http://www.mediumra.re/pivot/variant/builder.html\" class=\"btn btn-primary btn-white\">Customize Pivot</a>\n                <a href=\"#\" class=\"btn btn-primary btn-filled\">Purchase Pivot</a> -->\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n\n    </header>"

/***/ }),

/***/ "./src/app/page/photo-header/photo-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoHeaderComponent = /** @class */ (function () {
    function PhotoHeaderComponent() {
    }
    PhotoHeaderComponent.prototype.ngOnInit = function () {
        // setTimeout(() => {
        //   this.headerType=0
        // }, 3000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("headerType"),
        __metadata("design:type", Number)
    ], PhotoHeaderComponent.prototype, "headerType", void 0);
    PhotoHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'photo-header',
            template: __webpack_require__("./src/app/page/photo-header/photo-header.component.html"),
            styles: [__webpack_require__("./src/app/page/photo-header/photo-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoHeaderComponent);
    return PhotoHeaderComponent;
}());



/***/ }),

/***/ "./src/app/profile/professional-career/professional-career.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/professional-career/professional-career.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"duplicatable-content milestones\">\n    <a id=\"professional-career\" class=\"in-page-link\"></a>\n    <div class=\"container\">\n      \n      <div class=\"row\">\n        <div class=\"col-md-offset-2 col-sm-10 col-sm-offset-1 text-center col-md-9\">\n          <h1>My Professional Career</h1>\n          <p class=\"lead\">I am a professional Software engineer in MBS field with a professional years of experience. I developed and managed\n            both large and governmental solutions in UAE, Saudi Arabia and Egypt. I handled many roles across my career -\n            Development Manager, Team leader, Software architect, Senior solution developer and Solution developer.&nbsp;\n            <br>Professional experience in:\n            <br>- Microsoft technology (MS Dynamics CRM, ASP.net, C#, SQL server, SSRS, SSIS)\n            <br>- Frontend development using JavaScript frameworks (Angular, VUE, JQuery)\n            <br>- Applying testing activities using MSTest framework, NUnit.\n            <br>- Other technologies (Android, Java, Arduino, Basic4Android)&nbsp;\n            <br>\n          </p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-6 text-center col-md-2\">\n          <div class=\"feature feature-icon-large\">\n            <i class=\"icon icon-briefcase\"></i>\n            <div class=\"pin-body\"></div>\n            <div class=\"pin-head\"></div>\n            <h5>2006 - 2009</h5>\n            <span>DPME</span>\n            <span class=\"sub\">Application Developer</span>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6 text-center col-md-2\">\n          <div class=\"feature feature-icon-large\">\n            <i class=\"icon icon-briefcase\"></i>\n            <div class=\"pin-body\"></div>\n            <div class=\"pin-head\"></div>\n            <h5>2011 - 2014</h5>\n            <span>Xceed</span>\n            <span class=\"sub\">Software Developer</span>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6 text-center col-md-2\">\n          <div class=\"feature feature-icon-large\">\n            <i class=\"icon icon-briefcase\"></i>\n            <div class=\"pin-body\"></div>\n            <div class=\"pin-head\"></div>\n            <h5>2015 - 2016</h5>\n            <span>Link Development</span>\n            <span class=\"sub\">Senior Software developer</span>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6 text-center col-md-3\">\n          <div class=\"feature feature-icon-large\">\n            <i class=\"icon icon-briefcase\"></i>\n            <div class=\"pin-body\"></div>\n            <div class=\"pin-head\"></div>\n            <h5>2017 - 2018</h5>\n            <span>Link Development</span>\n            <span class=\"sub\">Technical leader</span>\n          </div>\n        </div>\n\n\n        <div class=\"col-sm-6 text-center col-md-3\">\n          <div class=\"feature feature-icon-large\">\n            <i class=\"icon icon-briefcase\"></i>\n            <div class=\"pin-body\"></div>\n            <div class=\"pin-head\"></div>\n            <h5>2018</h5>\n            <span>Link Development</span>\n            <span class=\"sub\">Development Manager</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/profile/professional-career/professional-career.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionalCareerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfessionalCareerComponent = /** @class */ (function () {
    function ProfessionalCareerComponent() {
    }
    ProfessionalCareerComponent.prototype.ngOnInit = function () {
    };
    ProfessionalCareerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'professional-career',
            template: __webpack_require__("./src/app/profile/professional-career/professional-career.component.html"),
            styles: [__webpack_require__("./src/app/profile/professional-career/professional-career.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfessionalCareerComponent);
    return ProfessionalCareerComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile-timeline/profile-timeline.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile-timeline/profile-timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<a id=\"careertimeline\" class=\"in-page-link\"></a>\n\n<div class=\"timeline-1\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center\">\n        <h1>Career Timeline</h1>\n        <p class=\"lead\">\n          I spent whole of my life in development career to build a very strong technical character with a great reputation and awesome\n          social community support</p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"timeline-event\">\n          <div class=\"col-sm-6 col-md-push-6\">\n            <h2>2004 - 2005</h2>\n            <h5>The story started by learning development&nbsp;\n              \n            </h5>\n          </div>\n\n          <div class=\"middle\">\n            <i class=\"icon icon-telescope\"></i>\n            <div class=\"vertical-line\"></div>\n          </div>\n\n          <div class=\"col-sm-6 col-md-pull-6\">\n            <p>Since I was very young I knew that development is my life and I had to start my career with a very well study\n              and practicing, so I started my courses in 2004 to learn many topics beside my university study. I learnt\n              Visual basic, Visual basic.net, C#, SQL Server, Office, windows mobile development, Crystal reports&nbsp;</p>\n          </div>\n\n\n        </div>\n\n        <div class=\"timeline-event\">\n          <div class=\"col-sm-6\">\n            <h2>2006 - 2009</h2>\n            <h5>DPME - Solution developer&nbsp;\n              \n            </h5>\n          </div>\n\n          <div class=\"middle\">\n            <i class=\"icon icon-briefcase\"></i>\n            <div class=\"vertical-line\"></div>\n          </div>\n\n          <div class=\"col-sm-6\">\n            <p>in 2006 I started my career as .net developer using c# and Asp.net and SQL server to deliver in-house solutions\n              that meet company needs and satisfy the end customer needs\n              \n            </p>\n\n          </div>\n        </div>\n\n        <div class=\"timeline-event\">\n          <div class=\"col-sm-6 col-md-push-6\">\n            <h2>2007 - 2009</h2>\n            <h5>Agency Of The Year</h5>\n          </div>\n\n          <div class=\"middle\">\n            <i class=\"icon icon-heart\"></i>\n            <div class=\"vertical-line\"></div>\n          </div>\n\n          <div class=\"col-sm-6 col-md-pull-6\">\n            <p>I joined Al Esma charity to provide social support (financial, food, clothes)\n              At this time I know that the success is not only hard working but it's matter of helping people to feel well,\n              eat well. Live well. such activity built me a very supportive attitude and social character.\n              \n            </p>\n          </div>\n\n\n        </div>\n\n        <div class=\"timeline-event\">\n          <div class=\"col-sm-6\">\n            <h2>2011- 2014&nbsp;\n              \n            </h2>\n            <h5>Xceed - Application developer&nbsp;\n              \n            </h5>\n          </div>\n\n          <div class=\"middle\">\n            <i class=\"icon icon-briefcase\"></i>\n            <div class=\"vertical-line\"></div>\n          </div>\n\n          <div class=\"col-sm-6\">\n            <p>in 2011 I start my professional career using .net technologies C#, Asp.net, SQL Server and JavaScript to handle\n              medium and large scale projects serving local and international entities for example du mobile network in Dubai,\n              American university in cairo, Ghabour Automotive.\n              \n            </p>\n          </div>\n        </div>\n\n      </div>\n \n      <div class=\"col-sm-12\">\n        <div class=\"timeline-event\">\n          <div class=\"col-sm-6 col-md-push-6\">\n            <h2>2012 - 2013</h2>\n            <h5>Social development activity&nbsp;\n              \n            </h5>\n          </div>\n\n          <div class=\"middle\">\n            <i class=\"icon icon-puzzle\"></i>\n            <div class=\"vertical-line\"></div>\n          </div>\n\n          <div class=\"col-sm-6 col-md-pull-6\">\n            <p>Starting from being a part of the community, I started giving free programming courses for computer science students\n              in order to develop my community and help others to get more practical experience using .net technology and\n              Javascript framework\n              \n            </p>\n          </div>\n\n\n        </div>\n\n        <div class=\"timeline-event\">\n          <div class=\"col-sm-6\">\n            <h2>2014 - 2015</h2>\n            <h5>Link Development - MS CRM Senior Solution Developer&nbsp;\n              \n            </h5>\n          </div>\n\n          <div class=\"middle\">\n            <i class=\"icon icon-briefcase\"></i>\n            <div class=\"vertical-line\"></div>\n          </div>\n\n          <div class=\"col-sm-6\">\n            <p>Starting from being Link Development is one of the largest entities in software industry in Egypt, It was the\n              time to join success team to achieve more success on regional level using Microsoft Dynamics CRM, C#, SQL Server\n              and reporting service\n              \n            </p>\n\n          </div>\n        </div>\n\n        <div class=\"timeline-event\">\n          <div class=\"col-sm-6 col-md-push-6\">\n            <h2>2016 - 2018</h2>\n            <h5>Link development - Technical lead</h5>\n          </div>\n\n          <div class=\"middle\">\n            <i class=\"icon icon-ribbon\"></i>\n            <div class=\"vertical-line\"></div>\n          </div>\n\n          <div class=\"col-sm-6 col-md-pull-6\">\n            <p>In 2016 I promoted to technical leader and start pushing my technical team build their own technical characters\n              based on improving their technical skills and empower them to act as higher level and monitor their performance\n              to keep it always up by providing technical sessions mixed with a lot of fun.\n              \n              I managed very large projects and governmental projects that target Millions of users with the best performance\n              ever that cover a lot of integrations with third parties to be the most success projects in the region.\n              \n              \n            </p>\n          </div>\n\n\n        </div>\n\n        <div class=\"timeline-event\">\n          <div class=\"col-sm-6\">\n            <h2>2016</h2>\n            <h5>The project that I led awarded&nbsp;\n              \n            </h5>\n          </div>\n\n          <div class=\"middle\">\n            <i class=\"icon icon-trophy\"></i>\n            <div class=\"vertical-line\"></div>\n          </div>\n\n          <div class=\"col-sm-6\">\n            <p>By the end of 2016 and after 1 year of very hard work, TRA project that I led got awarded by Shaikh Salem El\n              Sabah as best Software solution in UAE for year 2016.\n              \n            </p>\n\n          </div>\n        </div>\n\n      </div>\n  \n      <div class=\"col-sm-12\">\n        <div class=\"timeline-event\">\n          <div class=\"col-sm-6 col-md-push-6\">\n            <h2>2018</h2>\n            <h5>Link development - Development Manager&nbsp;\n              \n            </h5>\n          </div>\n\n          <div class=\"middle\">\n            <i class=\"icon icon-ribbon\"></i>\n            <div class=\"vertical-line\"></div>\n          </div>\n\n          <div class=\"col-sm-6 col-md-pull-6\">\n            <p>In 2018 I promoted to Development manager to be responsible of development plan and technical strategies in the\n              projects that I manage across different regions.\n              \n              \n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile-timeline/profile-timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileTimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileTimelineComponent = /** @class */ (function () {
    function ProfileTimelineComponent() {
    }
    ProfileTimelineComponent.prototype.ngOnInit = function () {
    };
    ProfileTimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile-timeline',
            template: __webpack_require__("./src/app/profile/profile-timeline/profile-timeline.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile-timeline/profile-timeline.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileTimelineComponent);
    return ProfileTimelineComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <link href=\"../../assets/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" /> -->\n<div id=\"profile\">\n    <section>\n      <professional-career></professional-career>\n    </section>\n\n    <section>\n      <profile-timeline></profile-timeline>\n    </section>\n\n    <a id=\"skillbars\" class=\"in-page-link\"></a>\n    <section>\n      <skills></skills>\n    </section>\n\n    <a id=\"statcounters\" class=\"in-page-link\"></a>\n    <section class=\"stat-counters duplicatable-content\">\n\n      <div class=\"background-image-holder parallax-background\">\n        <img class=\"background-image\" alt=\"Background Image\" src=\"../../assets/img/blur2.jpg\">\n      </div>\n\n      <div class=\"container\">\n        <div class=\"row\">\n\n          <div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center\">\n\n            <h1>More About Me</h1>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-6 col-md-4\">\n            <div class=\"stat feature\">\n              <div class=\"stat-bubble\">\n                <span>12</span>\n              </div>\n              <h3>Completed Projects</h3>\n            </div>\n          </div>\n\n          <div class=\"col-sm-6 col-md-4\">\n            <div class=\"stat feature\">\n              <div class=\"stat-bubble\">\n                <span>8</span>\n              </div>\n              <h3>Satisfied Clients</h3>\n            </div>\n          </div>\n\n          <div class=\"col-sm-6 col-md-4\">\n            <div class=\"stat feature\">\n              <div class=\"stat-bubble\">\n                <span>10+</span>\n              </div>\n              <h3>Years of experience</h3>\n            </div>\n          </div>\n\n\n        </div>\n\n      </div>\n    </section>\n  </div>"

/***/ }),

/***/ "./src/app/profile/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile',
            template: __webpack_require__("./src/app/profile/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/skills/skills.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"skill-bars\">\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center\">\n          <h1>Skills &amp; Expertise</h1>\n          <p class=\"lead\">\n            By my long career I used to use many technologies in order to accomplish my projects in the most recent technologies, here\n            below the most recent technologies with my expert level.</p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-6\">\n          <div class=\"skills-left skills\">\n            <h3>Backend Development / Techniques</h3>\n            <ul class=\"skills-ul\">\n              <li>\n                <span>Microsoft Dynamics CRM</span>\n                <div class=\"skill-bar-holder\">\n                  <div class=\"skill-capacity col-xs-12\"></div>\n                </div>\n              </li>\n\n              <li>\n                <span>C#</span>\n                <div class=\"skill-bar-holder\">\n                  <div class=\"skill-capacity col-xs-12\"></div>\n                </div>\n              </li>\n\n              <li>\n                <span>ASP MVC.net / Web API</span>\n                <div class=\"skill-bar-holder\">\n                  <div class=\"skill-capacity col-xs-9\"></div>\n                </div>\n              </li>\n\n              <li>\n                <span>WCF</span>\n                <div class=\"skill-bar-holder\">\n                  <div class=\"skill-capacity col-xs-6\"></div>\n                  <div class=\"skill-capacity col-xs-10\"></div>\n                </div>\n              </li>\n              <li>\n                <span>Microsoft Reporting Service</span>\n                <div class=\"skill-bar-holder\">\n                  <div class=\"skill-capacity col-xs-6\"></div>\n                  <div class=\"skill-capacity col-xs-9\"></div>\n                </div>\n              </li>\n              <li>\n                <span>Microsoft Integration Service</span>\n                <div class=\"skill-bar-holder\">\n                  <div class=\"skill-capacity col-xs-6\"></div>\n                  <div class=\"skill-capacity col-xs-9\"></div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"skills-right skills\">\n            <h3>Front end development</h3>\n            <ul class=\"skills-ul\">\n              <li>\n                <span>Javascript / JQuery</span>\n                <div class=\"skill-bar-holder\">\n                  <div class=\"skill-capacity col-xs-11\"></div>\n                </div>\n              </li>\n\n              <li>\n                <span>Angular</span>\n                <div class=\"skill-bar-holder\">\n                  <div class=\"skill-capacity col-xs-10\"></div>\n                </div>\n              </li>\n\n              <li>\n                <span>VUE</span>\n                <div class=\"skill-bar-holder\">\n                  <div class=\"skill-capacity col-xs-7\"></div>\n                </div>\n              </li>\n\n              <li>\n                <span>Firebase</span>\n                <div class=\"skill-bar-holder\">\n                  <div class=\"skill-capacity col-xs-6\"></div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/profile/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'skills',
            template: __webpack_require__("./src/app/profile/skills/skills.component.html"),
            styles: [__webpack_require__("./src/app/profile/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <mat-form-field class=\"LookupControl dynamic-form-control\">\r\n    <mat-select placeholder=\"{{ label }}\" [value]=\"value\">\r\n        <mat-option *ngFor=\"let option of options\" [value]=\"option.key\">\r\n            {{ option.value }}\r\n        </mat-option>\r\n    </mat-select>\r\n</mat-form-field> -->"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = /** @class */ (function () {
    function TestComponent() {
        this.propagateChange = function (_) { };
    }
    TestComponent_1 = TestComponent;
    Object.defineProperty(TestComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.propagateChange(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
            this.propagateChange(value);
        },
        enumerable: true,
        configurable: true
    });
    TestComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this._name = value;
            this._value = value;
        }
    };
    TestComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    TestComponent.prototype.registerOnTouched = function (fn) { };
    TestComponent.prototype.setDisabledState = function (isDisabled) { };
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.value = null;
        }, 5000);
        // setTimeout(() => {
        this.options = [
            {
                key: 1,
                value: 1
            },
            {
                key: 2,
                value: 2
            },
            {
                key: 3,
                value: 3
            },
            {
                key: 4,
                value: 4
            },
            {
                key: 5,
                value: 5
            }
        ];
        // }, 5000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("name"),
        __metadata("design:type", String)
    ], TestComponent.prototype, "_name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("value"),
        __metadata("design:type", Number)
    ], TestComponent.prototype, "_value", void 0);
    TestComponent = TestComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "test",
            template: __webpack_require__("./src/app/test/test.component.html"),
            styles: [__webpack_require__("./src/app/test/test.component.css")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return TestComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
    var TestComponent_1;
}());



/***/ }),

/***/ "./src/app/test2/test2.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test2/test2.component.html":
/***/ (function(module, exports) {

module.exports = "<list-view></list-view>"

/***/ }),

/***/ "./src/app/test2/test2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Test2Component = /** @class */ (function () {
    function Test2Component() {
    }
    Test2Component.prototype.ngOnInit = function () {
    };
    Test2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test2',
            template: __webpack_require__("./src/app/test2/test2.component.html"),
            styles: [__webpack_require__("./src/app/test2/test2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Test2Component);
    return Test2Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDuHoLHTAOpOGOEMZWHuvkBnmHBcEo1jyA",
        authDomain: "dynamicportal-318a8.firebaseapp.com",
        databaseURL: "https://dynamicportal-318a8.firebaseio.com",
        projectId: "dynamicportal-318a8",
        storageBucket: "dynamicportal-318a8.appspot.com",
        messagingSenderId: "68170105696"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map