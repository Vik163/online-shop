import React, { useEffect, useState, useRef } from 'react';

import './NewProducts.scss';
import CardNewProduct from './CardNewProduct/CardNewProduct';

import onion from '../../../images/onion.png';

function NewProducts(props) {
  const { newCards } = props;
  const ref = useRef();
  const widthItem = 281; // Элемент контейнера
  const widthParentContainer = 1110; // Контейнер элементов
  // Родительский контейнер
  const widthContainer = newCards.length * widthItem - 30;
  //Максимальный сдвиг влево
  const maxShiftLeft = widthContainer - widthParentContainer;

  const [state, setState] = useState({
    isSliding: false,
    clientX: 0,
    scrollX: 0,
  });

  const onMouseMove = (e) => {
    e.preventDefault();
    const { isSliding, clientX, scrollX } = state;
    //делаю целое положительное число
    const sX = Math.floor(Math.abs(scrollX - e.clientX + clientX));
    const cX = e.clientX;

    if (isSliding) {
      if (scrollX > maxShiftLeft) {
        //не дает сдвигаться больше максимума
        setState({
          ...state,
          clientX: cX,
          scrollX: maxShiftLeft,
        });
      } else {
        setState({
          ...state,
          clientX: cX,
          scrollX: sX,
        });
      }
    }
    ref.current.scrollLeft = scrollX;
  };

  // Плавный сдвиг после отпускания мышки ---------------------------
  const shiftSmoothElem = () => {
    const { scrollX } = state;
    const remains = scrollX % widthItem;
    const shiftRight = widthItem - remains;
    // запомнить время начала
    let start = Date.now();

    let timer = setInterval(function () {
      let timePassed = Date.now() - start;
      if (remains < widthItem / 2) {
        //время сдвига влево
        if (timePassed >= remains * 3) {
          clearInterval(timer); // закончить анимацию через remains * 3
          return;
        }
      } else {
        //время сдвига вправо
        if (timePassed >= shiftRight * 3) {
          clearInterval(timer);
          return;
        }
      }
      // отрисовать анимацию на момент timePassed, прошедший с начала анимации
      shiftElem(timePassed);
    }, 20); //50 кадров/мин.
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
  //--------------------------------------------------------------

  const onMouseUp = (e) => {
    e.preventDefault();
    const { scrollX } = state;

    if (scrollX % widthItem === 0 || scrollX === 0 || scrollX === 1) {
      setState({
        ...state,
        isSliding: false,
      });
    } else {
      shiftSmoothElem();
    }
  };

  const onMouseLeave = (e) => {
    e.preventDefault();

    const { scrollX } = state;
    if (scrollX % widthItem === 0 || scrollX === 0 || scrollX === 1) {
      setState({
        ...state,
        isSliding: false,
      });
    } else {
      shiftSmoothElem();
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
        <ul
          className='new-products__container-drag'
          style={{ width: widthContainer + 'px' }}
          // устанавливаем стиль ширины по количеству элементов
        >
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
