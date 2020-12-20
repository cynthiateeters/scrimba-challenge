import { domainType } from "../src/index"; //using the ES6 modules

/**
 * Test Suite
 */
describe("domainType()", () => {
  it("returns list of domain types", () => {
    // arrange
    const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];

    // act
    const result = domainType(domains);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual([
      "organization",
      "commercial",
      "network",
      "information",
    ]);
  });
});
