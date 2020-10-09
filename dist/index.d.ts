import SendSms from "./sendsms/index";
/** send Message **/
declare class SmsService extends SendSms {
    /**
     *
     * @param credential
     */
    constructor(credential?: object);
    /** Initialize the service **/
    /**
     * @param credential
     */
    initialize(credential: object): void;
}
export default SmsService;
//# sourceMappingURL=index.d.ts.map