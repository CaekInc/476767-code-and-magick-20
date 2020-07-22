'use strict';
(function () {

  var movableElement = document.querySelector('.setup');
  var handleElement = document.querySelector('.upload');

  var onHandleMouseDown = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      movableElement.style.top = (movableElement.offsetTop - shift.y) + 'px';
      movableElement.style.left = (movableElement.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          handleElement.removeEventListener('click', onClickPreventDefault);
        };
        handleElement.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  window.dragAndDrop = {
    init: function () {
      handleElement.addEventListener('mousedown', onHandleMouseDown);
    },
    destroy: function () {
      handleElement.removeEventListener('mousedown', onHandleMouseDown);
    }
  };

})();
