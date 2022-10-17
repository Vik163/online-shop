import React from 'react';
import { Link } from 'react-router-dom';

import './CardNewProduct.scss';
import './CardNewProductAdapt.scss';

function Card() {
  return (
    <li className='new-product__card'>
      <img
        className='new-product__image'
        // src={newProductImage}
        alt='продукт'
      />
      <p className='new-product__text'>
        Карбонара
        <br />
        <span className='new-product__price'>
          от 120 <span className='new-product__rub'>P</span>
        </span>
      </p>
    </li>
  );
}

export default Card;
