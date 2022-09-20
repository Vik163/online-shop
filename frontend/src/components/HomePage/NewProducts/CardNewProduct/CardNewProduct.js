import React from 'react';
import { Link } from 'react-router-dom';

import './CardNewProduct.scss';

import newProductImage from '../../../../images/image8.png';

function Card() {
  return (
    <li className='newProduct__card'>
      <img className='newProduct__image' src={newProductImage} alt='продукт' />
      <p className='newProduct__text'>
        Карбонара
        <br />
        <span className='newProdct__price'>
          от 120 <span className='newProdct__rub'>P</span>
        </span>
      </p>
    </li>
  );
}

export default Card;
