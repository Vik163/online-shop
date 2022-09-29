import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

function Navbar(props) {
  const { toggle, isMobile } = props;

  const [styleOpenBlock, setStyleOpenBlock] = useState({});
  console.log(styleOpenBlock);

  useEffect(() => {
    !isMobile
      ? setStyleOpenBlock({ visibility: 'visible' })
      : toggle
      ? setStyleOpenBlock({ visibility: 'visible' })
      : setStyleOpenBlock({ visibility: 'hidden' });
  }, [toggle, isMobile]);

  return (
    <nav className='navbar'>
      <ul
        className='navbar__links'
        style={{ visibility: styleOpenBlock.visibility }}
      >
        <li className='navbar__item'>
          <Link className='navbar__link' to='#'>
            Паста
          </Link>
        </li>
        <li className='navbar__item'>
          <Link className='navbar__link' to='#'>
            Супы
          </Link>
        </li>
        <li className='navbar__item'>
          <Link className='navbar__link' to='#'>
            Салаты
          </Link>
        </li>
        <li className='navbar__item'>
          <Link className='navbar__link' to='#'>
            Антипасти
          </Link>
        </li>
        <li className='navbar__item'>
          <Link className='navbar__link' to='#'>
            Напитки
          </Link>
        </li>
        <li className='navbar__item'>
          <Link className='navbar__link' to='#'>
            Десерты
          </Link>
        </li>
        <li className='navbar__item'>
          <Link className='navbar__link' to='#'>
            Бакалея
          </Link>
        </li>
        <li className='navbar__item'>
          <Link className='navbar__link' to='#'>
            Акции
          </Link>
        </li>
        <li className='navbar__item'>
          <Link className='navbar__link' to='#'>
            Комбо
          </Link>
        </li>
        <li className='navbar__item'>
          <Link className='navbar__link' to='#'>
            Контакты
          </Link>
        </li>
      </ul>
      <div className='navbar__basket-container'>
        <Link className='navbar__link-auth' to='#'>
          Войти
        </Link>
        <Link to='#'>
          <button className='navbar__basket'>
            Корзина <span className='navbar__basket-counter'>1</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
