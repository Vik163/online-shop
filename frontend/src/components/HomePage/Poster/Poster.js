import React from 'react';

import './Poster.scss';

import leftImage from '../../../images/image7.png';
import centerImage from '../../../images/image5.png';
import rightImage from '../../../images/image6.png';

function Poster() {
  return (
    <section className='poster'>
      <img className='poster__image' src={leftImage} alt='Картинка слева' />
      <img className='poster__image' src={centerImage} alt='афиша' />
      <img className='poster__image' src={rightImage} alt='Картинка справа' />
    </section>
  );
}

export default Poster;
