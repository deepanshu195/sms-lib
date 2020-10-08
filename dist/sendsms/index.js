"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const servicesRequest_1 = __importDefault(require("../network/servicesRequest"));
// @ts-ignore
const credentials_1 = __importDefault(require("../credentials"));
const responseMessage_1 = __importDefault(require("../utils/responseMessage"));
class SendSms {
    constructor() { }
    checkForCreds(service, account) {
        // @ts-ignore
        let credConfig = credentials_1.default.getCreds(service);
        if (credConfig) {
            if (account && credConfig[account]) {
                return credConfig[account];
            }
            return credConfig;
        }
        else {
            return false;
        }
    }
    checkForInputValue(message, phone, service, account) {
        if (!message || !phone || !service) {
            return {
                error: true,
                message: `${message ? (phone ? "service" : "phone") : "message"} is mandatory.`,
            };
        }
        return {
            error: false,
        };
    }
    /**
     *
     * @param message
     * @param phone
     * @param service
     * @param account
     */
    sendTransactionalMessage(message, phone, service, account) {
        let creditConfig = this.checkForCreds(service, account);
        if (creditConfig &&
            !this.checkForInputValue(message, phone, service).error) {
            return servicesRequest_1.default.serviceRequest(creditConfig, message, phone, service);
        }
        else {
            if (this.checkForInputValue(message, phone, service).error)
                return Promise.reject(Object.assign(responseMessage_1.default.error.BAD_REQUEST, {
                    error: this.checkForInputValue(message, phone, service).message,
                }));
            return Promise.reject(responseMessage_1.default.error.NOT_FOUND);
        }
    }
    /**
     *
     * @param message
     * @param phone
     * @param service
     * @param account
     */
    sendOtpMessage(message, phone, service, account) {
        let creditConfig = this.checkForCreds(service, account);
        if (creditConfig &&
            !this.checkForInputValue(message, phone, service).error) {
            return servicesRequest_1.default.serviceRequest(creditConfig, message, phone, service);
        }
        else {
            if (this.checkForInputValue(message, phone, service).error)
                return Promise.reject(Object.assign(responseMessage_1.default.error.BAD_REQUEST, {
                    error: this.checkForInputValue(message, phone, service).message,
                }));
            return Promise.reject(responseMessage_1.default.error.NOT_FOUND);
        }
    }
    /**
       *
       * @param message
       * @param phone
       * @param service
       * @param account
        Not in use currently. Under Development
       */
    sendPromotionMessage(message, phone, service, account) {
        let creditConfig = this.checkForCreds(service, account);
        if (creditConfig &&
            !this.checkForInputValue(message, phone, service).error) {
            return servicesRequest_1.default.serviceRequest(creditConfig, message, phone, service);
        }
        else {
            if (this.checkForInputValue(message, phone, service).error)
                return Promise.reject(Object.assign(responseMessage_1.default.error.BAD_REQUEST, {
                    error: this.checkForInputValue(message, phone, service).message,
                }));
            return Promise.reject(responseMessage_1.default.error.NOT_FOUND);
        }
    }
}
exports.default = SendSms;
//# sourceMappingURL=index.js.map