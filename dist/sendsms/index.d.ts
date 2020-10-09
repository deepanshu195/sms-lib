import Kalyera from "./kalyera";
import AwsPinpoint from "./awspinpoint";
import MocekdService from "./mockedService";
declare class SendSms {
    constructor();
    services: any;
    sendTransactionalMessage(message: string, phone: number): any;
    sendOtpMessage(message: string, phone: number): any;
    sendPromotionalMessage(message: string, phone: number): any;
    checkForServiceAndIfFoundSendSMS(account: string): void;
    addVendors(config: any): void;
    smsVendorFactory(config: any): Kalyera | AwsPinpoint | MocekdService;
}
export default SendSms;
//# sourceMappingURL=index.d.ts.map