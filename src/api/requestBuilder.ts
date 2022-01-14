import axios, { 
    AxiosError, 
    AxiosPromise, 
    AxiosRequestConfig, 
    AxiosResponse 
} from "axios";
import { baseUrl } from "./config";
import { RequestOptions } from "./index";

export type HTTPMethod =
    'get'
    | 'post'
    | 'delete'
    | 'put'
    | 'patch';

export interface JsonBody {
    [key: string]: any;
}

export interface Request {
    method: HTTPMethod;
    url: string;
    body?: JsonBody;
}

const apiList = {
    init: baseUrl(),
};


export const defaultResponse: Partial<AxiosError['response']> = {
    status: 500,
    data: {
        error: 'Server error',
    },
};

export const formatError = (responseError: AxiosError) => {
    const response = responseError.response || defaultResponse;
    const errors = response.data && response.data.error ? response.data.error : '';
    return {
        code: response.status,
        message: errors,
        data: response.data,
    };
};

export const makeRequest = async ({ body, url, method }: Request, { headers, apiVersion, withHeaders}: RequestOptions) => {
    const contentType = body instanceof FormData
        ? 'multipart/form-data'
        : 'application/json';

    const defaultHeaders = {
        'content-type': contentType,
    };

    const requestConfig: AxiosRequestConfig = {
        baseURL: apiList[apiVersion],
        data: body,
        headers: { ...headers, ...defaultHeaders } as any,
        method,
        url,
        withCredentials: true,
    };

    return new Promise((resolve, reject) => {
        const axiosRequest: AxiosPromise = axios(requestConfig);
        axiosRequest
            .then((response: AxiosResponse) => {
                if (withHeaders) {
                    resolve(response);
                } else {
                    resolve(response.data);
                }
            })
            .catch((error: AxiosError) => {
                reject(formatError(error));
            });
    })
}
