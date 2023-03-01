const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
let translator = new Translator();

suite("Unit Tests", () => {
  suite("Translate to British English", function () {
    test("Translate Mangoes are my favorite fruit. to British English", function (done) {
      assert.equal(
        translator.toBritishEnglish("Mangoes are my favorite fruit.")[0],
        "Mangoes are my favourite fruit."
      );
      done();
    });
  });
});
