import ServiceRequest from "../network/servicesRequest";
// @ts-ignore
import CredInstance from "../credentials";
import responseMessage from "../utils/responseMessage";
class SendSms {
  constructor() {}
  private checkForCreds(service: string, account?: string) {
    // @ts-ignore
    let credConfig = CredInstance.getCreds(service);
    if (credConfig) {
      if (account && credConfig[account]) {
        return credConfig[account];
      }
      return credConfig;
    } else {
      return false;
    }
  }

  private checkForInputValue(
    message: string,
    phone: number,
    service: string,
    account?: string
  ) {
    if (!message || !phone || !service) {
      return {
        error: true,
        message: `${
          message ? (phone ? "service" : "phone") : "message"
        } is mandatory.`,
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
  sendTransactionalMessage(
    message: string,
    phone: number,
    service: string,
    account?: string
  ): Promise<any> {
    let creditConfig = this.checkForCreds(service, account);
    if (
      creditConfig &&
      !this.checkForInputValue(message, phone, service).error
    ) {
      return ServiceRequest.serviceRequest(
        creditConfig,
        message,
        phone,
        service
      );
    } else {
      if (this.checkForInputValue(message, phone, service).error)
        return Promise.reject(
          Object.assign(responseMessage.error.BAD_REQUEST, {
            error: this.checkForInputValue(message, phone, service).message,
          })
        );
      return Promise.reject(responseMessage.error.NOT_FOUND);
    }
  }
  /**
   *
   * @param message
   * @param phone
   * @param service
   * @param account
   */
  sendOtpMessage(
    message: string,
    phone: number,
    service: string,
    account?: string
  ): Promise<any> {
    let creditConfig = this.checkForCreds(service, account);
    if (
      creditConfig &&
      !this.checkForInputValue(message, phone, service).error
    ) {
      return ServiceRequest.serviceRequest(
        creditConfig,
        message,
        phone,
        service
      );
    } else {
      if (this.checkForInputValue(message, phone, service).error)
        return Promise.reject(
          Object.assign(responseMessage.error.BAD_REQUEST, {
            error: this.checkForInputValue(message, phone, service).message,
          })
        );

      return Promise.reject(responseMessage.error.NOT_FOUND);
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
  protected sendPromotionMessage(
    message: string,
    phone: number,
    service: string,
    account?: string
  ): Promise<any> {
    let creditConfig = this.checkForCreds(service, account);
    if (
      creditConfig &&
      !this.checkForInputValue(message, phone, service).error
    ) {
      return ServiceRequest.serviceRequest(
        creditConfig,
        message,
        phone,
        service
      );
    } else {
      if (this.checkForInputValue(message, phone, service).error)
        return Promise.reject(
          Object.assign(responseMessage.error.BAD_REQUEST, {
            error: this.checkForInputValue(message, phone, service).message,
          })
        );

      return Promise.reject(responseMessage.error.NOT_FOUND);
    }
  }
}

export default SendSms;
