import axios from 'axios';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RequestProps = {
  method?: RequestMethod;
  url: string;
  config?: any;
  apiUrl?: string;
};

export type ApiData<T> = {
  data: T;
  message: string | number;
  status: string | number;
};

export type FetchReturnType = Promise<{
  data: any;
  message: string | number;
  status: string | number;
}>;

// @ts-ignore
export const fetcher = async<T> (url: string): ApiData<T> => {
  const authToken = '';
  const config = authToken ? { headers: { Authorization: `Bearer ${authToken}` }} : { headers: {}};

  try {
    const res = await axios.get(url, config);
    return res.data;
  } catch (e) {
    if (e.response.status === 401) {
      console.log('Your token invalid');
    }
    throw e;
  }
};

export const useFetch = ({ method = 'GET', url = '/', config = {}, apiUrl = API_URL }: RequestProps) => {
  const apiURL = `${apiUrl}${url}`;

  return (data?: any): FetchReturnType => {
    return new Promise((resolve, reject) => {
      const authToken = '';

      const generalConfig = authToken
        ? {
          headers: { Authorization: `Bearer ${authToken}`, ...config },
        }
        : {};

      if (method === 'GET') {
        axios
          .get(apiURL, generalConfig)
          .then((res) => resolve(res.data))
          .catch(({ response }) => {
            if (response?.status === 500) {
              response.data.message = '문제가 발생했습니다.</br>문의 남겨주세요.';
            }

            reject(response?.data);
          });
      } else if (method === 'POST') {
        axios
          .post(apiURL, data, generalConfig)
          .then((res) => {
            resolve(res.data);
          })
          .catch(({ response }) => {
            if (response?.status === 500) {
              response.data.message = '문제가 발생했습니다.</br>문의 남겨주세요.';
            }

            reject(response?.data);
          });
      } else if (method === 'PUT') {
        axios
          .put(apiURL, data, generalConfig)
          .then((res) => resolve(res.data))
          .catch(({ response }) => {
            if (response?.status === 500) {
              response.data.message = '문제가 발생했습니다.</br>문의 남겨주세요.';
            }

            reject(response?.data);
          });
      } else if (method === 'DELETE') {
        axios
          .delete(apiURL, generalConfig)
          .then((res) => resolve(res.data))
          .catch(({ response }) => {
            if (response?.status === 500) {
              response.data.message = '문제가 발생했습니다.</br>문의 남겨주세요.';
            }

            reject(response?.data);
          });
      }
    });
  };
};