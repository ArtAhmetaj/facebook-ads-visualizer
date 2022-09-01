import axios from "axios";

const facebookCampaignInstance = axios.create({
  timeout: 10000,
  baseURL: "https://graph.facebook.com",
});

export default facebookCampaignInstance;
