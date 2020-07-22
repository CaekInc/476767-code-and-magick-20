'use strict';
(function () {
  window.util = {

    randomInteger: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomElementFrom: function (array) {
      return array[window.util.randomInteger(0, array.length - 1)];
    },
    index: 0,
    changeItem: function (array) {
      window.util.index++;
      if (window.util.index >= array.length) {
        window.util.index = 0;
      }
      return array[window.util.index];
    }
  };
}());
// может быть сделать colorize
