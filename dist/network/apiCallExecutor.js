"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const responseMessage_1 = __importDefault(require("../utils/responseMessage"));
function apiCallExecutor(requestedObject) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield axios_1.default(requestedObject);
            if (response.status && response.status === 200) {
                console.log(response.data.status);
                if (response.data.status && response.data.status.toLowerCase() == "ok")
                    return Object.assign(responseMessage_1.default.success.SUCCESS, {
                        data: response.data,
                    });
                return Object.assign(responseMessage_1.default.error.BAD_REQUEST, {
                    data: response.data,
                });
            }
            else {
                return Object.assign(responseMessage_1.default.error.NOT_FOUND, {
                    data: response.data,
                });
            }
        }
        catch (e) {
            return Object.assign(responseMessage_1.default.error.INTERNAL_ERROR, {
                message: e.message || "Something went wrong.",
            });
        }
    });
}
const api = {
    apiCallExecutor,
};
exports.default = api;
//# sourceMappingURL=apiCallExecutor.js.map