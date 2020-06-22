import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <header id='header' class='fixed-top d-flex align-items-center'>
        <div class='container d-flex align-items-center'>
          <div class='logo mr-auto'>
            <h1 class='text-light'>
              <a href='index.html'>
                <span style={{ color: '#fff', fontWeight: '800' }}>KW</span>
              </a>
            </h1>
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            {/* <a href='index.html'>
              <img src='assets/img/kingwok.png' alt='' class='img-fluid' />
            </a> */}
          </div>

          <nav class='nav-menu d-none d-lg-block'>
            <ul>
              <li>
                <a href='index.html' style={{ color: '#fff' }}>
                  Home
                </a>
              </li>

              <li>
                <a href='#menu' style={{ color: '#fff' }}>
                  Menu
                </a>
              </li>
              <li>
                <a href='#specials' style={{ color: '#fff' }}>
                  Specials
                </a>
              </li>
              <li>
                <a href='#contact' style={{ color: '#fff' }}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}
        </div>
      </header>
    );
  }
}

export default Nav;
