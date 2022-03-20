import axios, { AxiosRequestConfig } from 'axios';
import { parseCookies } from 'nookies';

export function getAPIClient(ctx?: any) {
    const { 'enchanteauth.token': token } = parseCookies(ctx);

    const api = axios.create({
        baseURL:
        process.env.NODE_ENV === 'development'
            ? process.env.NEXT_PUBLIC_ENCHANTE_HOST_DEV
            : process.env.NEXT_PUBLIC_ENCHANTE_HOST_PROD, 
    });

    api.interceptors.request.use(async (config) => {
        if (config.headers === undefined) {
            config.headers = {};
        }
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    });


    return api;
}