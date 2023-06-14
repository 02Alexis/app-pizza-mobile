import React, { useEffect, useRef, useState } from 'react';
import './Cupons.scss';
import { getCupons } from '../../../Services/cuponsService';

const Cupons = () => {
  const [cupons, setCupons] = useState([]);
  const carouselRef = useRef(null);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [clonedCupons, setClonedCupons] = useState([]);

  useEffect(() => {
    const fetchCupons = async () => {
      const data = await getCupons();
      setCupons(data);
    };

    fetchCupons();
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    const handleMouseOver = () => {
      setIsMouseOver(true);
    };

    const handleMouseOut = () => {
      setIsMouseOver(false);
    };

    carousel.addEventListener('mouseover', handleMouseOver);
    carousel.addEventListener('mouseout', handleMouseOut);

    return () => {
      carousel.removeEventListener('mouseover', handleMouseOver);
      carousel.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    // Clona los cupones para crear el efecto de carrusel infinito
    const clonedItems = cupons.concat(cupons);

    setClonedCupons(clonedItems);
  }, [cupons]);

  useEffect(() => {
    let animationFrameId;
    let currentPosition = 0;

    const startCarousel = () => {
      if (!isMouseOver) {
        currentPosition += 1; // Ajusta la velocidad del carrusel cambiando este valor

        // Comprueba si se alcanza el final del carrusel
        if (currentPosition >= carouselRef.current.scrollWidth / 2) {
          currentPosition = 0; // Vuelve al inicio del carrusel
        }

        carouselRef.current.scrollLeft = currentPosition;
      }

      animationFrameId = requestAnimationFrame(startCarousel);
    };

    startCarousel();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMouseOver]);

  return (
    <div>
      <div className='Top-part'>
        <h2>Pizzas</h2>
        <button>Ver todas</button>
      </div>

      <div className="cupons-carousel" ref={carouselRef}>
        <div className="cupons-container">
          {clonedCupons.map(cupon => (
            <div className="cupon" key={cupon.id}>
              <div className="cupon-content">
                <div className="cupon-name">{cupon.name}</div>
                <div className="cupon-discount">{cupon.discount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cupons;
