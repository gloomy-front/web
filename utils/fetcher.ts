import { GetServerSidePropsContext } from 'next';
import axios from 'axios';

type ApiData = {
  data: any;
  message: string | number;
  status: string | number;
  errorCode?: string | boolean;
}

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RequestProps = {
  method?: RequestMethod;
  ctx: GetServerSidePropsContext;
  url: string;
  config?: any;
}

type ApiSuccess = ApiData
type ApiFail = ApiData

interface ErrorCode {
  errorCode: string | boolean;
  data?: any;
}

export type ApiReturn = ApiSuccess | ApiFail | ErrorCode
export type FetchReturnType = Promise<ApiReturn>

export const fetcherSSR = ({ method = 'GET', url = '/', config = {}, ctx }: RequestProps) => {
  const apiURL = `${url}`;
  return (data?: any): FetchReturnType => {
    return new Promise(resolve => {
      const token = '';
      const generalConfig = token ? {
        headers: {
          referer: ctx.req.headers.referer ?? '',
          userAgent: ctx.req.headers['user-agent'],
          Authorization: `Bearer ${token}`,
          ...config
        }
      } : {
        referer: ctx.req.headers.referer ?? '',
        userAgent: ctx.req.headers['user-agent'],
        ...config
      };
      if (method === 'GET') {
        axios.get(apiURL, generalConfig)
          .then((res) => resolve(res.data))
          .catch(({ response }) => {
            resolve({ errorCode: response?.status ?? 'unknown' });
          });
      } else if (method === 'POST') {
        axios.post(apiURL, data, generalConfig)
          .then((res) => {
            resolve(res.data);
          })
          .catch(({ response }) => {
            resolve({ errorCode: response?.status ?? 'unknown' });
          });
      } else if (method === 'PUT') {
        axios.put(apiURL, data, generalConfig)
          .then((res) => resolve(res.data))
          .catch(({ response }) => {
            resolve({ errorCode: response?.status ?? 'unknown' });
          });
      } else if (method === 'DELETE') {
        axios.delete(apiURL, generalConfig)
          .then((res) => resolve(res.data))
          .catch(({ response }) => {
            resolve({ errorCode: response?.status ?? 'unknown' });
          });
      }
    });
  };
};