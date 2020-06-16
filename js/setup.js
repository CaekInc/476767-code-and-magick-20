'use strict';
var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['де Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var similarListElement = setupBlock.querySelector('.setup-similar-list');
var similatWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


// var randomInteger = function (min, max) {
//   var rand = min + Math.random() * (max - min + 1);
//   return Math.round(rand);
// };

var randomInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getWizardName = function () {
  var name = WIZARD_NAMES[randomInteger(0, WIZARD_NAMES.length)];
  var surname = WIZARD_SURNAMES[randomInteger(0, WIZARD_SURNAMES.length)];
  return name + ' ' + surname;
};

var getWizardCoat = function () {
  return WIZARD_COATS[randomInteger(0, WIZARD_COATS.length)];
};

var getWizardEyeColor = function () {
  return WIZARD_EYES[randomInteger(0, WIZARD_EYES.length)];
};

var wizards = [
  {
    name: getWizardName(),
    coatColor: getWizardCoat(),
    eyesColor: getWizardEyeColor()
  },
  {
    name: getWizardName(),
    coatColor: getWizardCoat(),
    eyesColor: getWizardEyeColor()
  },
  {
    name: getWizardName(),
    coatColor: getWizardCoat(),
    eyesColor: getWizardEyeColor()
  },
  {
    name: getWizardName(),
    coatColor: getWizardCoat(),
    eyesColor: getWizardEyeColor()
  }
];

// var renderWizard = function (wizard) {
//   var wizardElement = similatWizardTemplate.cloneNode(true);
//   wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
//   wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
//   wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
// };

// var fragment = document.createDocumentFragment();
// for (var i = 0; i < wizards.length; i++) {
//   fragment.appendChild(renderWizard(wizards[i]));
// }

// similarListElement.appendChild(fragment);

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similatWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}

setupBlock.querySelector('.setup-similar').classList.remove('hidden');
