import axios, { AxiosRequestConfig } from "axios";

const facebookCampaignInstance = axios.create({
  timeout: 10000,
  baseURL: "https://graph.facebook.com",
});

facebookCampaignInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    config.params["access_token"] = process.env.FACEBOOK_ACCESS_TOKEN;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default facebookCampaignInstance;
