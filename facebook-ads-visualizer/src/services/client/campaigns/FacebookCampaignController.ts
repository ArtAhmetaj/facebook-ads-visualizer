import CampaignController from "@/services/client/campaigns/campaign-controller";
import CampaignResponse, {
  campaignFields
} from "@/services/client/campaigns/campaign-response";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import facebookCampaignInstance from "@/services/client/campaigns/campain-axios-instance";
import FacebookApiException from "@/services/client/campaigns/FacebookApiException";
import destructureObjectForQueryparameter from "@/utils/http-req-res-utils";

export class FacebookCampaignController implements CampaignController {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getAllCampaigns(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fields: campaignFields[] = [
      "campaign_id",
      "campaign_name",
      "impressions",
      "cpc"
    ]
  ): Promise<CampaignResponse> {
    throw new Error("not Implemented");
  }

  async getAllCampaignsByRange(
    startDate: Date,
    endDate: Date,
    fields: campaignFields[] = [
      "campaign_id",
      "campaign_name",
      "impressions",
      "cpc"
    ]
  ): Promise<CampaignResponse> {
    try {
      const axiosRequestArgs: AxiosRequestConfig = {
        url:
          facebookCampaignInstance.defaults.baseURL + "/act_25064918/insights",
        params: {
          fields: fields.join(","),
          level: "campaign",
          time_range: {
            since: startDate.toLocaleDateString("en-CA"),
            until: endDate.toLocaleDateString("en-CA")
          },
          access_token: process.env.VUE_APP_FACEBOOK_TOKEN
        },
        paramsSerializer: (query) => {
          return Object.entries(query)
            .map(([key, value], i) => {
              if (Array.isArray(value))
                return `${key}=${value.join("&" + key + "=")}`;
              if (value instanceof Object)
                return destructureObjectForQueryparameter(
                  value as Record<string, string>,
                  key
                );
              return `${key}=${value}`;
            })
            .join("&");
        }
      };
      const result = await axios.request(axiosRequestArgs);
      return result.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        const error = e as AxiosError;
        throw new FacebookApiException(error.status, error.message);
      }
      throw e;
    }
  }
}
console.log(facebookCampaignInstance.interceptors);
export default new FacebookCampaignController(facebookCampaignInstance);
