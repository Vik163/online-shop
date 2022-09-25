import React from 'react';

import './Products.scss';
import CardProduct from './CardProduct/CardProduct';

import pizza1 from '../../../images/image10.png';
import pizza2 from '../../../images/image9.png';
import pizza3 from '../../../images/image11.png';
import pizza4 from '../../../images/image12.png';

function Products(props) {
  const m = <>&nbsp;</>;
  const whiteSpace = m.props.children;
  const { title } = props;
  const cards = [
    {
      image: pizza1,
      name: 'Карбонара',
      description: `Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное${whiteSpace}масло, черный перец, пармезан.350 г`,
      price: '120',
    },
    {
      image: pizza2,
      name: 'Карбонара dsfasdfa',
      description: `Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное${whiteSpace}масло, черный перец, пармезан.350 г`,
      price: '120',
    },
    {
      image: pizza3,
      name: 'Карбонара',
      description: `Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное${whiteSpace}масло, черный перец, пармезан.350 г`,
      price: '120',
    },
    {
      image: pizza4,
      name: 'Карбонара',
      description: `Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное${whiteSpace}масло, черный перец, пармезан.350 г`,
      price: '120',
    },
    {
      image: pizza1,
      name: 'Карбонара',
      description: `Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное${whiteSpace}масло, черный перец, пармезан.350 г`,
      price: '120',
    },
    {
      image: pizza2,
      name: 'Карбонара',
      description: `Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное${whiteSpace}масло, черный перец, пармезан.350 г`,
      price: '120',
    },
    {
      image: pizza3,
      name: 'Карбонара',
      description: `Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное${whiteSpace}масло, черный перец, пармезан.350 г`,
      price: '120',
    },
    {
      image: pizza4,
      name: 'Карбонара',
      description: `Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное${whiteSpace}масло, черный перец, пармезан.350 г`,
      price: '120',
    },
  ];

  return (
    <section className='products  products__homePage'>
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
