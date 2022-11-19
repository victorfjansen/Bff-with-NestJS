"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CovidModule = void 0;
var covid_service_1 = require("./services/covid.service");
var covid_controller_1 = require("./controllers/covid.controller");
var axios_1 = require("@nestjs/axios");
var common_1 = require("@nestjs/common");
var CovidModule = /** @class */ (function () {
    function CovidModule() {
    }
    CovidModule = __decorate([
        (0, common_1.Module)({
            imports: [axios_1.HttpModule],
            controllers: [covid_controller_1.CovidController],
            providers: [covid_service_1.CovidService]
        })
    ], CovidModule);
    return CovidModule;
}());
exports.CovidModule = CovidModule;
