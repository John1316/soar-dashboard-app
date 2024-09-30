/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export default async function CustomAxios(
  requestType: string,
  url: string,
  headers = {},
  requestBody: any = null
) {
  try {
    // Create Axios config object with the request type, URL, headers, and request body
    const config = {
      method: requestType,
      url,
      headers,
      data: requestBody, // Include the request body for POST requests
    };
    const response = await axios(config);

    return response.data;
  } catch (error: any) {
    // Handle errors if provided errorHandler function is defined
    if (error?.response?.status === 401) {
      // window.location.reload()
    }
    return error;
  }
}
