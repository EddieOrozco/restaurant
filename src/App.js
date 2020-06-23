import React, { Component } from 'react';
import './App.css';

import Nav from './components/layout/Nav';
import Jumbo from './components/pages/Jumbo';
import Hours from './components/pages/Hours';
import LunchSpecials from './components/menu/LunchSpecials';
import HouseSpecials from './components/menu/HouseSpecials';
import Catering from './components/pages/Catering';
import Footer from './components/layout/Footer';
import menuData from './components/data/menuData';
import soupData from './components/data/soupData';
import appData from './components/data/appData';
import lunchData from './components/data/lunchData';
import houseData from './components/data/houseData';

export class App extends Component {
  state = {
    menuData,
    soupData,
    appData,
    lunchData,
  };
  render() {
    return (
      <div className='App'>
        <Nav />
        <Jumbo />
        <Hours />
        <LunchSpecials lunchData={lunchData} />
        <HouseSpecials houseData={houseData} />
        <Catering />
        <Footer />
      </div>
    );
  }
}

export default App;
