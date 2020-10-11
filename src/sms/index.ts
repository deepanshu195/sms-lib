import SmsVendorsFactory from "./smsVendorFactory";
import SmsBase from "./vendors/index"
import helper from "../utils/helper"

class SmsManager {
  constructor() {
  }

  vendors: Array<SmsBase> | undefined;

  async sendTransactionalMessage(message: string, phone: number, priorityArray?: Array<string>) {
    helper.checkForInputValue(message, phone);

    let vendorsList = this.sendPriorityWise(priorityArray);
    // @ts-ignore
    for (let vendor of vendorsList) {
      try {
        let response = await (vendor.sendTransactionalMessage(message, phone));
        console.log("inside here");
        return Object.assign(response, {vendorName: vendor.vendorName});
      } catch (e) {
      }
    }
    throw new Error("No service could fulfil the request.");
  }

  async sendOtpMessage(message: string, phone: number, priorityArray?: Array<string>) {
    helper.checkForInputValue(message, phone);
    let vendorsList = this.sendPriorityWise(priorityArray);
    // @ts-ignore
    for (let vendor of vendorsList) {
      try {
        let response = await (vendor.sendTransactionalMessage(message, phone));
        return Object.assign(response, {vendorName: vendor.vendorName});
      } catch (e) {
      }
    }
    throw new Error("No service could fulfil the request.");
  }

  async sendPromotionalMessage(message: string, phone: number, priorityArray?: Array<string>) {
    helper.checkForInputValue(message, phone);
    let vendorsList = this.sendPriorityWise(priorityArray);
    // @ts-ignore
    for (let vendor of vendorsList) {
      try {
        let response = await (vendor.sendTransactionalMessage(message, phone));
        return Object.assign(response, {vendorName: vendor.vendorName});
      } catch (e) {
      }
    }
    throw new Error("No service could fulfil the request.");
  }

  addVendors(config: any) {
    let vendors: any[] = [];
    let error;
    config.vendorConfigList.forEach((element: any) => {
      if (element.type && element.cred) {
        vendors.push(SmsVendorsFactory.buildVendor(element.type, element.cred));
      } else {
        error = true;
      }
    });
    if (error) {
      throw new Error("type and cred are mandatory.");
    } else {
      this.vendors = vendors;
    }
  }

  sendPriorityWise(priorityArray?: Array<string>) {
    let fillArrayPriorityWise: Array<SmsBase> | undefined;
    if (priorityArray) {
      priorityArray.forEach(vendorName => {
        this.vendors?.forEach(vendor => {
          if (vendor.vendorName == vendorName) {
            fillArrayPriorityWise?.push(vendor);
          }
        })
      })
    }
    return this.vendors;
  }
}

export default SmsManager;
