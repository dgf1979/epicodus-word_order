describe('cleanSentence', function() {
  it("will return an array of words, downcased and punctuation stripped", function() {
    expect(cleanSentence("It's five o'clock somewhere!")).to.eql(["its", "five", "oclock", "somewhere"]);
  });
});


describe('orderWords', function() {
  it("returns an object with a key that resolves to a word, with a value counting that word ", function() {
    expect(orderWords("planets planets").planets).to.eql(2);
  });

  it("returns an object with a key that resolves to each word in the string, with a value counting each word ", function() {
    expect(orderWords("planets planets words words words word hello hello")).to.eql({words: 3, word: 1, hello: 2, planets: 2});
  });
});

describe('toSorted', function() {
  it("sorts a word object into any array ordered from highest to lowest word counts", function() {
    var sampleWordObj = orderWords("planets planets words words words word hello hello");
    expect(toSorted(sampleWordObj).toString()).to.eql("words,3,planets,2,hello,2,word,1");
  });

});
