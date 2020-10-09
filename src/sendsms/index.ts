import responseMessage from "../utils/responseMessage";
import Kalyera from "./kalyera";
import AwsPinpoint from "./awspinpoint";
import MocekdService from "./mockedService";
class SendSms {
  constructor() {}
  services: any;

  sendTransactionalMessage(message: string, phone: number) {
    for (let index = 0; index < this.services.length; index++) {
      console.log(this.services[index]);
      let serviceFunctionCalled = this.services[index].sendTransactionalMessage(
        message,
        phone
      );
      if (!serviceFunctionCalled) continue;
      return serviceFunctionCalled;
    }
    throw new Error("No service allowed this.");
  }

  sendOtpMessage(message: string, phone: number) {
    for (let index = 0; index < this.services.length; index++) {
      let serviceFunctionCalled = this.services[index].sendOtpMessage(
        message,
        phone
      );
      if (!serviceFunctionCalled) continue;
      return serviceFunctionCalled;
    }
    throw new Error("No service allowed this.");
  }
  sendPromotionalMessage(message: string, phone: number) {
    for (let index = 0; index < this.services.length; index++) {
      let serviceFunctionCalled = this.services[index].sendPromotionalMessage(
        message,
        phone
      );
      if (!serviceFunctionCalled) continue;
      return serviceFunctionCalled;
    }
    throw new Error("No service allowed this.");
  }

  checkForServiceAndIfFoundSendSMS(account: string) {}

  addVendors(config: any) {
    let vendors: any[] = [];
    let error;
    config.vendorConfigList.forEach((element: any) => {
      if (element.type && element.cred)
        vendors.push(this.smsVendorFactory(element));
      else error = true;
    });
    if (error) throw new Error("type and cred are mandatory.");
    else this.services = vendors;
  }

  smsVendorFactory(config: any) {
    switch (config.type) {
      case "kalyera":
        return new Kalyera(config.cred);
      case "awspinpoint":
        return new AwsPinpoint(config.cred);
        
      default:
        return new MocekdService(config.cred);
    }
  }
}

export default SendSms;
