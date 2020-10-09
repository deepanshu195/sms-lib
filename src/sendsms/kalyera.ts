import helper from "../utils/helper";
import responseMessage from "../utils/responseMessage";
import apiCall from "../network/apiCallExecutor";
class Kalyera {
  cred: any;
  constructor(cred: any) {
    this.cred = cred;
  }
  sendOtpMessage(message: string, phone: number) {

    // add otp check too...
    let inputCheck = helper.checkForInputValue(message, phone);
    if (!inputCheck.error) {
      let { baseEndpoint, api_key, sender, phone, message, method } =
        this.cred.otp || {};
      let url = `${baseEndpoint}?method=${method}&api_key=${api_key}&sender=${sender}&to=${phone}&message=${encodeURIComponent(
        message
      )}`;
      let reqObjected = this.createRequestBody(message, phone, url);
      return apiCall.apiCallExecutor(reqObjected);
    } else {
      return Promise.reject(
        Object.assign(responseMessage.error.BAD_REQUEST, {
          error: inputCheck.message,
        })
      );
    }
  }



  sendTransactionalMessage(message: string, phone: number) {
    return;
    let inputCheck = helper.checkForInputValue(message, phone);
    if (!inputCheck.error) {
      let { baseEndpoint, api_key, sender, phone, message, method } =
        this.cred.transactional || {};
      let url = `${baseEndpoint}?method=${method}&api_key=${api_key}&sender=${sender}&unicode=auto&to=${phone}&message=${encodeURIComponent(
        message
      )}`;
      let reqObjected = this.createRequestBody(message, phone, url);
      return apiCall.apiCallExecutor(reqObjected);
    } else {
      return Promise.reject(
        Object.assign(responseMessage.error.BAD_REQUEST, {
          error: inputCheck.message,
        })
      );
    }
  }
  /**
   * Not in use.
   *  **/
  sendPromotionalMessage(message: string, phone: number) {
    // add otp check too...
    let inputCheck = helper.checkForInputValue(message, phone);
    if (!inputCheck.error) {
      let { baseEndpoint, api_key, sender, phone, message, method } =
        this.cred.promotional || {};
      let url = `${baseEndpoint}?method=${method}&api_key=${api_key}&sender=${sender}&to=${phone}&message=${encodeURIComponent(
        message
      )}`;
      let reqObjected = this.createRequestBody(message, phone, url);
      return apiCall.apiCallExecutor(reqObjected);
    } else {
      return Promise.reject(
        Object.assign(responseMessage.error.BAD_REQUEST, {
          error: inputCheck.message,
        })
      );
    }
  }
  createRequestBody(message: string, phone: number, url: string): object {
    return {
      url: url,
      method: "GET",
      headers: { Accept: "application/json" },
    };
  }
}
export default Kalyera;
