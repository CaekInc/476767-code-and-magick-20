'use strict';
(function () {
  var fireballSize = 22;
  var wizardWidth = 70;
  var wizardSpeed = 3;

  function getWizardHeight () {
    return 1.337 * wizardWidth;
  }

  function getFireballSpeed (isWind) {
    return (isWind ? 5 : 2);
  }

  function getWizardX (gameFieldWidth) {
    return (gameFieldWidth - wizardWidth) / 2;
  }

  function getWizardY (gameFieldHeight) {
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


var getRandomWizard = function () {
  var wizard = {
    name: getRandomElementFrom(WIZARD_NAMES) + ' ' + getRandomElementFrom(WIZARD_SURNAMES),
    coatColor: getRandomElementFrom(WIZARD_EYES),
    eyesColor: getRandomElementFrom(WIZARD_COATS)
  };
  return wizard;
};

var getWizards = function (numbers) {
  var wizards = [];
  for (var i = 0; i < numbers; i++) {
    wizards.push(getRandomWizard());
  }
  return wizards;
};


var renderWizard = function (wizard) {
  var wizardElement = similatWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};


var renderFragment = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {

    fragment.appendChild(renderWizard(wizards[i]));
  }
  return fragment;
};

setupBlock.querySelector('.setup-similar').classList.remove('hidden');
var wizards = getWizards(WIZARDS_NUMBER);
var wizardFragment = renderFragment(wizards);
similarListElement.appendChild(wizardFragment);

// 2 взаимодействие с формами


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
  wizardCoat.style.fill = changeItem(WIZARD_COATS);
  coatColorInput.value = wizardCoat.style.fill;
};

var changeWizardEyes = function () {
  wizardEyes.style.fill = changeItem(WIZARD_EYES);
  eyesColorInput.value = wizardEyes.style.fill;
};

var changeWizardFireball = function () {
  wizardFireball.style.backgroundColor = changeItem(WIZARDS_FIREBALL_COLORS);
  fireballColorInput.value = wizardFireball.style.backgroundColor;
};

var openPopup = function () {
  setupBlock.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  wizardCoat.addEventListener('click', changeWizardCoat);
  wizardEyes.addEventListener('click', changeWizardEyes);
  wizardFireball.addEventListener('click', changeWizardFireball);
};

var closePopup = function () {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  changeWizardCoat.removeEventListener('click', changeWizardCoat);
  changeWizardEyes.removeEventListener('click', changeWizardEyes);
  changeWizardFireball.removeEventListener('click', changeWizardFireball);
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

// если добавление type="submit" не считается валидным

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
