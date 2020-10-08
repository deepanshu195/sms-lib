import SendSms from "./sendsms/index";
// @ts-ignore
import CredObject from "./credentials";
/** send Message **/
class SmsService extends SendSms {
  /**
   *
   * @param credential
   */
  constructor(credential: object) {
    super();
    this.init(credential);
  }

  /** Initialize the service **/
  /**
   * @param credential
   */
  init(credential: object) {
    // @ts-ignore
    CredObject.setCreds(credential);
    
  }
}
export default SmsService;
