import { Campaign } from "@/services/client/campaigns/campaign-response";
//TODO: could be service, it is too specific and doesn't contain depoendencies so it's here for the moment
export function groupAllCampaignsBasedOnDuration(
  campaigns: Campaign[]
): Record<string, Record<string, number>> {
  const groupedCampaigns: Record<string, Record<string, number>> = {};
  for (const campaign of campaigns) {
    if (!groupedCampaigns[campaign.date_start])
      groupedCampaigns[campaign.date_start] = {};
    groupedCampaigns[campaign.date_start][campaign.campaign_name] = parseFloat(
      campaign.cpc
    );
  }

  return groupedCampaigns;
}

export function getCampaignMapFromNames(
  campaignNames: string[]
): Record<string, number[]> {
  const campaignMapping: Record<string, number[]> = {};
  for (const name of campaignNames) {
    campaignMapping[name] = [];
  }
  return campaignMapping;
}

