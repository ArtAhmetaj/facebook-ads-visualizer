import CampaignController from "@/services/client/campaigns/campaign-controller";
import CampaignResponse, {
  campaignFields,
} from "@/services/client/campaigns/campaign-response";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import facebookCampaignInstance from "@/services/client/campaigns/campain-axios-instance";
import FacebookApiException from "@/services/client/campaigns/FacebookApiException";

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
      "cpc",
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
      "cpc",
    ]
  ): Promise<CampaignResponse> {
    try {
      const axiosRequestArgs: AxiosRequestConfig = {
        url: "/act_25064918/insights",
        params: {
          fields: fields.join(","),
          level: "campaign",
          time_range: {
            since: startDate.toLocaleDateString(),
            until: endDate.toLocaleDateString(),
          },
        },
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

export default new FacebookCampaignController(facebookCampaignInstance);
