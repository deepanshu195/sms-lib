import SmsManager from './sms/index'
import SmsBase from './sms/vendors'
// @ts-ignore
import { obj } from './utils/types'

export default class SmsService extends SmsManager {
    /**
   *
   * @param credential
   */
    //   logger ? logger:Console. use like this.
    constructor(credential?: object, logger?: object) {
        super()
        if (credential) this.initialize(credential)
    }

    /** Initialize the service **/
    /**
   * @param credential
   */
    initialize(credential: object, logger?: object): void {
    // @ts-ignore
        this.addVendors(credential)
    }
}

const b = new SmsService()
