"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let services = {
    "kalyera": {
        "otp": {
            method: "sms",
            api_key: "A2fc9ecf2f13d876aae530b68ca2ad3e5",
            sender: "GARPRE",
            baseEndpoint: "https://api-alerts.kaleyra.com/v4/",
        },
        "transactional": {
            method: "sms",
            api_key: "A69345d260cc2b586c2aed63b70730139",
            sender: "SLCEIT",
            baseEndpoint: "https://api-alerts.kaleyra.com/v4/"
        }
    },
    "pinpoint": {}
};
exports.default = services;
//# sourceMappingURL=production-creds.js.map