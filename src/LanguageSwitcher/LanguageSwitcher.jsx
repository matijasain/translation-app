import React from 'react';
import './LanguageSwitcher.scss';

import iconSwitch from '../img/iconSwitch.png';

function LanguageSwitcher(props) {
  return (
    <div className='language-switcher'>
      <img
        alt='Language switcher button'
        src={iconSwitch}
        className={
          props.toggle
            ? 'language-switcher-icon'
            : 'language-switcher-icon-toggled'
        }
        onClick={props.handleClick}
      />
    </div>
  );
}

export default LanguageSwitcher;
