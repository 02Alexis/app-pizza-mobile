import React, { useEffect, useState } from 'react';
import './Cupons.scss';
import { getCupons } from '../../../Services/cuponsService';

const Cupons = () => {
  const [cupons, setCupons] = useState([]);

  useEffect(() => {
    const fetchCupons = async () => {
      const data = await getCupons();
      setCupons(data);
    };

    fetchCupons();
  }, []);

  return (
    <div className="cupons-container">
      {cupons.map(cupon => (
        <div className="cupon" key={cupon.id}>
          <div className="cupon-name">{cupon.name}</div>
          <div className="cupon-discount">{cupon.discount}</div>
        </div>
      ))}
    </div>
  );
};

export default Cupons;
