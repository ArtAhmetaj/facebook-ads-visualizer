export type campaignFields =
  | "campaign_id"
  | "campaign_name"
  | "impressions"
  | "cpc";

interface Campaign {
  campaign_id: string;
  campaign_name: string;
  impressions: string;
  cpc: string;
}

interface Cursor {
  cursor: {
    before: string;
    after: string;
  };
}

export default interface CampaignResponse {
  data: Campaign[];
  paging: Cursor;
}
