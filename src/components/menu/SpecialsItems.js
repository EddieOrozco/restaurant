import React, { Component } from 'react';
import LunchSpecial from './LunchSpecial';
import HouseSpecial from './HouseSpecial';

import lunchData from '../data/lunchData';
import houseData from '../data/houseData';

export class SpecialsItems extends Component {
  state = {
    lunchData,
    houseData,
  };
  render() {
    return (
      <div>
        <section id='menu' className='menu'>
          <div className='container'>
            <div className='section-title'>
              <h2>
                Lunch <span>Combination</span>
              </h2>
              <div>Served with Egg Roll (1)</div>
              <div>Shrimp Fried Rice</div>
            </div>
            <div className='row menu-container'>
              {lunchData.map((lunch) => (
                <LunchSpecial key={lunch.id} lunch={lunch} />
              ))}
            </div>
          </div>
          <div className='container'>
            <div className='section-title'>
              <h2>
                House <span>Combination</span>
              </h2>
            </div>
            <div className='row menu-container'>
              {houseData.map((house) => (
                <HouseSpecial key={house.id} house={house} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SpecialsItems;
