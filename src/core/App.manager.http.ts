import axios, { AxiosError, AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios'

import { getLocalData } from './App.manager.storage'

// interceptors
const onRequestInterceptSuccess = (req: AxiosRequestConfig): AxiosRequestConfig => {
  const token = getLocalData('AUTH_TOKEN')
  if (token && req.headers) req.headers.Authorization = `Bearer ${token}`
  return req
}
const onRequestInterceptFailure = (err: AxiosError): AxiosPromise => {
  return Promise.reject(err)
}
const onResponseInterceptSuccess = (res: AxiosResponse): AxiosResponse => {
  return res
}
const onResponseInterceptFailure = (err: AxiosError): AxiosPromise => {
  return Promise.reject(err)
}

// instance for default
const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_MAIN_DOMAIN,
  //FIXME: set withCredentials true after finish the server setting
  withCredentials: false,
  headers: { 'Content-Type': 'application/json' },
})

instance.interceptors.request.use(onRequestInterceptSuccess, onRequestInterceptFailure)
instance.interceptors.response.use(onResponseInterceptSuccess, onResponseInterceptFailure)

export const makeRequest = (config: AxiosRequestConfig) => instance(config)
