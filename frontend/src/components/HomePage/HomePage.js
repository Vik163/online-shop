import React, { useState } from 'react';

import './HomePage.scss';

import Poster from './Poster/Poster';
import NewProducts from './NewProducts/NewProducts';
import Products from './Products/Products';
import Action from './Action/Action';
import Map from './Map/Map';

function HomePage(props) {
  const [title, setTitle] = useState('Паста');
  const { cards, newCards } = props;

  return (
    <div className='home-page'>
      <React.StrictMode>
        <Poster /> <NewProducts cards={cards} newCards={newCards} />
        <Products cards={cards} title={title} />
        <Action />
      </React.StrictMode>
      <Map />
    </div>
  );
}

export default HomePage;
