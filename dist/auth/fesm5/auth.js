import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
    AuthService.ɵprov = ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    return AuthService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
    AuthComponent.ɵcmp = ɵɵdefineComponent({ type: AuthComponent, selectors: [["lib-auth"]], decls: 2, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " auth works! ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return AuthComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AuthComponent, [{
        type: Component,
        args: [{
                selector: 'lib-auth',
                template: "\n    <p>\n      auth works!\n    </p>\n  ",
                styles: [],
            }]
    }], function () { return []; }, null); })();

var WrapperComponent = /** @class */ (function () {
    function WrapperComponent() {
    }
    WrapperComponent.prototype.ngOnInit = function () {
    };
    WrapperComponent.ɵfac = function WrapperComponent_Factory(t) { return new (t || WrapperComponent)(); };
    WrapperComponent.ɵcmp = ɵɵdefineComponent({ type: WrapperComponent, selectors: [["lib-wrapper"]], decls: 4, vars: 0, consts: [[1, "test"]], template: function WrapperComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, "wrapper works!");
            ɵɵelementEnd();
            ɵɵelementStart(2, "div", 0);
            ɵɵtext(3, " hello\n");
            ɵɵelementEnd();
        } }, styles: [".test[_ngcontent-%COMP%]{background-color:red;height:50px;width:50px}"] });
    return WrapperComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(WrapperComponent, [{
        type: Component,
        args: [{
                selector: 'lib-wrapper',
                templateUrl: './wrapper.component.html',
                styleUrls: ['./wrapper.component.scss']
            }]
    }], function () { return []; }, null); })();

var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule.ɵmod = ɵɵdefineNgModule({ type: AuthModule });
    AuthModule.ɵinj = ɵɵdefineInjector({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[]] });
    return AuthModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AuthModule, { declarations: [AuthComponent, WrapperComponent], exports: [AuthComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AuthModule, [{
        type: NgModule,
        args: [{
                declarations: [AuthComponent, WrapperComponent],
                imports: [],
                exports: [AuthComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of auth
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthComponent, AuthModule, AuthService };
//# sourceMappingURL=auth.js.map
