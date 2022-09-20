import React from 'react';

import './NewProducts.scss';
import CardNewProduct from './CardNewProduct/CardNewProduct';

import pizza from '../../../images/image8.png';
import onion from '../../../images/onion.png';

function NewProducts(props) {
  // const { cards } = props;
  const cards = [
    { image: pizza, name: 'Карбонара', price: 'от 120 ╜' },
    { image: pizza, name: 'Карбонара', price: 'от 120 ╜' },
    { image: pizza, name: 'Карбонара', price: 'от 120 ╜' },
    { image: pizza, name: 'Карбонара', price: 'от 120 ╜' },
  ];

  return (
    <section className='newProducts'>
      <h2 className='newProducts__title'>Новинки</h2>

      <ul className='newProducts__container'>
        {cards.map((card, i) => (
          <CardNewProduct card={card} key={i} />
        ))}
      </ul>
      <img className='newProducts__onion' src={onion} alt='лук' />
    </section>
  );
}

export default NewProducts;
