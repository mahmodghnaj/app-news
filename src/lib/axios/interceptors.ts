import {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

export const requestInterceptor = async (
  config: InternalAxiosRequestConfig,
  key: string,
  nameKey: string
): Promise<InternalAxiosRequestConfig> => {
  config.params[nameKey] = key;
  return config;
};

export const successInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

export const errorInterceptor = async (error: AxiosError): Promise<void> => {
  return await Promise.reject(error);
};
