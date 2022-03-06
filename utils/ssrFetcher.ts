import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { GLOOMY_TOKEN } from '@/constants/index';

type ApiData<T> = {
  result: T;
  message: string | number;
  responseTime: string | number;
  code?: number | boolean;
};

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RequestProps = {
  method?: RequestMethod;
  ctx: GetServerSidePropsContext;
  url: string;
  config?: any;
};

type ApiSuccess<T> = ApiData<T>;
type ApiFail<T> = ApiData<T>;

type ApiReturn<T> = ApiSuccess<T> | ApiFail<T>;
type FetchReturnType<T> = Promise<ApiReturn<T>>;

export const fetcherSSR = <T>({ method = 'GET', url = '/', config = {}, ctx }: RequestProps) => {
  const apiURL = `${url}`;
  return (data?: any): FetchReturnType<T> => {
    return new Promise((resolve) => {
      const token = ctx.req.cookies[GLOOMY_TOKEN] ?? '';
      const generalConfig = token
        ? {
            headers: {
              referer: ctx.req.headers.referer ?? '',
              userAgent: ctx.req.headers['user-agent'],
              Authorization: `Bearer ${token}`,
              ...config,
            },
          }
        : {
            referer: ctx.req.headers.referer ?? '',
            userAgent: ctx.req.headers['user-agent'],
            ...config,
          };
      if (method === 'GET') {
        axios
          .get(apiURL, generalConfig)
          .then((res) => resolve(res.data))
          .catch(({ response }) => {
            resolve(response.data);
          });
      } else if (method === 'POST') {
        axios
          .post(apiURL, data, generalConfig)
          .then((res) => {
            resolve(res.data);
          })
          .catch(({ response }) => {
            resolve(response.data);
          });
      } else if (method === 'PUT') {
        axios
          .put(apiURL, data, generalConfig)
          .then((res) => resolve(res.data))
          .catch(({ response }) => {
            resolve(response.data);
          });
      } else if (method === 'DELETE') {
        axios
          .delete(apiURL, generalConfig)
          .then((res) => resolve(res.data))
          .catch(({ response }) => {
            resolve(response.data);
          });
      }
    });
  };
};
