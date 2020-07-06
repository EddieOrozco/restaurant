import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer id='footer'>
        <div className='container'>
          <h3>Check Us Out!</h3>
          <p>We are here to serve you and your family.</p>
          <div className='social-links'>
            <a
              href='https://www.yelp.com/biz/kings-wok-evergreen-park?osq=chinese'
              className='yelp'
            >
              <i className='bx bxl-yelp'></i>
            </a>
            <a
              href='https://www.google.com/search?q=king%27s+wok&oq=King%27s+Wok&aqs=chrome.0.69i59j46j0j46l2j0j69i60l2.348j0j1&sourceid=chrome&ie=UTF-8'
              className='google'
            >
              <i className='bx bxl-google'></i>
            </a>
          </div>
          <div className='copyright'>
            &copy; Copyright{' '}
            <strong>
              <span>King's Wok</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className='credits'>
            {/* <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/delicious-free-restaurant-bootstrap-theme/ --> */}
            Designed by <a href='https://bootstrapmade.com/'>Eduardo Orozco</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
