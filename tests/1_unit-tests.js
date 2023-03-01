const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
let translator = new Translator();

suite("Unit Tests", () => {
  suite("Translate String to British English", function () {
    test("Translate Mangoes are my favorite fruit. to British English, should change favorite to favourite", function (done) {
      assert.equal(
        translator.toBritishEnglish("Mangoes are my favorite fruit.")[0],
        "Mangoes are my favourite fruit."
      );
      done();
    });

    test("Translate I ate yogurt for breakfast. to British English, should change yogurt to yoghurt", function (done) {
      assert.equal(
        translator.toBritishEnglish("I ate yogurt for breakfast.")[0],
        "I ate yoghurt for breakfast."
      );
      done();
    });

    test("Translate We had a party at my friend's condo. to British English, should change condo to flat", function (done) {
      assert.equal(
        translator.toBritishEnglish("We had a party at my friend's condo.")[0],
        "We had a party at my friend's flat."
      );
      done();
    });

    test("Translate Can you toss this in the trashcan for me? to British English, should change trashcan to bin", function (done) {
      assert.equal(
        translator.toBritishEnglish(
          "Can you toss this in the trashcan for me?"
        )[0],
        "Can you toss this in the bin for me?"
      );
      done();
    });

    test("Translate The parking lot was full. to British English, should change parking lot to car park", function (done) {
      assert.equal(
        translator.toBritishEnglish("The parking lot was full.")[0],
        "The car park was full."
      );
      done();
    });

    test("Translate Like a high tech Rube Goldberg machine. to British English, should change Rube Goldberg machine to Heath Robinson device", function (done) {
      assert.equal(
        translator.toBritishEnglish(
          "Like a high tech Rube Goldberg machine."
        )[0],
        "Like a high tech Heath Robinson device."
      );
      done();
    });

    test("Translate To play hooky means to skip class or work. to British English, should change play hooky to bunk off", function (done) {
      assert.equal(
        translator.toBritishEnglish(
          "To play hooky means to skip class or work."
        )[0],
        "To bunk off means to skip class or work."
      );
      done();
    });

    test("Translate No Mr. Bond, I expect you to die. to British English, should change Mr. to Mr", function (done) {
      assert.equal(
        translator.toBritishEnglish("No Mr. Bond, I expect you to die.")[0],
        "No Mr Bond, I expect you to die."
      );
      done();
    });

    test("Translate Dr. Grosh will see you now. to British English, should change Dr. to Dr", function (done) {
      assert.equal(
        translator.toBritishEnglish("Dr. Grosh will see you now.")[0],
        "Dr Grosh will see you now."
      );
      done();
    });

    test("Translate Lunch is at 12:15 today. to British English, should change 12:15 to 12.15", function (done) {
      assert.equal(
        translator.toBritishEnglish("Lunch is at 12:15 today.")[0],
        "Lunch is at 12.15 today."
      );
      done();
    });
  });

  suite("Translate to American English", function () {
    test("Translate We watched the footie match for a while. to American English, should change footie to soccer", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "We watched the footie match for a while."
        )[0],
        "We watched the soccer match for a while."
      );
      done();
    });

    test("Translate Paracetamol takes up to an hour to work. to American English, should change Paracetamol to Tylenol", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "Paracetamol takes up to an hour to work."
        )[0],
        "Tylenol takes up to an hour to work."
      );
      done();
    });

    test("Translate First, caramelise the onions. to American English, should change camelise to carmelize", function (done) {
      assert.equal(
        translator.toAmericanEnglish("First, caramelise the onions.")[0],
        "First, caramelize the onions."
      );
      done();
    });

    test("Translate I spent the bank holiday at the funfair. to American English, should change bank to public and funfair to carnival", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "I spent the bank holiday at the funfair."
        )[0],
        "I spent the public holiday at the carnival."
      );
      done();
    });

    test("Translate I had a bicky then went to the chippy. to American English, should change bicky to cookie and chippy to fish-and-chip shop", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "I had a bicky then went to the chippy."
        )[0],
        "I had a cookie then went to the fish-and-chip shop."
      );
      done();
    });

    test("Translate I've just got bits and bobs in my bum bag. to American English, should change bits and bobs to odds and ends and bum bag to fanny pack", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "I've just got bits and bobs in my bum bag."
        )[0],
        "I've just got odds and ends in my fanny pack."
      );
      done();
    });

    test("Translate The car boot sale at Boxted Airfield was called off. to American English, should change car boot sale to swap meet", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "The car boot sale at Boxted Airfield was called off."
        )[0],
        "The swap meet at Boxted Airfield was called off."
      );
      done();
    });

    test("Translate Have you met Mrs Kalyani? to American English, should change Mrs to Mrs.", function (done) {
      assert.equal(
        translator.toAmericanEnglish("Have you met Mrs Kalyani?")[0],
        "Have you met Mrs. Kalyani?"
      );
      done();
    });

    test("Translate Prof Joyner of King's College, London. to American English, should change prof to prof.", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "Prof Joyner of King's College, London."
        )[0],
        "Prof. Joyner of King's College, London."
      );
      done();
    });

    test("Translate Tea time is usually around 4 or 4.30. to American English, should change 4.30 to 4:30", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "Tea time is usually around 4 or 4.30."
        )[0],
        "Tea time is usually around 4 or 4:30."
      );
      done();
    });
  });

  suite("Highlight Translation", function () {
    test("Highlight translation in Mangoes are my favorite fruit. Should add span to change", function (done) {
      assert.equal(
        translator.toBritishEnglish("Mangoes are my favorite fruit.")[1],
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
      );
      done();
    });

    test("Highlight translation in I ate yogurt for breakfast. Should add span to change", function (done) {
      assert.equal(
        translator.toBritishEnglish("I ate yogurt for breakfast.")[1],
        'I ate <span class="highlight">yoghurt</span> for breakfast.'
      );
      done();
    });
    test("Highlight translation in We watched the footie match for a while. Should add span to change", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "We watched the footie match for a while."
        )[1],
        'We watched the <span class="highlight">soccer</span> match for a while.'
      );
      done();
    });
    test("Highlight translation in Paracetamol takes up to an hour to work. Should add span to change", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "Paracetamol takes up to an hour to work."
        )[1],
        '<span class="highlight">Tylenol</span> takes up to an hour to work.'
      );
      done();
    });
  });
});
