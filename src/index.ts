import SmsManager from './sms/index'
// @ts-ignore
import { obj } from './utils/types'

class SmsService extends SmsManager {
    /**
   *
   * @param credential
   */
    constructor(credential?: obj) {
        super()
        if (credential) this.initialize(credential)
    }

    /** Initialize the service **/
    /**
   * @param credential
   */
    initialize(credential: obj): void {
    // @ts-ignore
        this.addVendors(credential)
    }
}

export default SmsService
