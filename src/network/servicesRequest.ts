import apiCall from "./apiCallExecutor";
class ServicesRequest {
    serviceRequest(config: object, message: string, phone: number,service:string): Promise<any> {
        return apiCall.apiCallExecutor(this.createHttpReqForDifferentService(config, message, phone,service),service);
    }
    private createHttpReqForDifferentService(config: any, message: string, phone: number,service:string):object {
        switch (service) {
            case "kalyera":{
                return {
                    url:  `${config.baseEndpoint}?method=${config.method}&api_key=${config.api_key}&sender=${config.sender}&to=${phone}&message=${encodeURIComponent(message)}`,
                    method: 'GET',
                    headers: { Accept: 'application/json' }
                    }
                }
            default :{
                return {}
            }
        }
    }
}
export default new ServicesRequest();