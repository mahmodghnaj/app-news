import axios, { AxiosInstance } from "axios";
import {
  errorInterceptor,
  requestInterceptor,
  successInterceptor,
} from "./interceptors";
import {
  API_SOURCE_ONE,
  API_SOURCE_TWO,
  KEY_SOURCE_ONE,
  KEY_SOURCE_TWO,
} from "../../config";

const createApiInstance = (baseUrl: string, key: string, nameKey: string) => {
  const axiosRequestConfig = {
    baseURL: baseUrl,
  };
  const api: AxiosInstance = axios.create(axiosRequestConfig);
  api.interceptors.request.use((config) =>
    requestInterceptor(config, key, nameKey)
  );
  api.interceptors.response.use(successInterceptor, errorInterceptor);
  return api;
};

const apiSourceOne = createApiInstance(
  API_SOURCE_ONE,
  KEY_SOURCE_ONE,
  "apiKey"
);
const apiSourceTwo = createApiInstance(
  API_SOURCE_TWO,
  KEY_SOURCE_TWO,
  "api-key"
);

export { apiSourceOne, apiSourceTwo };
