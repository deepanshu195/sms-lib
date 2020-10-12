import SmsVendorsFactory from './smsVendorFactory'
import SmsBase from './vendors/index'
import helper from '../utils/helper'
import { obj, arr } from '../utils/types'

class SmsManager {
  vendors: Array<SmsBase> | undefined;

  async sendTransactionalMessage(
      message: string,
      phone: number,
      priorityArray?: Array<string>
  ): Promise<any> {
      helper.checkForInputValue(message, phone)

      const vendorsList = this.sendPriorityWise(priorityArray)
      // @ts-ignore
      for (const vendor of vendorsList) {
          try {
              const response = await vendor.sendTransactionalMessage(message, phone)
              return Object.assign(response, { vendorName: vendor.vendorName })
          } catch (e) {
              console.log(e.message)
          }
      }
      throw new Error('No service could fulfil the request.')
  }

  async sendOtpMessage(
      message: string,
      phone: number,
      priorityArray?: arr<string>
  ): Promise<any> {
      helper.checkForInputValue(message, phone)
      const vendorsList = this.sendPriorityWise(priorityArray)
      // @ts-ignore
      for (const vendor of vendorsList) {
          try {
              const response = await vendor.sendTransactionalMessage(message, phone)
              return Object.assign(response, { vendorName: vendor.vendorName })
          } catch (e) {
              console.log(e.message)
          }
      }
      throw new Error('No service could fulfil the request.')
  }

  async sendPromotionalMessage(
      message: string,
      phone: number,
      priorityArray?: arr<string>
  ): Promise<any> {
      helper.checkForInputValue(message, phone)
      const vendorsList = this.sendPriorityWise(priorityArray)
      // @ts-ignore
      for (const vendor of vendorsList) {
          try {
              const response = await vendor.sendTransactionalMessage(message, phone)
              return Object.assign(response, { vendorName: vendor.vendorName })
          } catch (e) {
              console.log(e.message)
          }
      }
      throw new Error('No service could fulfil the request.')
  }

  addVendors(config: any): void {
      const vendors: any[] = []
      let error
      config.vendorConfigList.forEach((element: any) => {
          if (element.type && element.cred) {
              vendors.push(SmsVendorsFactory.buildVendor(element.type, element.cred))
          } else {
              error = true
          }
      })
      if (error) {
          throw new Error('type and cred are mandatory.')
      } else {
          this.vendors = vendors
      }
  }

  sendPriorityWise(priorityArray?: Array<string>): any[] | undefined {
      let fillArrayPriorityWise: arr<SmsBase> | undefined
      if (priorityArray) {
          priorityArray.forEach((vendorName) => {
              this.vendors?.forEach((vendor) => {
                  if (vendor.vendorName == vendorName) {
                      fillArrayPriorityWise?.push(vendor)
                  }
              })
          })
      }
      return this.vendors
  }
}

export default SmsManager
