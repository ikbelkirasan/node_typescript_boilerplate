import should from "should";
import { add } from "../src/app";

describe("app", () => {
  it("should add 4 + 6", async () => {
    const result = add(4, 6);
    should(result).equal(10);
  });
});
