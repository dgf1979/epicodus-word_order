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
      Object.defineProperty(words, stringItems[i], {value: 1, writable: true, enumerable: true, configurable: true});
    }
  };
  return words;
};

var cleanSentence = function(string) {
  var regex = new RegExp('[^\\w\\s]','g');
  string = string.replace(regex, '').toLowerCase();
  var words = string.split(" ");

  return words;
};
