import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
    SharedService.ɵprov = ɵɵdefineInjectable({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });
    return SharedService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SharedService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var SharedComponent = /** @class */ (function () {
    function SharedComponent() {
    }
    SharedComponent.prototype.ngOnInit = function () {
    };
    SharedComponent.ɵfac = function SharedComponent_Factory(t) { return new (t || SharedComponent)(); };
    SharedComponent.ɵcmp = ɵɵdefineComponent({ type: SharedComponent, selectors: [["lib-shared"]], decls: 2, vars: 0, template: function SharedComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " shared works! ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return SharedComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SharedComponent, [{
        type: Component,
        args: [{
                selector: 'lib-shared',
                template: "\n    <p>\n      shared works!\n    </p>\n  ",
                styles: [],
            }]
    }], function () { return []; }, null); })();

var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵmod = ɵɵdefineNgModule({ type: SharedModule });
    SharedModule.ɵinj = ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[]] });
    return SharedModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SharedModule, { declarations: [SharedComponent], exports: [SharedComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                declarations: [SharedComponent],
                imports: [],
                exports: [SharedComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SharedComponent, SharedModule, SharedService };
//# sourceMappingURL=shared.js.map
