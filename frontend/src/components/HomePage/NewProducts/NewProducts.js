import React, { useEffect, useState, useRef } from 'react';

import './NewProducts.scss';
import CardNewProduct from './CardNewProduct/CardNewProduct';

import onion from '../../../images/onion.png';

function NewProducts(props) {
  const { cards, newCards } = props;
  const ref = useRef();
  const widthItem = 281;

  const [transition, setTransition] = useState(0);
  const [state, setState] = useState({
    isSliding: false,
    clientX: 0,
    scrollX: 0,
  });

  const onMouseMove = (e) => {
    e.preventDefault();
    const { isSliding, clientX, scrollX } = state;

    if (isSliding) {
      const cX = e.clientX;
      const sX = scrollX - e.clientX + clientX;
      setState({
        ...state,
        clientX: cX,
        scrollX: sX,
      });
    }
    ref.current.scrollLeft = scrollX;
  };

  const shiftSmoothElem = () => {
    const { scrollX } = state;
    const remains = scrollX % widthItem;
    const shiftRight = widthItem - remains;
    let timePassed;
    // Плавный сдвиг после отпускания мышки
    let start = Date.now(); // запомнить время начала
    let timer = setInterval(function () {
      timePassed = Date.now() - start;
      if (remains < widthItem / 2) {
        if (timePassed >= remains * 3) {
          clearInterval(timer); // закончить анимацию через 2 секунды
          return;
        }
      } else {
        if (timePassed >= shiftRight * 3) {
          clearInterval(timer); // закончить анимацию через 2 секунды
          return;
        }
      }
      // отрисовать анимацию на момент timePassed, прошедший с начала анимации
      shiftElem(timePassed);
    }, 20);
  };

  function shiftElem(timePassed) {
    const { scrollX } = state;
    const remains = scrollX % widthItem;
    if (remains < widthItem / 2) {
      // сдвиг влево остаток меньше половины
      ref.current.scrollLeft = scrollX - timePassed / 3;
      setState({
        ...state,
        scrollX: scrollX - timePassed / 3,
        isSliding: false,
      });
    } else {
      // сдвиг вправо остаток больше половины
      ref.current.scrollLeft = scrollX + timePassed / 3;
      setState({
        ...state,
        scrollX: scrollX + timePassed / 3,
        isSliding: false,
      });
    }
  }

  const onMouseUp = (e) => {
    e.preventDefault();

    const { scrollX } = state;
    if (!(scrollX % widthItem === 0)) {
      shiftSmoothElem();
    } else {
      setState({
        ...state,
        isSliding: false,
      });
    }
  };

  const onMouseLeave = (e) => {
    e.preventDefault();

    const { scrollX } = state;
    if (!(scrollX % widthItem === 0)) {
      shiftSmoothElem();
    } else {
      setState({
        ...state,
        isSliding: false,
      });
    }
  };

  const onMouseDown = (e) => {
    e.preventDefault();

    setState({
      ...state,
      isSliding: true,
      clientX: e.clientX,
    });
  };

  useEffect(() => {
    const elem = ref.current;
    if (elem) {
      const onWheel = (e) => {
        e.preventDefault();
        elem.scrollTo({
          left: elem.scrollLeft + e.deltaY * 2,
          behavior: 'smooth',
        });
      };
      elem.addEventListener('wheel', onWheel);
      return () => elem.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <section className='new-products'>
      <h2 className='new-products__title'>Новинки</h2>
      <div
        className='new-products__container'
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <ul className='new-products__container-drag'>
          {newCards.map((card, i) => (
            <CardNewProduct card={card} key={i} />
          ))}
        </ul>
      </div>
      <img className='new-products__onion' src={onion} alt='лук' />
    </section>
  );
}

export default NewProducts;
