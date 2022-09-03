import CampaignController from "@/services/client/campaigns/campaign-controller";
import {
  Campaign,
  campaignFields, CampaignResponse
} from "@/services/client/campaigns/campaign-response";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import facebookCampaignInstance from "@/services/client/campaigns/campain-axios-instance";
import FacebookApiException from "@/services/client/campaigns/FacebookApiException";
import parseQueryParams from "@/utils/http-req-res-utils";

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
  ): Promise<Campaign[]> {
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
  ): Promise<Campaign[]> {
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
        paramsSerializer: parseQueryParams
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

  async getAllCampaignsByRangeGroupedByDuration(
    startDate: Date,
    endDate: Date,
    durationInDays: number,
    fields: campaignFields[] = [
      "campaign_id",
      "campaign_name",
      "impressions",
      "cpc"
    ]
  ): Promise<Campaign[]> {
    try {
      const campaigns = [];
      const axiosRequestArgs: AxiosRequestConfig = {
        url:
          facebookCampaignInstance.defaults.baseURL + "/act_25064918/insights",
        params: {
          fields: fields.join(","),
          level: "campaign",
          time_range: {
            since: startDate.toLocaleDateString("en-CA"),
            until: endDate.toLocaleDateString("en-CA"),
          },
          time_increment: durationInDays,
          access_token: process.env.VUE_APP_FACEBOOK_TOKEN
        },
        paramsSerializer: parseQueryParams
      };
      const result = await axios.request(axiosRequestArgs);
      let campaignResponse: CampaignResponse = result.data;
      campaigns.push(...campaignResponse.data);
      while (campaignResponse.paging.next) {
        const requestResponse = await axios.get(campaignResponse.paging.next);
        campaigns.push(...requestResponse.data.data);
        campaignResponse = requestResponse.data;
      }
      return campaigns;
    } catch (e) {
      if (e instanceof AxiosError) {
        const error = e as AxiosError;
        throw new FacebookApiException(error.status, error.message);
      }
      throw e;
    }
  }
}

export default new FacebookCampaignController(facebookCampaignInstance);
