"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
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
  var regex = new RegExp('[^\\w\\s]','g');
  string = string.replace(regex, '').toLowerCase();
  var words = string.split(" ");

  return words;
};
