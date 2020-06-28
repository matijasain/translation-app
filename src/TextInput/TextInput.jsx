import React from 'react';
import './TextInput.scss';

function TextInput(props) {
  return (
    <div className='language-selection'>
      <img
        src={props.languageSelectionImage}
        alt={props.languageSelectionCountry}
      />
      <form onSubmit={props.onSubmit}>
        <input
          placeholder={props.languageSelectionParagraph}
          type='text'
          value={props.value}
          onChange={props.onChange}
        />
      </form>
    </div>
  );
}

export default TextInput;
