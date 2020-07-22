'use strict';
(function () {
  var fireballSize = 22;
  var wizardWidth = 70;
  var wizardSpeed = 3;

  function getWizardHeight() {
    return 1.337 * wizardWidth;
  }

  function getFireballSpeed(isWind) {
    return (isWind ? 5 : 2);
  }

  function getWizardX(gameFieldWidth) {
    return (gameFieldWidth - wizardWidth) / 2;
  }

  function getWizardY(gameFieldHeight) {
    return gameFieldHeight / 3;
  }

  window.fireballSize = fireballSize;
  window.wizardWidth = wizardWidth;
  window.wizardSpeed = wizardSpeed;
  window.getWizardHeight = getWizardHeight;
  window.getFireballSpeed = getFireballSpeed;
  window.getWizardX = getWizardX;
  window.getWizardY = getWizardY;

})();
