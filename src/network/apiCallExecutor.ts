import axios from "axios";
import responseMessage from "../utils/responseMessage";
async function apiCallExecutor(requestedObject: Object): Promise<any> {
  try {
    let response = await axios(requestedObject);
    if (response.status && response.status === 200) {
      console.log(response.data.status);
      if (response.data.status && response.data.status.toLowerCase() == "ok")
        return Object.assign(responseMessage.success.SUCCESS, {
          data: response.data,
        });
      return Object.assign(responseMessage.error.BAD_REQUEST, {
        data: response.data,
      });
    } else {
      return Object.assign(responseMessage.error.NOT_FOUND, {
        data: response.data,
      });
    }
  } catch (e) {
    return Object.assign(responseMessage.error.INTERNAL_ERROR, {
      message: e.message || "Something went wrong.",
    });
  }
}
const api = {
  apiCallExecutor,
};
export default api;
