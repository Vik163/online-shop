import React from 'react';

import './Map.scss';

import map_1 from '../../../images/map_1.svg';
import map_2 from '../../../images/map_2.svg';
import map_3 from '../../../images/map_3.svg';
import map_4 from '../../../images/map_4.svg';

function Map() {
  const loadScript = (src, onLoad) => {
    const script = document.createElement('script');

    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    script.onload = onLoad;
  };

  const init = () => {
    const myMap = new window.ymaps.Map('map', {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [53.0916, 49.9502],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 16,
    });
    const myPlacemark = new window.ymaps.Placemark(
      [53.0916, 49.9503],
      // null - если нет подсказки
      {
        iconCaption: 'Наш магазин',
      },
      {
        preset: 'islands#redDotIcon', // метка
      }
    );
    myMap.geoObjects.add(myPlacemark);
  };
  loadScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU', () => {
    window.ymaps.ready(init);
  });

  return (
    <section className='map'>
      <h2 className='map__title'>Оплата и доставка</h2>
      <ul className='map__info'>
        <li className='map__info-item'>
          <img className='map__info-icon' src={map_1} alt='иконка' />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className='map__info-item'>
          <img className='map__info-icon' src={map_2} alt='иконка' />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className='map__info-item'>
          <img className='map__info-icon' src={map_3} alt='иконка' />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className='map__info-item'>
          <img className='map__info-icon' src={map_4} alt='иконка' />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
      </ul>
      <div className='map__map' id='map'></div>
    </section>
  );
}

export default Map;
