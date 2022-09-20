import React, { useState } from 'react';

import './App.scss';

import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';

function App() {
  const [cards, setCards] = useState([]);

  return (
    <div className='page'>
      <Header />
      <HomePage cards={cards} />
    </div>
  );
}

export default App;
