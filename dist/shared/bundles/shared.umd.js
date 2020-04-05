(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('shared', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.shared = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var SharedService = /** @class */ (function () {
        function SharedService() {
        }
        SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
        SharedService.ɵprov = core["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });
        return SharedService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SharedService, [{
            type: core.Injectable,
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
        SharedComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: SharedComponent, selectors: [["lib-shared"]], decls: 2, vars: 0, template: function SharedComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, " shared works! ");
                core["ɵɵelementEnd"]();
            } }, encapsulation: 2 });
        return SharedComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SharedComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-shared',
                    template: "\n    <p>\n      shared works!\n    </p>\n  ",
                    styles: [],
                }]
        }], function () { return []; }, null); })();

    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SharedModule });
        SharedModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[]] });
        return SharedModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SharedModule, { declarations: [SharedComponent], exports: [SharedComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SharedModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [SharedComponent],
                    imports: [],
                    exports: [SharedComponent]
                }]
        }], null, null); })();

    exports.SharedComponent = SharedComponent;
    exports.SharedModule = SharedModule;
    exports.SharedService = SharedService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=shared.umd.js.map
