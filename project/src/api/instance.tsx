/* eslint-disable import/no-anonymous-default-export */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import dotenv from 'dotenv';
import { request } from 'http';
dotenv.config();
const { REACT_APP_API_URL } = process.env;

let headers = {}

const refreshAccessToken = () => Math.random().toString(36);

const config: AxiosRequestConfig = {
    baseURL: REACT_APP_API_URL,
    headers: {
    }
};

const axiosInstance: AxiosInstance = axios.create(config);




export default axiosInstance;

