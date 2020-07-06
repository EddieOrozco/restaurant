import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <header id='header' className='fixed-top d-flex align-items-center'>
        <div className='container d-flex align-items-center'>
          <div className='logo mr-auto'>
            <h1 className='text-light'>
              <Link to='/'>
                <span style={{ color: '#fff', fontWeight: '800' }}>KW</span>
              </Link>
            </h1>
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            {/* <a href='index.html'>
              <img src='assets/img/kingwok.png' alt='' className='img-fluid' />
            </a> */}
          </div>

          <nav className='nav-menu d-none d-lg-block'>
            <ul>
              <li>
                <Link to='/' style={{ color: '#fff' }}>
                  Home
                </Link>
              </li>

              <li>
                <Link to='/menu' style={{ color: '#fff' }}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to='/specials' style={{ color: '#fff' }}>
                  Specials
                </Link>
              </li>
              <li>
                <a href='#contact' style={{ color: '#fff' }}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
