declare class SendSms {
    constructor();
    private checkForCreds;
    private checkForInputValue;
    /**
     *
     * @param message
     * @param phone
     * @param service
     * @param account
     */
    sendTransactionalMessage(message: string, phone: number, service: string, account?: string): Promise<any>;
    /**
     *
     * @param message
     * @param phone
     * @param service
     * @param account
     */
    sendOtpMessage(message: string, phone: number, service: string, account?: string): Promise<any>;
    /**
       *
       * @param message
       * @param phone
       * @param service
       * @param account
        Not in use currently. Under Development
       */
    protected sendPromotionMessage(message: string, phone: number, service: string, account?: string): Promise<any>;
}
export default SendSms;
//# sourceMappingURL=index.d.ts.map