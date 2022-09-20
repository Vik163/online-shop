import React, { useState } from 'react';

import './HomePage.scss';

import Poster from './Poster/Poster';
import NewProducts from './NewProducts/NewProducts';
import Products from './Products/Products';

function HomePage(props) {
  const [title, setTitle] = useState('Паста');
  const { cards } = props;

  return (
    <div className='homePage'>
      <Poster />
      <NewProducts cards={cards} />
      <Products cards={cards} title={title} />
    </div>
  );
}

export default HomePage;
