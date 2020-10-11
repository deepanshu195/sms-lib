import SmsManager from "./sms/index";
// @ts-ignore
/** send Message **/
class SmsService extends SmsManager {
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
// var b = new SmsService();
// b.initialize({
//   vendorConfigList: [
//     {
//       type: "awspinpoint",
//       cred: {
//         otp: {
//           method: "sms",
//           api_key: "A2fc9ecf2f13d876aae530b68ca2ad3e5",
//           sender: "SLCEIT",
//           baseEndpoint: "https://api-alerts.kaleyra.com/v4/",
//         },
//       },
//     },
//     {
//       type: "Kaleyra",
//       cred: {
//         otp: {
//           method: "sms",
//           api_key: "A2fc9ecf2f13d876aae530b68ca2ad3e5",
//           sender: "SLCEIT",
//           baseEndpoint: "https://api-alerts.kaleyra.com/v4/",
//         },
//         transactional: {
//           method: "sms",
//           api_key: "A69345d260cc2b586c2aed63b70730139",
//           // A69345d260cc2b586c2aed63b70730139
//           sender: "GARPRE",
//           baseEndpoint: "https://api-alerts.kaleyra.com/v4/",
//         },
//       },
//     },
//   ],
// });
//
// b.sendTransactionalMessage(
//   "Hi Ramu, your order (Order ID: 101) has been successfully processed. Please check your email for further details. Login @ https://slicepay.in/",
//   7678130304
// )
export default SmsService;


