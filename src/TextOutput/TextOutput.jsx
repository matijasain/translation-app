import React from 'react';
import './TextOutput.scss';

function TextOutput(props) {
  return (
    <div className='language-selection'>
      <img
        src={props.languageSelectionImage}
        alt={props.languageSelectionCountry}
      ></img>
      <p>{props.languageSelectionParagraph}</p>
    </div>
  );
}

export default TextOutput;
