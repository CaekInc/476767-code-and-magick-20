'use strict';
(function () {
  var setupOpenButton = document.querySelector('.setup-open');
  var setupCloseButton = document.querySelector('.setup-close');
  var setupBlock = document.querySelector('.setup');

  var userName = document.querySelector('.setup-user-name');
  var setupForm = document.querySelector('.setup-wizard-form');
  var submitSetupButton = document.querySelector('.setup-submit');

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  };

  var changeWizardCoat = function () {
    wizardCoat.style.fill = window.util.changeItem(window.wizardsData.WIZARD_COATS);
    coatColorInput.value = wizardCoat.style.fill;
  };

  var changeWizardEyes = function () {
    wizardEyes.style.fill = window.util.changeItem(window.wizardsData.WIZARD_EYES);
    eyesColorInput.value = wizardEyes.style.fill;
  };

  var changeWizardFireball = function () {
    wizardFireball.style.backgroundColor = window.util.changeItem(window.wizardsData.WIZARDS_FIREBALL_COLORS);
    fireballColorInput.value = wizardFireball.style.backgroundColor;
  };

  var openPopup = function () {
    setupBlock.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    wizardCoat.addEventListener('click', changeWizardCoat);
    wizardEyes.addEventListener('click', changeWizardEyes);
    wizardFireball.addEventListener('click', changeWizardFireball);
    window.dragAndDrop.init();
  };

  var closePopup = function () {
    setupBlock.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    changeWizardCoat.removeEventListener('click', changeWizardCoat);
    changeWizardEyes.removeEventListener('click', changeWizardEyes);
    changeWizardFireball.removeEventListener('click', changeWizardFireball);
    window.dragAndDrop.destroy();
  };

  setupOpenButton.addEventListener('click', function () {
    openPopup();
  });
  setupOpenButton.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupCloseButton.addEventListener('click', function () {
    closePopup();
  });
  setupCloseButton.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      if (!userName.onfocus()) {
        closePopup();
      }
    } else if (evt.key === 'Enter') {
      closePopup();
    }
  });

  submitSetupButton.addEventListener('click', function () {
    setupForm.submit();
  });
  submitSetupButton.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      setupForm.submit();
    }
  });

  //  Выбор цвета глаз, плаща etc
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var fireballColorInput = document.querySelector('input[name="fireball-color"]');
  var coatColorInput = document.querySelector('input[name="coat-color"]');
  var eyesColorInput = document.querySelector('input[name="eyes-color"]');

})();
