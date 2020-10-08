"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Credentials {
    constructor() {
        this.creds = {};
    }
    setCreds(credentials) {
        this.creds = credentials;
    }
    getCreds(service) {
        // @ts-ignore
        return this.creds[service];
    }
}
let CredInstance;
if (!CredInstance) {
    CredInstance = new Credentials();
}
exports.default = CredInstance;
//# sourceMappingURL=index.js.map