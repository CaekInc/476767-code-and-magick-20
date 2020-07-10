'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['де Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUMBER = 4;
var WIZARDS_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var setupBlock = document.querySelector('.setup');
var similarListElement = setupBlock.querySelector('.setup-similar-list');
var similatWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var randomInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomElementFrom = function (array) {
  return array[randomInteger(0, array.length - 1)];
};


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

var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = document.querySelector('.setup-close');
var userName = document.querySelector('.setup-user-name');
var setupForm = document.querySelector('.setup-wizard-form');
var submitSetupButton = document.querySelector('.setup-submit');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setupBlock.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);

  changeWizardCoat.addEventListener('click', function () {
    changeWizardCoat.style.fill = changeItem(WIZARD_COATS);
    coatColorInput.value = changeWizardCoat.style.fill;
  });
  changeWizardEyes.addEventListener('click', function () {
    changeWizardEyes.style.fill = changeItem(WIZARD_EYES);
    eyesColorInput.value = changeWizardEyes.style.fill;
  });
  changeWizardFireball.addEventListener('click', function () {
    changeWizardFireball.style.backgroundColor = changeItem(WIZARDS_FIREBALL_COLORS);
    fireballColorInput.value = changeWizardFireball.style.backgroundColor;
  });

};

var closePopup = function () {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  changeWizardCoat.removeEventListener('click', function () {
  });
  changeWizardEyes.removeEventListener('click', function () {
  });
  changeWizardFireball.removeEventListener('click', function () {
  });

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
var index = 0;
var changeItem = function (array) {
  index++;
  if (index >= array.length) {
    index = 0;
  }
  return array[index];
};

var changeWizardCoat = document.querySelector('.wizard-coat');
var changeWizardEyes = document.querySelector('.wizard-eyes');
var changeWizardFireball = document.querySelector('.setup-fireball-wrap');

var fireballColorInput = document.querySelector('input[name="fireball-color"]');
var coatColorInput = document.querySelector('input[name="coat-color"]');
var eyesColorInput = document.querySelector('input[name="eyes-color"]');

