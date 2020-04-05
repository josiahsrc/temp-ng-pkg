(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('auth', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.auth = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var AuthService = /** @class */ (function () {
        function AuthService() {
        }
        AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
        AuthService.ɵprov = core["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
        return AuthService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AuthService, [{
            type: core.Injectable,
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
        AuthComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["lib-auth"]], decls: 2, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, " auth works! ");
                core["ɵɵelementEnd"]();
            } }, encapsulation: 2 });
        return AuthComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AuthComponent, [{
            type: core.Component,
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
        WrapperComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: WrapperComponent, selectors: [["lib-wrapper"]], decls: 4, vars: 0, consts: [[1, "test"]], template: function WrapperComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, "wrapper works!");
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](2, "div", 0);
                core["ɵɵtext"](3, " hello\n");
                core["ɵɵelementEnd"]();
            } }, styles: [".test[_ngcontent-%COMP%]{background-color:red;height:50px;width:50px}"] });
        return WrapperComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](WrapperComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-wrapper',
                    templateUrl: './wrapper.component.html',
                    styleUrls: ['./wrapper.component.scss']
                }]
        }], function () { return []; }, null); })();

    var AuthModule = /** @class */ (function () {
        function AuthModule() {
        }
        AuthModule.ɵmod = core["ɵɵdefineNgModule"]({ type: AuthModule });
        AuthModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[]] });
        return AuthModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](AuthModule, { declarations: [AuthComponent, WrapperComponent], exports: [AuthComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AuthModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [AuthComponent, WrapperComponent],
                    imports: [],
                    exports: [AuthComponent]
                }]
        }], null, null); })();

    exports.AuthComponent = AuthComponent;
    exports.AuthModule = AuthModule;
    exports.AuthService = AuthService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=auth.umd.js.map
