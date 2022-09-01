import * as sinon from "ts-sinon";
import { AxiosError, AxiosInstance } from "axios";
import { FacebookCampaignController } from "@/services/client/campaigns/FacebookCampaignController";
import { assert, expect } from "chai";
import CampaignResponse from "@/services/client/campaigns/campaign-response";

describe("Facebook campaign controller", () => {
  let axiosStub: sinon.StubbedInstance<AxiosInstance>;

  before(() => {
    axiosStub = sinon.stubInterface<AxiosInstance>();
  });

  it("Should get the api response", async () => {
    const testCampaignResponse: CampaignResponse = {
      data: [],
      paging: {
        cursor: {
          before: "",
          after: "",
        },
      },
    };
    axiosStub.request.returns(Promise.resolve(testCampaignResponse));

    const facebookCampaignController = new FacebookCampaignController(
      axiosStub
    );
    const response = await facebookCampaignController.getAllCampaignsByRange(
      new Date(),
      new Date()
    );
    assert.equal(response, testCampaignResponse);
  });

  it("Should throw a facebook api exception", async () => {
    const axiosError: AxiosError = {
      // eslint-disable-next-line @typescript-eslint/ban-types
      toJSON(): object {
        return {};
      },
      config: {},
      isAxiosError: false,
      message: "",
      name: "",
      response: undefined,
    };
    axiosStub.request.returns(Promise.reject(axiosError));

    const facebookCampaignController = new FacebookCampaignController(
      axiosStub
    );

    expect(async () => {
      await facebookCampaignController.getAllCampaignsByRange(
        new Date(),
        new Date()
      );
    }, "Throws Facebook api exception").to.throw();
  });
});
