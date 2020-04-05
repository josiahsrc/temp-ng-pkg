import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let AuthService = class AuthService {
    constructor() {
    }
};
AuthService.ɵprov = ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(); }, token: AuthService, providedIn: "root" });
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);

let AuthComponent = class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthComponent = __decorate([
    Component({
        selector: 'lib-auth',
        template: `
    <p>
      auth works!
    </p>
  `
    })
], AuthComponent);

let WrapperComponent = class WrapperComponent {
    constructor() { }
    ngOnInit() {
    }
};
WrapperComponent = __decorate([
    Component({
        selector: 'lib-wrapper',
        template: "<p>wrapper works!</p>\n\n<div class=\"test\">\n    hello\n</div>",
        styles: [".test{background-color:red;height:50px;width:50px}"]
    })
], WrapperComponent);

let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    NgModule({
        declarations: [AuthComponent, WrapperComponent],
        imports: [],
        exports: [AuthComponent, WrapperComponent]
    })
], AuthModule);

/*
 * Public API Surface of auth
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthComponent, AuthModule, AuthService, WrapperComponent as ɵa };
//# sourceMappingURL=auth.js.map
