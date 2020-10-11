import apiCall from "../../network/apiCallExecutor";
import SmsBase  from "./index";
class Kalyera extends SmsBase{
  cred: any;
  constructor(name:string,cred: any) {
    super(name);
    this.cred = cred;
  }

  sendOtpMessage(message: string, phone: number):Promise<any> {
      let { baseEndpoint, api_key, sender,  method } =
        this.cred.otp || {};
      let url = `${baseEndpoint}?method=${method}&api_key=${api_key}&sender=${sender}&to=${phone}&message=${encodeURIComponent(
        message
      )}`;
      let reqObjected = this.createRequestBody(message, phone, url);
      return apiCall.apiCallExecutor(reqObjected);
   }

  sendTransactionalMessage(message: string, phone: number) :Promise<any>{
      let { baseEndpoint, api_key, sender,  method } =
        this.cred.transactional || {};
      let url = `${baseEndpoint}?method=${method}&api_key=${api_key}&sender=${sender}&unicode=auto&to=${phone}&message=${encodeURIComponent(
        message
      )}`;
      let reqObjected = this.createRequestBody(message, phone, url);
      return apiCall.apiCallExecutor(reqObjected);
    }
  /**
   * Not in use.
   *  **/
  sendPromotionalMessage(message: string, phone: number):Promise<any> {
      let { baseEndpoint, api_key, sender,  method } =
        this.cred.promotional || {};
      let url = `${baseEndpoint}?method=${method}&api_key=${api_key}&sender=${sender}&to=${phone}&message=${encodeURIComponent(
        message
      )}`;
      let reqObjected = this.createRequestBody(message, phone, url);
      return apiCall.apiCallExecutor(reqObjected);
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
