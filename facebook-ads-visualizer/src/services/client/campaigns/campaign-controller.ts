import CampaignResponse, {
  campaignFields,
} from "@/services/client/campaigns/campaign-response";

export default interface CampaignController {
  getAllCampaigns(fields: campaignFields[]): Promise<CampaignResponse>;

  getAllCampaignsByRange(
    startDate: Date,
    endDate: Date,
    fields?: campaignFields[]
  ): Promise<CampaignResponse>;
}
