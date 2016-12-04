System.register(['angular2/core', "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var DemoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            DemoComponent = (function () {
                function DemoComponent(http) {
                    this.http = http;
                    this.submitDisabled = false;
                    this.successMsg = '';
                    this.errorMsg = '';
                }
                DemoComponent.prototype.onCreate = function () {
                    var _this = this;
                    if (this.recipient && this.subject && this.message) {
                        this.submitDisabled = true;
                        var data = {
                            recipient: this.recipient,
                            subject: this.subject,
                            message: this.message,
                        };
                        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                        this.http.post('http://localhost:8000/mail/create', JSON.stringify(data), { headers: headers }).subscribe(function (result) {
                            var data = JSON.parse(result._body);
                            _this.successMsg = data.message;
                            _this.submitDisabled = false;
                            _this.recipient = '';
                            _this.subject = '';
                            _this.message = '';
                        }, function (error) {
                            var error = JSON.parse(error._body);
                            _this.errorMsg = error.statusCode;
                            _this.submitDisabled = false;
                            console.log(error);
                        });
                    }
                };
                DemoComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/contact.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DemoComponent);
                return DemoComponent;
            }());
            exports_1("DemoComponent", DemoComponent);
        }
    }
});
//# sourceMappingURL=demo.js.map