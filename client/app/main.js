System.register(["angular2/platform/browser", 'angular2/http', './demo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, http_1, demo_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (demo_1_1) {
                demo_1 = demo_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(demo_1.DemoComponent, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map