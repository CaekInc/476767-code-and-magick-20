'use strict';
(function () {
  var setupBlock = document.querySelector('.setup');
  var similarListElement = setupBlock.querySelector('.setup-similar-list');
  var similatWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var getRandomWizard = function () {
    var wizard = {
      name: window.util.getRandomElementFrom(window.wizardsData.WIZARD_NAMES) + ' ' + window.util.getRandomElementFrom(window.wizardsData.WIZARD_SURNAMES),
      coatColor: window.util.getRandomElementFrom(window.wizardsData.WIZARD_EYES),
      eyesColor: window.util.getRandomElementFrom(window.wizardsData.WIZARD_COATS)
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
  var wizards = getWizards(window.wizardsData.WIZARDS_NUMBER);
  var wizardFragment = renderFragment(wizards);
  similarListElement.appendChild(wizardFragment);

})();
