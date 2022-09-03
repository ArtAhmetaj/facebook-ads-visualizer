export type campaignFields =
  | "campaign_id"
  | "campaign_name"
  | "impressions"
  | "cpc";

export interface Campaign {
  campaign_id: string;
  campaign_name: string;
  impressions: string;
  cpc: string;
  date_start: string;
  date_end: string;
}

interface Cursor {
  cursor: {
    before: string;
    after: string;
  };
  before?: string;
  next?: string;
}

export interface CampaignResponse {
  data: Campaign[];
  paging: Cursor;
}
