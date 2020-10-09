"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kalyera_1 = __importDefault(require("./kalyera"));
const awspinpoint_1 = __importDefault(require("./awspinpoint"));
const mockedService_1 = __importDefault(require("./mockedService"));
class SendSms {
    constructor() { }
    sendTransactionalMessage(message, phone) {
        for (let index = 0; index < this.services.length; index++) {
            console.log(this.services[index]);
            let serviceFunctionCalled = this.services[index].sendTransactionalMessage(message, phone);
            if (!serviceFunctionCalled)
                continue;
            return serviceFunctionCalled;
        }
        throw new Error("No service allowed this.");
    }
    sendOtpMessage(message, phone) {
        for (let index = 0; index < this.services.length; index++) {
            let serviceFunctionCalled = this.services[index].sendOtpMessage(message, phone);
            if (!serviceFunctionCalled)
                continue;
            return serviceFunctionCalled;
        }
        throw new Error("No service allowed this.");
    }
    sendPromotionalMessage(message, phone) {
        for (let index = 0; index < this.services.length; index++) {
            let serviceFunctionCalled = this.services[index].sendPromotionalMessage(message, phone);
            if (!serviceFunctionCalled)
                continue;
            return serviceFunctionCalled;
        }
        throw new Error("No service allowed this.");
    }
    checkForServiceAndIfFoundSendSMS(account) { }
    addVendors(config) {
        let vendors = [];
        let error;
        config.vendorConfigList.forEach((element) => {
            if (element.type && element.cred)
                vendors.push(this.smsVendorFactory(element));
            else
                error = true;
        });
        if (error)
            throw new Error("type and cred are mandatory.");
        else
            this.services = vendors;
    }
    smsVendorFactory(config) {
        switch (config.type) {
            case "kalyera":
                return new kalyera_1.default(config.cred);
            case "awspinpoint":
                return new awspinpoint_1.default(config.cred);
            default:
                return new mockedService_1.default(config.cred);
        }
    }
}
exports.default = SendSms;
//# sourceMappingURL=index.js.map