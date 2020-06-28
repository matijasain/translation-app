import React from 'react';
import './LanguageSwitcher.scss';

import iconSwitch from '../img/iconSwitch.png';

function LanguageSwitcher(props) {
  return (
    <div className='languageSwitcher'>
      <img
        alt='Language switcher button'
        src={iconSwitch}
        className={
          props.toggle ? 'languageSwitcherIcon' : 'languageSwitcherIcon-toggled'
        }
        onClick={props.handleClick}
      />
    </div>
  );
}

export default LanguageSwitcher;
