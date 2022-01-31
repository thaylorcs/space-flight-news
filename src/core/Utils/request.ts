import axios, { Method } from "axios";

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3';

type RequestParams = {
    method?: Method;
    url: string;
    data?: object;
    params?: object;
}

export const makeRequest = ({ method = 'GET', url, data, params }: RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
        params
    });
}