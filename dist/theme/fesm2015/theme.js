import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class ThemeService {
    constructor() {
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = ɵɵdefineInjectable({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ThemeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class ThemeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ThemeComponent.ɵfac = function ThemeComponent_Factory(t) { return new (t || ThemeComponent)(); };
ThemeComponent.ɵcmp = ɵɵdefineComponent({ type: ThemeComponent, selectors: [["lib-theme"]], decls: 2, vars: 0, template: function ThemeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " theme works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ThemeComponent, [{
        type: Component,
        args: [{
                selector: 'lib-theme',
                template: `
    <p>
      theme works!
    </p>
  `,
                styles: [],
            }]
    }], function () { return []; }, null); })();

class ThemeModule {
}
ThemeModule.ɵmod = ɵɵdefineNgModule({ type: ThemeModule });
ThemeModule.ɵinj = ɵɵdefineInjector({ factory: function ThemeModule_Factory(t) { return new (t || ThemeModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ThemeModule, { declarations: [ThemeComponent], exports: [ThemeComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ThemeModule, [{
        type: NgModule,
        args: [{
                declarations: [ThemeComponent],
                imports: [],
                exports: [ThemeComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of theme
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ThemeComponent, ThemeModule, ThemeService };
//# sourceMappingURL=theme.js.map
