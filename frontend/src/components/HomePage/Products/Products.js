import React from 'react';

import './Products.scss';
import CardProduct from './CardProduct/CardProduct';

import { whiteSpace } from '../../../utils/constants/constants';

function Products(props) {
  const { title, cards } = props;
  // const m = <>&nbsp;</>;
  // const whiteSpace = m.props.children;

  return (
    <section className='products  products__home-page'>
      <h2 className='products__title'>{title}</h2>

      <ul className='products__container'>
        {cards.map((card, i) => (
          <CardProduct card={card} key={i} newProduct='flex' />
        ))}
      </ul>
    </section>
  );
}

export default Products;
