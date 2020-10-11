import SmsManager from './sms/index'
// @ts-ignore

class C extends Object {
    constructor() {
        super()
    }
}

class SmsService extends SmsManager {
    /**
   *
   * @param credential
   */
    constructor(credential?: C) {
        super()
        if (credential) this.initialize(credential)
    }

    /** Initialize the service **/
    /**
   * @param credential
   */
    initialize(credential: C): void {
    // @ts-ignore
        this.addVendors(credential)
    }
}
export default SmsService
