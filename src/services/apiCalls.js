import axios from 'axios'

export const axiosWeatherInstance = (url, params) => axios.create({
    baseURL: url,
    params: params
});


export const axiosGeoDataInstance = (url, params) => axios.create({
    baseURL: url,
    params: {
        q: `${params.lat}+${params.lon}`
    }
});

export const axiosReverseGeoDataInstance = (url, params) => axios.create({
    baseURL: url,
    params: {
        q: params
    }
});