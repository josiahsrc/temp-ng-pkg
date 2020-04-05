import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.ɵprov = ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(); }, token: AuthService, providedIn: "root" });
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Component({
            selector: 'lib-auth',
            template: "\n    <p>\n      auth works!\n    </p>\n  "
        })
    ], AuthComponent);
    return AuthComponent;
}());

var WrapperComponent = /** @class */ (function () {
    function WrapperComponent() {
    }
    WrapperComponent.prototype.ngOnInit = function () {
    };
    WrapperComponent = __decorate([
        Component({
            selector: 'lib-wrapper',
            template: "<p>wrapper works!</p>\n\n<div class=\"test\">\n    hello\n</div>",
            styles: [".test{background-color:red;height:50px;width:50px}"]
        })
    ], WrapperComponent);
    return WrapperComponent;
}());

var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        NgModule({
            declarations: [AuthComponent, WrapperComponent],
            imports: [],
            exports: [AuthComponent, WrapperComponent]
        })
    ], AuthModule);
    return AuthModule;
}());

/*
 * Public API Surface of auth
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthComponent, AuthModule, AuthService, WrapperComponent as ɵa };
//# sourceMappingURL=auth.js.map
