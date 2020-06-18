import React, { Component } from 'react';
import './App.css';

import Nav from './components/layout/Nav';
import Jumbo from './components/pages/Jumbo';
import Hours from './components/pages/Hours';
import LunchSpecial from './components/pages/LunchSpecial';
import HouseSpecial from './components/pages/HouseSpecial';
import Catering from './components/pages/Catering';
import Footer from './components/layout/Footer';
import menuData from './components/data/menuData';
import soupData from './components/data/soupData';
import appData from './components/data/appData';

export class App extends Component {
  state = {
    menuData,
    soupData,
    appData,
  };
  render() {
    return (
      <div className='App'>
        <Nav />
        <Jumbo />
        <Hours />
        <LunchSpecial />
        <HouseSpecial />
        <Catering />
        <Footer />
      </div>
    );
  }
}

export default App;
