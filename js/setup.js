'use strict';
var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['де Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUMBER = 4;
var similarListElement = setupBlock.querySelector('.setup-similar-list');
var similatWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var randomInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomElementFrom = function (array) {
  return array[randomInteger(0, array.length)];
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
