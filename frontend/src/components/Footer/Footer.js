import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

import logo from '../../images/Logo.svg';
import viza from '../../images/viza.png';
import pay from '../../images/pay.png';
import master from '../../images/master.png';
import viber from '../../images/viber.png';
import skype from '../../images/skype.png';
import ok from '../../images/Ok.svg';
import telegram from '../../images/telegram.png';
import facebook from '../../images/facebook.png';
import vk from '../../images/vk.png';
import pasta from '../../images/image16.png';
import { whiteSpace } from '../../utils/constants/constants';

function Footer() {
  return (
    <section className='footer'>
      <div className='footer__blocks'>
        <div className='footer__logo-container'>
          <img className='footer__logo' src={logo} alt='логотип' />
          <h2 className='footer__logo-title'>YA BAO</h2>
          <p className='footer__logo-subtitle'>Дух китайской еды</p>
        </div>
        <ul className='footer__info'>
          <li className='footer__info-item'>
            <Link className='footer__info-link'>
              Калорийность и{whiteSpace}состав
            </Link>
          </li>
          <li className='footer__info-item'>
            <Link className='footer__info-link'>Правовая информация</Link>
          </li>
          <li className='footer__info-item'>Мы в соцсетях</li>
          <li className='footer__info-social'>YouTube</li>
          <li className='footer__info-social'>Instagram</li>
          <li className='footer__info-social'>Facebook</li>
          <li className='footer__info-social'>ВКонтакте</li>
        </ul>
      </div>
      <div className='footer__blocks'>
        <h3 className='footer__social-title'>
          Остались вопросы? А{whiteSpace}мы{whiteSpace}всегда{whiteSpace}на
          {whiteSpace}связи:
        </h3>
        <ul className='footer__social-container'>
          <li className='footer__social-item'>
            <a
              className='footer__social-link'
              href='viber://chat?number=%2B7927352523'
            >
              <img className='footer__social-icon' src={viber} alt='Вайбер' />
            </a>
          </li>
          <li className='footer__social-item'>
            <a
              className='footer__social-link'
              href='viber://chat?number=%2B7927352523'
            >
              <img className='footer__social-icon' src={skype} alt='Скайп' />
            </a>
          </li>
          <li className='footer__social-item'>
            <a
              className='footer__social-link'
              href='viber://chat?number=%2B7927352523'
            >
              <img
                className='footer__social-icon'
                src={ok}
                alt='Одноклассники'
              />
            </a>
          </li>
          <li className='footer__social-item'>
            <a
              className='footer__social-link'
              href='viber://chat?number=%2B7927352523'
            >
              <img
                className='footer__social-icon'
                src={telegram}
                alt='Телеграм'
              />
            </a>
          </li>
          <li className='footer__social-item'>
            <a
              className='footer__social-link'
              href='viber://chat?number=%2B7927352523'
            >
              <img
                className='footer__social-icon'
                src={facebook}
                alt='Фейсбук'
              />
            </a>
          </li>
          <li className='footer__social-item'>
            <a
              className='footer__social-link'
              href='viber://chat?number=%2B7927352523'
            >
              <img className='footer__social-icon' src={vk} alt='Вконтакте' />
            </a>
          </li>
          <li className='footer__social-item'>
            <button className='footer__social-button'>Написать нам</button>
          </li>
        </ul>
        <p className='footer__phone'>8 800 333-36-62</p>
        <button className='footer__button'>Заказать звонок</button>
        <img className='footer__image' src={pasta} alt='Паста' />
      </div>
      <article className='footer__year'>
        Все права защищены &copy; {new Date().getFullYear()}
        <ul className='footer__cards'>
          <li className='footer__cards-item'>
            <img className='footer__card' src={viza} alt='карта' />
          </li>
          <li className='footer__cards-item'>
            <img className='footer__card' src={pay} alt='карта' />
          </li>
          <li className='footer__cards-item'>
            <img className='footer__card' src={master} alt='карта' />
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Footer;
