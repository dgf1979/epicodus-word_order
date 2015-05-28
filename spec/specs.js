describe('cleanSentence', function() {
  it("will return an array of words, downcased and punctuation stripped", function() {
    expect(cleanSentence("It's five o'clock somewhere!")).to.eql(["its", "five", "oclock", "somewhere"]);
  });
});


describe('orderWords', function() {
  it("returns an object with a key that resolves to a word, with a value counting that word ", function() {
    expect(orderWords("planets planets").planets).to.eql(2);
  });
});
