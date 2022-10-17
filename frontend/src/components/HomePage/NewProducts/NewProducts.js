import React, { useEffect, useState, useRef } from 'react';

import './NewProducts.scss';
import CardNewProduct from './CardNewProduct/CardNewProduct';

import onion from '../../../images/onion.png';

function NewProducts(props) {
  const { cards } = props;
  const ref = useRef();
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

      ref.current.scrollLeft = scrollX;
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

  const onMouseLeave = (e) => {
    e.preventDefault();

    setState({
      ...state,
      isSliding: false,
    });
  };

  const onMouseUp = (e) => {
    e.preventDefault();

    setState({
      ...state,
      isSliding: false,
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
          {cards.map((card, i) => (
            <CardNewProduct card={card} key={i} />
          ))}
        </ul>
      </div>
      <img className='new-products__onion' src={onion} alt='лук' />
    </section>
  );
}

export default NewProducts;
