import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <header id='header' class='fixed-top d-flex align-items-center'>
        <div class='container d-flex align-items-center'>
          <div class='logo mr-auto'>
            <h1 class='text-light'>
              <a href='index.html'>
                <span style={{ color: 'red' }}>Kings Wok</span>
              </a>
            </h1>
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
          </div>

          <nav class='nav-menu d-none d-lg-block'>
            <ul>
              <li class='active' style={{ color: 'green' }}>
                <a href='index.html'>Home</a>
              </li>

              <li>
                <a href='#menu' style={{ color: 'green' }}>
                  Menu
                </a>
              </li>
              <li>
                <a href='#specials' style={{ color: 'green' }}>
                  Specials
                </a>
              </li>
              <li>
                <a href='#contact' style={{ color: 'green' }}>
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
