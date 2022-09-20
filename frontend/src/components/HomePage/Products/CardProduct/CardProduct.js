import React from 'react';
import { Link } from 'react-router-dom';

import './CardProduct.scss';

function CardProduct(props) {
  const { card, newProduct } = props;

  return (
    <li className='product__card'>
      <img className='product__image' src={card.image} alt='продукт' />
      <div className='new' style={{ display: `${newProduct}` }}>
        NEW
      </div>
      <h2 className='product__name'>{card.name}</h2>
      <p className='prodct__description'>{card.description}</p>
      <div className='product__basket-container'>
        <p className='product__price'>
          от {card.price} <span className='prodct__rub'>P</span>
        </p>
        <Link className='product__basket' to='#'>
          В корзину
        </Link>
      </div>
    </li>
  );
}

export default CardProduct;
