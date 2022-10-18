import React from 'react';
import { Link } from 'react-router-dom';

import './CardNewProduct.scss';
import './CardNewProductAdapt.scss';

function Card(props) {
  const { card } = props;
  return (
    <li className='new-product__card'>
      <img src={card.image} className='new-product__image' alt='продукт' />
      <p className='new-product__text'>
        {card.name}
        <br />
        <span className='new-product__price'>
          от {card.price} <span className='new-product__rub'>P</span>
        </span>
      </p>
    </li>
  );
}

export default Card;
