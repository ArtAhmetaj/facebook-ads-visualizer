import axios, { AxiosRequestConfig } from "axios";

const facebookCampaignInstance = axios.create({
  timeout: 10000,
  baseURL: process.env.VUE_APP_BASE_FACEBOOK_URL,
  params: {},
});

facebookCampaignInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    //TODO: check on why this value is not being sent at times
    config.params["access_token"] = process.env.VUE_APP_FACEBOOK_ACCESS_TOKEN;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default facebookCampaignInstance;
