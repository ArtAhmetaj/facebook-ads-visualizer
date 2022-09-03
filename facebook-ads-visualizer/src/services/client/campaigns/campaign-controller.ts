import  {
  Campaign,
  campaignFields
} from "@/services/client/campaigns/campaign-response";

export default interface CampaignController {
  getAllCampaigns(fields: campaignFields[]): Promise<Campaign[]>;

  getAllCampaignsByRange(
    startDate: Date,
    endDate: Date,
    fields?: campaignFields[]
  ): Promise<Campaign[]>;

  getAllCampaignsByRangeGroupedByDuration(
    startDate: Date,
    endDate: Date,
    durationInDays: number,
    fields?: campaignFields[]
  ): Promise<Campaign[]>;
}
