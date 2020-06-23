import React from 'react';
import HouseSpecial from './HouseSpecial';

const HouseSpecials = ({ houseData }) => {
  return (
    <section id='menu' class='menu'>
      <div class='container'>
        <div class='section-title'>
          <h2>
            House <span>Combination</span>
          </h2>
          <p>Served with Egg Roll (1)</p>
          <p>Shrimp Fried Rice</p>
        </div>
        <div class='row menu-container'>
          {houseData.map((house) => (
            <HouseSpecial key={house.id} house={house} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseSpecials;