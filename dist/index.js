"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./sendsms/index"));
/** send Message **/
class SmsService extends index_1.default {
    /**
     *
     * @param credential
     */
    constructor(credential) {
        super();
        if (credential)
            this.initialize(credential);
    }
    /** Initialize the service **/
    /**
     * @param credential
     */
    initialize(credential) {
        // @ts-ignore
        this.addVendors(credential);
    }
}
var b = new SmsService();
b.initialize({
    vendorConfigList: [
        {
            type: "awspinpoint",
            cred: {
                otp: {
                    method: "sms",
                    api_key: "A2fc9ecf2f13d876aae530b68ca2ad3e5",
                    sender: "SLCEIT",
                    baseEndpoint: "https://api-alerts.kaleyra.com/v4/",
                },
            },
        },
        {
            type: "Kaleyra",
            cred: {
                otp: {
                    method: "sms",
                    api_key: "A2fc9ecf2f13d876aae530b68ca2ad3e5",
                    sender: "SLCEIT",
                    baseEndpoint: "https://api-alerts.kaleyra.com/v4/",
                },
                transactional: {
                    method: "sms",
                    api_key: "A69345d260cc2b586c2aed63b70730139",
                    // A69345d260cc2b586c2aed63b70730139
                    sender: "GARPRE",
                    baseEndpoint: "https://api-alerts.kaleyra.com/v4/",
                },
            },
        },
    ],
});
b.sendTransactionalMessage("Hi Ramu, your order (Order ID: 201) has been successfully processed. Please check your email for further details. Login @ https://slicepay.in/", 9629785576)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
exports.default = SmsService;
//# sourceMappingURL=index.js.map