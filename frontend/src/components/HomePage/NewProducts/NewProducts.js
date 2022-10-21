import React, { useEffect, useState, useRef } from 'react';

import './NewProducts.scss';
import CardNewProduct from './CardNewProduct/CardNewProduct';

import onion from '../../../images/onion.png';

function NewProducts(props) {
  const { newCards } = props;
  const ref = useRef();

  const [state, setState] = useState({
    isSliding: false,
    clientX: 0,
    scrollX: 0,
  });
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia('(max-width: 1300px)').matches
  );
  const [isBook, setIsBook] = useState(
    window.matchMedia('(max-width: 1100px)').matches
  );
  const [isPad, setIsPad] = useState(
    window.matchMedia('(max-width: 1000px)').matches
  );
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 600px)').matches
  );

  const widthParentContainer =
    (isMobile && 170) ||
    (isPad && 578) ||
    (isBook && 774) ||
    (isDesktop && 972) ||
    1110; // Контейнер элементов

  const widthItem =
    (isMobile && 190) || (isBook && 202) || (isDesktop && 247) || 281; // Элемент контейнера
  // Родительский контейнер
  const widthContainer = newCards.length * widthItem - 30;
  //Максимальный сдвиг влево
  const maxShiftLeft = widthContainer - widthParentContainer;

  useEffect(() => {
    const handler = (e) => setIsDesktop(e.matches);
    const handlerBook = (e) => setIsBook(e.matches);
    const handlerPad = (e) => setIsPad(e.matches);
    const handlerMobile = (e) => setIsMobile(e.matches);
    window
      .matchMedia('(max-width: 1300px)')
      .addEventListener('change', handler);
    window
      .matchMedia('(max-width: 1100px)')
      .addEventListener('change', handlerBook);
    window
      .matchMedia('(max-width: 1000px)')
      .addEventListener('change', handlerPad);
    window
      .matchMedia('(max-width: 600px)')
      .addEventListener('change', handlerMobile);
    return () => {
      window
        .matchMedia('(max-width: 1300px)')
        .removeEventListener('change', handler);
      window
        .matchMedia('(max-width: 1100px)')
        .removeEventListener('change', handlerBook);
      window
        .matchMedia('(max-width: 1000px)')
        .removeEventListener('change', handlerPad);
      window
        .matchMedia('(max-width: 600px)')
        .removeEventListener('change', handlerMobile);
    };
  }, []);

  const startMove = (eClientX) => {
    setState({
      ...state,
      isSliding: true,
      clientX: eClientX,
    });
  };

  const moved = (eClienX) => {
    const { isSliding, clientX, scrollX } = state;
    //делаю целое положительное число
    const sX = Math.floor(Math.abs(scrollX - eClienX + clientX));
    const cX = eClienX;

    // console.log(isSliding);
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

  const stopElements = () => {
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
      // console.log('y');

      // сдвиг влево остаток меньше половины
      setState({
        ...state,
        scrollX: scrollX - timePassed / 3,
        isSliding: false,
      });
      ref.current.scrollLeft = scrollX - timePassed / 3;
    } else {
      // сдвиг вправо остаток больше половины
      setState({
        ...state,
        scrollX: scrollX + timePassed / 3,
        isSliding: false,
      });
      ref.current.scrollLeft = scrollX + timePassed / 3;
    }
  }
  //--------------------------------------------------------------

  const onMouseUp = (e) => {
    e.preventDefault();
    stopElements();
  };

  const onMouseLeave = (e) => {
    e.preventDefault();
    stopElements();
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    startMove(e.clientX);
  };

  const onMouseMove = (e) => {
    e.preventDefault();
    moved(e.clientX);
  };

  //Прокрутка колёсиком мыши
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

  // Мобильный -----------------------------
  const onTouchStart = (e) => {
    startMove(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    moved(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e) => {
    stopElements(e);
  };
  //---------------------------------------

  return (
    <section className='new-products'>
      <h2 className='new-products__title'>Новинки</h2>
      <div
        className='new-products__container'
        ref={ref}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
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
