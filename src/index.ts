import SmsManager from './sms/index'
// @ts-ignore

class Obj extends Object {
    constructor() {
        super()
    }
}

class SmsService extends SmsManager {
    /**
   *
   * @param credential
   */
    constructor(credential?: Obj) {
        super()
        if (credential) this.initialize(credential)
    }

    /** Initialize the service **/
    /**
   * @param credential
   */
    initialize(credential: Obj): void {
    // @ts-ignore
        this.addVendors(credential)
    }
}
export default SmsService
