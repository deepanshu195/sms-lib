import SendSms from "./sendsms/index";
// @ts-ignore
import CredObject from "./credentials";
/** send Message **/
class SmsService extends SendSms {
  /**
   *
   * @param credential
   */
  constructor(credential?: object) {
    super();
    if (credential) this.initialize(credential);
  }

  /** Initialize the service **/
  /**
   * @param credential
   */
  initialize(credential: object) {
    // @ts-ignore
    this.addVendors(credential);
  }
}
var b = new SmsService();
b.initialize({
  vendorConfigList: [
    {
      type: "awspinpoint",
      cred: {
        otp: {
          method: "sms",
          api_key: "A2fc9ecf2f13d876aae530b68ca2ad3e5",
          sender: "SLCEIT",
          baseEndpoint: "https://api-alerts.kaleyra.com/v4/",
        },
      },
    },
    {
      type: "Kaleyra",
      cred: {
        otp: {
          method: "sms",
          api_key: "A2fc9ecf2f13d876aae530b68ca2ad3e5",
          sender: "SLCEIT",
          baseEndpoint: "https://api-alerts.kaleyra.com/v4/",
        },
        transactional: {
          method: "sms",
          api_key: "A69345d260cc2b586c2aed63b70730139",
          // A69345d260cc2b586c2aed63b70730139
          sender: "GARPRE",
          baseEndpoint: "https://api-alerts.kaleyra.com/v4/",
        },
      },
    },
  ],
});
b.sendTransactionalMessage(
  "Hi Ramu, your order (Order ID: 201) has been successfully processed. Please check your email for further details. Login @ https://slicepay.in/",
  9629785576
)
  .then((res: any) => console.log(res))
  .catch((err: any) => console.log(err));
export default SmsService;

  // "husky": {
  //   "hooks": {
  //     "pre-commit": "npm run build && npm run test"
  //   }
  // },
  // "dependencies": {
  //   "axios": "^0.20.0"
  // }

