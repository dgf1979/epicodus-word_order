"use strict";


//jQuery
$( document ).ready(function() {

    $("form.words_to_count").submit(function(event) {
      var input = $("#input_text").val();

      var result = toSorted(orderWords(input));

      var ul = $("#word_list")
      ul.empty();

      for (var i = 0; i < result.length; i++) {
        ul.append("<li>" + result[i][1] + " instances of '" + result[i][0]  + "'</li>");
      }

      $(".results").show();

      event.preventDefault();
    });




});

//raw js
var orderWords = function(string) {
  var stringItems = cleanSentence(string);

  var words = Object.create(Object.prototype);

  for (var i = 0; i < stringItems.length; i++) {
    if (words.hasOwnProperty(stringItems[i])) {
      words[stringItems[i]] = words[stringItems[i]] + 1
    } else {
      words[stringItems[i]] = 1
    }
  };
  return words;
};

var toSorted = function(wordObj) {
  var sortable = [];
  for (var property in wordObj) {
    sortable.push([property, wordObj[property]]);
  }

  sortable.sort(function(a, b) { return b[1] - a[1]; });

  return sortable;
}

var cleanSentence = function(string) {
  var punctuationRegex = new RegExp('[^\\w\\s]','g');
  string = string.replace(punctuationRegex, '').toLowerCase();

  var regex = new RegExp('(\\w+)', 'g');
  var words = string.match(regex);
  return words;
};
