import React from 'react';
import LunchSpecial from './LunchSpecial';

export const LunchSpecials = ({ lunchData }) => {
  return (
    <div>
      <section id='menu' class='menu'>
        <div class='container'>
          <div class='section-title'>
            <h2>
              Lunch <span>Combination</span>
            </h2>
            <p>Served with Egg Roll (1)</p>
            <p>Shrimp Fried Rice</p>
          </div>

          {lunchData.map((lunch) => (
            <LunchSpecial key={lunch.id} lunch={lunch} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LunchSpecials;
