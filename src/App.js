import React, { Component } from 'react';
import './App.css';

import Nav from './components/layout/Nav';
import Jumbo from './components/pages/Jumbo';
import Hours from './components/pages/Hours';
import LunchSpecials from './components/menu/LunchSpecials';
import HouseSpecial from './components/menu/HouseSpecial';
import Catering from './components/pages/Catering';
import Footer from './components/layout/Footer';
import menuData from './components/data/menuData';
import soupData from './components/data/soupData';
import appData from './components/data/appData';
import lunchData from './components/data/lunchData';

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
        <HouseSpecial />
        <Catering />
        <Footer />
      </div>
    );
  }
}

export default App;
