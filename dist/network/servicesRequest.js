"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiCallExecutor_1 = __importDefault(require("./apiCallExecutor"));
class ServicesRequest {
    serviceRequest(config, message, phone, service) {
        return apiCallExecutor_1.default.apiCallExecutor(this.createHttpReqForDifferentService(config, message, phone, service), service);
    }
    createHttpReqForDifferentService(config, message, phone, service) {
        switch (service) {
            case "kalyera": {
                return {
                    url: `${config.baseEndpoint}?method=${config.method}&api_key=${config.api_key}&sender=${config.sender}&to=${phone}&message=${encodeURIComponent(message)}`,
                    method: 'GET',
                    headers: { Accept: 'application/json' }
                };
            }
            default: {
                return {};
            }
        }
    }
}
exports.default = new ServicesRequest();
//# sourceMappingURL=servicesRequest.js.map