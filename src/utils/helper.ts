  
  function checkForCreds(service: string, account: string) {
    // @ts-ignore
    let credConfig = CredInstance.getCreds(service);
    if (credConfig) {
      if (account && credConfig[account]) {
        return credConfig[account];
      }
      return credConfig;
    } else {
      return false;
    }
  }

  function checkForInputValue(
    message: string,
    phone: number
  ) {
    if (!message || !phone) {
      return {
        error: true,
        message: `${
          message ? "phone" : "message"
        } is mandatory.`,
      };
    }
    return {
      error: false,
    };
  }
export default {checkForCreds,checkForInputValue}