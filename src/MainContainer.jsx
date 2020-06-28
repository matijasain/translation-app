import React, { useState } from 'react';

import TextInput from './TextInput/TextInput';
import TextOutput from './TextOutput/TextOutput';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

import './MainContainer.scss';

import languageData from './utils/languages';

function MainContainer() {
  const [toggle, setToggle] = useState(true);
  let [inputValue, setInputValue] = useState('');
  let [translatedText, setTranslatedText] = useState('');

  const onSubmit = (translateFrom) => (e) => {
    e.preventDefault();
    setTranslatedText((translatedText = translateFrom.dummyTranslation));
  };

  const handleClick = () => {
    setToggle(!toggle);
    setInputValue((inputValue = ''));
    setTranslatedText((translatedText = ''));
  };

  const renderSwitchIcon = () => {
    return <LanguageSwitcher handleClick={handleClick} toggle={toggle} />;
  };

  const renderSwitcher = (translateFrom, translateTo) => {
    return (
      <div className='main-container'>
        <TextInput
          onSubmit={onSubmit(translateFrom)}
          languageSelectionImage={translateFrom.icon}
          languageSelectionParagraph={`From ${translateFrom.language}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        {renderSwitchIcon()}
        <TextOutput
          languageSelectionImage={translateTo.icon}
          languageSelectionParagraph={
            translatedText ? translatedText : `to ${translateTo.language}`
          }
        />
      </div>
    );
  };

  return (
    <>
      {toggle
        ? renderSwitcher(languageData.de, languageData.en)
        : renderSwitcher(languageData.en, languageData.de)}
    </>
  );
}

export default MainContainer;
