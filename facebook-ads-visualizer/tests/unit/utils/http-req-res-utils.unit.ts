import parseQueryParams from "@/utils/http-req-res-utils";
import { assert } from "chai";

describe("Http Req/Res Util Suite", () => {
  it("Map correct query parameter response ", () => {
    const testObject = { value1: "test", value2: "test2" };

    const queriedParams = parseQueryParams(testObject);
    assert.equal(
      queriedParams,
      "value1=test&value2=test2"
    );
  });

  it("Map empty object to empty string", () => {
    const queriedParams = parseQueryParams({});
    assert.equal(
      queriedParams,
      ""
    );
  });
});
