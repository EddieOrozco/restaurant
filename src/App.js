import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/layout/Nav';
import Jumbo from './components/pages/Jumbo';
import Hours from './components/pages/Hours';
// import Catering from './components/pages/Catering';
import MenuItems from './components/menu/MenuItems';
import SpecialsItems from './components/menu/SpecialsItems';
import Footer from './components/layout/Footer';

import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Nav />

          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <Jumbo />
                  <Hours />
                  {/* <Catering /> */}
                </Fragment>
              )}
            />

            <Route
              exact
              path='/specials'
              render={(props) => (
                <Fragment>
                  <SpecialsItems />
                </Fragment>
              )}
            />

            <Route
              exact
              path='/menu'
              render={(props) => (
                <Fragment>
                  <MenuItems />
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
