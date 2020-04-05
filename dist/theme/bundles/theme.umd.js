(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('theme', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.theme = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var ThemeService = /** @class */ (function () {
        function ThemeService() {
        }
        ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
        ThemeService.ɵprov = core["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
        return ThemeService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ThemeService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var ThemeComponent = /** @class */ (function () {
        function ThemeComponent() {
        }
        ThemeComponent.prototype.ngOnInit = function () {
        };
        ThemeComponent.ɵfac = function ThemeComponent_Factory(t) { return new (t || ThemeComponent)(); };
        ThemeComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ThemeComponent, selectors: [["lib-theme"]], decls: 2, vars: 0, template: function ThemeComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, " theme works! ");
                core["ɵɵelementEnd"]();
            } }, encapsulation: 2 });
        return ThemeComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ThemeComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-theme',
                    template: "\n    <p>\n      theme works!\n    </p>\n  ",
                    styles: [],
                }]
        }], function () { return []; }, null); })();

    var ThemeModule = /** @class */ (function () {
        function ThemeModule() {
        }
        ThemeModule.ɵmod = core["ɵɵdefineNgModule"]({ type: ThemeModule });
        ThemeModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function ThemeModule_Factory(t) { return new (t || ThemeModule)(); }, imports: [[]] });
        return ThemeModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](ThemeModule, { declarations: [ThemeComponent], exports: [ThemeComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ThemeModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [ThemeComponent],
                    imports: [],
                    exports: [ThemeComponent]
                }]
        }], null, null); })();

    exports.ThemeComponent = ThemeComponent;
    exports.ThemeModule = ThemeModule;
    exports.ThemeService = ThemeService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=theme.umd.js.map
