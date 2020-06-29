import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/layout/Nav';
import Jumbo from './components/pages/Jumbo';
import Hours from './components/pages/Hours';
import LunchSpecials from './components/menu/LunchSpecials';
import HouseSpecials from './components/menu/HouseSpecials';
import Catering from './components/pages/Catering';
import MenuItems from './components/menu/MenuItems';
import Footer from './components/layout/Footer';

import menuData from './components/data/menuData';
import appData from './components/data/appData';
import soupData from './components/data/soupData';
import friedRiceData from './components/data/friedRiceData';
import eggFooData from './components/data/eggFooData';
import chickenData from './components/data/chickenData';
import beefData from './components/data/beefData';
import veggieData from './components/data/veggieData';
import seafoodData from './components/data/seafoodData';
import porkData from './components/data/porkData';
import chopChowData from './components/data/chopChowData';
import loMeinData from './components/data/loMeinData';
import otherData from './components/data/otherData';
import famDinnerData from './components/data/famDinnerData';
import lunchData from './components/data/lunchData';
import houseData from './components/data/houseData';

import './App.css';

export class App extends Component {
  state = {
    menuData,
    soupData,
    appData,
    lunchData,
  };
  render() {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <Jumbo />
          <Hours />
          <LunchSpecials lunchData={lunchData} />
          <HouseSpecials houseData={houseData} />
          {/* <Catering /> */}
          <Switch>
            <Route
              exact
              path='/menu'
              render={(props) => (
                <Fragment>
                  <MenuItems
                    appData={appData}
                    soupData={soupData}
                    friedRiceData={friedRiceData}
                    eggFooData={eggFooData}
                    chickenData={chickenData}
                    beefData={beefData}
                    veggieData={veggieData}
                    seafoodData={seafoodData}
                    porkData={porkData}
                    chopChowData={chopChowData}
                    loMeinData={loMeinData}
                    famDinnerData={famDinnerData}
                    otherData={otherData}
                  />
                </Fragment>
              )}
            />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
{
  /* <MenuItems
            appData={appData}
            soupData={soupData}
            friedRiceData={friedRiceData}
            eggFooData={eggFooData}
            chickenData={chickenData}
            beefData={beefData}
            veggieData={veggieData}
            seafoodData={seafoodData}
            porkData={porkData}
            chopChowData={chopChowData}
            loMeinData={loMeinData}
            famDinnerData={famDinnerData}
            otherData={otherData}
          /> */
}
