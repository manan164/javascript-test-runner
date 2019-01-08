var expect = require("chai").expect
describe(" Test runner", () => {
    it ("works fine ", () => {
        const given = "work"
        const notgiven = "work";
        expect(given).to.equal(notgiven);
    });
}); 