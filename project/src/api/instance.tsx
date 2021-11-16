import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const { REACT_APP_API_URL } = process.env;

let headers = {}

const refreshAccessToken = () => Math.random().toString(36);

const config: AxiosRequestConfig = {
    baseURL: REACT_APP_API_URL,
    headers : {
    }
};

const axiosInstance: AxiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers = {
                authorization: `Bearer ${token}`
            };
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const config = error.config;
        if (error.response.status === 401 && !config._retry) {
            config._retry = true;
            localStorage.setItem("token", await refreshAccessToken());

            return axios(config);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;