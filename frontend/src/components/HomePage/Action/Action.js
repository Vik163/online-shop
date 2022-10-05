import React from 'react';

import './Action.scss';

import actionMain from '../../../images/action_main.png';
import actions from '../../../images/actions.png';

function Action() {
  return (
    <div className='action'>
      <h2 className='action__title'>
        Наши <span className='action__title_color_pink'>акции</span>
      </h2>
      <div className='action__container'>
        <img className='action__image-main' src={actionMain} alt='акции' />
        <img className='action__image' src={actions} alt='акции' />
        <img className='action__image' src={actions} alt='акции' />
        <img className='action__image' src={actions} alt='акции' />
        <img className='action__image' src={actions} alt='акции' />
      </div>
      <button className='action__button'>Все акции</button>
    </div>
  );
}

export default Action;
