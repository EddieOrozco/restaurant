import React, { Component } from 'react';

class Hours extends Component {
  render() {
    return (
      <section id='hours'>
        <div className='container'>
          <div className='section-title' data-aos='fade-up'>
            <h2>Hours</h2>
          </div>

          <div className='row'>
            <div className='col-xl-6 col-lg-7' data-aos='fade-right'>
              <img
                src='https://744025.smushcdn.com/1245953/wp-content/uploads/2019/05/design-development-electronics-326424.jpg?lossy=1&strip=1&webp=1'
                className='img-fluid'
                alt=''
              />
            </div>
            <div className='col-xl-6 col-lg-5 pt-5 pt-lg-0'>
              <h3 data-aos='fade-up'>Open 7 Days A Week</h3>
              <h4>Location:</h4>
              <h4>Payment</h4>

              <div className='row'>
                <div className='col-xl-6 col-lg-5 pt-5 pt-lg-0'>Time</div>
                <div className='col-xl-6 col-lg-5 pt-5 pt-lg-0'>Day</div>
              </div>
            </div>
            {/* <div>Location</div>
            <div>Payment</div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Hours;
