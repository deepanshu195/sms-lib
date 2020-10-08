"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./sendsms/index"));
// @ts-ignore
const credentials_1 = __importDefault(require("./credentials"));
/** send Message **/
class SmsService extends index_1.default {
    /**
     *
     * @param credential
     */
    constructor(credential) {
        super();
        this.init(credential);
    }
    /** Initialize the service **/
    /**
     * @param credential
     */
    init(credential) {
        // @ts-ignore
        credentials_1.default.setCreds(credential);
    }
}
exports.default = SmsService;
//# sourceMappingURL=index.js.map