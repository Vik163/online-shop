import React, { useState, useEffect } from 'react';

import './App.scss';

import { api } from '../../utils/api';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/Footer';

function App() {
  const [cards, setCards] = useState([]);
  // console.log(cards);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className='page'>
      <React.StrictMode>
        <Header />
      </React.StrictMode>
      <HomePage cards={cards} />
      <React.StrictMode>
        <Footer />
      </React.StrictMode>
    </div>
  );
}

export default App;
