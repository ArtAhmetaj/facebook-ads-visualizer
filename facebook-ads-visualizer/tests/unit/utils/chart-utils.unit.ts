import { assert } from "chai";
import { divideLabelIfMultiLine } from "@/utils/chart-utils";
// very simple function, but suite could be needed later
describe("Chart utils suite", () => {
  it("Map text with spaces into arrays ", () => {
    const text = "art ahmetaj";
    assert.deepEqual(divideLabelIfMultiLine(text), ["art", "ahmetaj"]);
  });

  it("Do not map anything on connected text strings", () => {
    const text = "causalytics";
    assert.deepEqual(divideLabelIfMultiLine(text), text);
  });
});
