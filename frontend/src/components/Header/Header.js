import React, { useState, useEffect } from 'react';

import './Header.scss';
import Navbar from './Navbar/Navbar';

import logo from '../../images/Logo.svg';

function Header() {
  return (
    <section className='header'>
      <div className='header__info'>
        <div className='header__info-left-side'>
          <div className='header__logo-container'>
            <img src={logo} className='header__logo' alt='логотип' />
            <div className='header__title-container'>
              <h2 className='header__title'>YA BAO</h2>
              <p className='header__subtitle'>Дух китайской еды</p>
            </div>
          </div>
          <p className='header__town'>
            Доставка пасты{' '}
            <span className='header__town-color-pink'>Москва</span>
            <br />
            <span className='header__town-time-delivery'>
              Время доставки &thinsp;
              <span className='header__town-color-pink'>•</span> от 31 мин
            </span>
          </p>
        </div>
        <div className='header__info-right-side'>
          <button className='header__button'>Заказать звонок</button>
          <p className='header__phone'>8 800 333-36-62</p>
        </div>
      </div>
      <Navbar />
    </section>
  );
}

export default Header;
