import React, { useState, useEffect } from 'react';

import './App.scss';

import { api } from '../../utils/api';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/Footer';

function App() {
  const [cards, setCards] = useState([]);
  const [newCards, setNewCards] = useState([]);
  // console.log(cards);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
        setNewCards(cards.filter((item) => item.newProduct));
      })
      .catch((err) => {});
  }, []);

  return (
    <div className='page'>
      <React.StrictMode>
        <Header />
      </React.StrictMode>
      <HomePage cards={cards} newCards={newCards} />
      <React.StrictMode>
        <Footer />
      </React.StrictMode>
    </div>
  );
}

export default App;
