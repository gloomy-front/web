import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL } from '@/constants/index';

export const STATUS_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  DUPLICATED: 409,
  INTERNAL_SERVER_ERROR: 500,
};

export type ApiData<T> = {
  data: T;
  message: string | number;
  status: string | number;
}

type ApiSuccess<T> = ApiData<T>
type ApiFail<T> = ApiData<T>

export type ApiReturn<T> = ApiSuccess<T> | ApiFail<T>

function checkAuthToken(reqConfig?: any): AxiosRequestConfig | void {
  // const authToken = Cookies.get(process.env.LOGIN_TOKEN_NAME as string) || '';
  const authToken = '';

  if (typeof window !== 'undefined' && !authToken) {
    window.location.replace('/');
  } else {
    const addedConfig = reqConfig ? reqConfig : {};
    return {
      headers: { Authorization: `Bearer ${authToken}`, ...addedConfig }
    };
  }
}

export const getWithToken = async <T>(url: string): Promise<ApiReturn<T>> => {
  const config = checkAuthToken() as AxiosRequestConfig;

  try {
    const { data: resData } = await axios.get<T, AxiosResponse<ApiReturn<T>>>(`${API_URL}${url}`, config);

    return resData;
  } catch (e) {
    // @ts-ignore
    const { response } = e;
    const { status } = response;

    if (status === STATUS_CODE.UNAUTHORIZED) {
      if (typeof window !== 'undefined') {
        window.location.replace('/');
      }
    }

    throw e;
  }
};

export const getWithoutToken = async <T>(url: string): Promise<ApiReturn<T>> => {
  try {
    const res = await axios.get<T, AxiosResponse<ApiReturn<T>>>(`${API_URL}${url}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const postWithToken = async <T>(url: string, data: T, reqConfig = {}): Promise<ApiReturn<T>> => {
  const config = checkAuthToken(reqConfig) as AxiosRequestConfig;

  try {
    const res = await axios.post<T, AxiosResponse<ApiReturn<T>>>(`${API_URL}${url}`, data, { ...config });
    return res.data;
  } catch (e) {
    // @ts-ignore
    const response = e.response as AxiosResponse<ApiReturn<T>>;
    const statusCode = response?.status ?? 400;

    if (response.status === STATUS_CODE.UNAUTHORIZED) {
      if (typeof window !== 'undefined') {
        window.location.replace('/');
      }
    }

    if (response.status === STATUS_CODE.INTERNAL_SERVER_ERROR) {
      if (response.data.message === 'token expired') {
        if (typeof window !== 'undefined') {
          window.location.replace('/');
        }
      }
    }

    throw { ...response.data, statusCode };
  }
};

export const postWithoutToken = async <T>(url: string, data: T): Promise<ApiReturn<T>> => {
  try {
    const res = await axios.post<T, AxiosResponse<ApiReturn<T>>>(`${API_URL}${url}`, data);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const putWithToken = async <T>(url: string, data: T): Promise<ApiReturn<T>> => {
  const config = checkAuthToken() as AxiosRequestConfig;

  try {
    const res = await axios.put<T, AxiosResponse<ApiReturn<T>>>(`${API_URL}${url}`, data, config);
    return res.data;
  } catch (e) {
    // @ts-ignore
    const response = e.response as AxiosResponse<ApiReturn<T>>;
    const statusCode = response?.status ?? 400;

    if (response.status === STATUS_CODE.UNAUTHORIZED) {
      if (typeof window !== 'undefined') {
        window.location.replace('/');
      }
    }

    if (response.status === STATUS_CODE.INTERNAL_SERVER_ERROR) {
      if (response.data.message === 'token expired') {
        if (typeof window !== 'undefined') {
          window.location.replace('/');
        }
      }
    }

    throw { ...response.data, statusCode };
  }
};

export const deleteWithToken = async <T>(url: string): Promise<ApiReturn<T>> => {
  const config = checkAuthToken() as AxiosRequestConfig;

  try {
    const res = await axios.delete<T, AxiosResponse<ApiReturn<T>>>(`${API_URL}${url}`, config);
    return res.data;
  } catch (e) {
    // @ts-ignore
    const response = e.response as AxiosResponse<ApiReturn<R>>;
    const statusCode = response?.status ?? 400;

    if (response.status === STATUS_CODE.UNAUTHORIZED) {
      if (typeof window !== 'undefined') {
        window.location.replace('/');
      }
    }

    if (response.status === STATUS_CODE.INTERNAL_SERVER_ERROR) {
      if (response.data.message === 'token expired') {
        if (typeof window !== 'undefined') {
          window.location.replace('/');
        }
      }
    }

    throw { ...response.data, statusCode };
  }
};
