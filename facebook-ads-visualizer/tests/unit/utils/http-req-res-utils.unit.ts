import destructureObjectForQueryparameter from "@/utils/http-req-res-utils";
import { assert } from "chai";

describe("Http Req/Res Util Suite", () => {
  it("Map correct query parameter response ", () => {
    const testObject = { value1: "test", value2: "test2" };
    const queryParam = destructureObjectForQueryparameter(
      testObject,
      "testObject"
    );
    assert.equal(
      queryParam,
      "testObject[value1]=test&testObject[value2]=test2"
    );
  });

  it("Map empty object to empty string", () => {
    const queryParam = destructureObjectForQueryparameter({}, "");
    assert.equal(queryParam, "");
  });
});
