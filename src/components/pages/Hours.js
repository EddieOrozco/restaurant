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
                src='https://d1ralsognjng37.cloudfront.net/1f25846a-ae6f-436e-9ed3-bffd650bd2a4.jpeg'
                className='img-fluid'
                alt=''
              />
            </div>
            <div className='col-xl-6 col-lg-5 pt-5 pt-lg-0'>
              <div className='row'>
                <div className='col-xl-12 col-lg-12 pt-12 pt-lg-12'>
                  <h2 style={{ textAlign: 'center' }}>Working Hours</h2>
                  <ul style={{ textAlign: 'center' }}>
                    <li className='list-group'>
                      <div
                        className='week'
                        style={{ fontSize: '18px', fontWeight: '400' }}
                      >
                        {' '}
                        Monday - Thursday{' '}
                        <span
                          style={{
                            fontSize: '15px',
                            fontWeight: '400',
                            paddingLeft: '100px',
                          }}
                        >
                          11:00 A.M - 9:15 P.M
                        </span>
                      </div>
                    </li>
                    <li className='list-group'>
                      <div
                        className='week'
                        style={{ fontSize: '18px', fontWeight: '400' }}
                      >
                        Friday - Saturday{' '}
                        <span
                          style={{
                            fontSize: '15px',
                            fontWeight: '400',
                            paddingLeft: '104px',
                          }}
                        >
                          11:00 A.M - 10:15 P.M
                        </span>
                      </div>
                    </li>
                    <li className='list-group'>
                      <div
                        className='week'
                        style={{
                          fontSize: '18px',
                          fontWeight: '400',
                        }}
                      >
                        Sunday{' '}
                        <span
                          style={{
                            fontSize: '15px',
                            fontWeight: '400',
                            paddingLeft: '185px',
                          }}
                        >
                          12:00 A.M - 9:15 P.M
                        </span>
                      </div>
                    </li>
                  </ul>
                  <ul style={{ textAlign: 'center' }}>
                    <h3 data-aos='fade-up'>Open 7 Days A Week</h3>
                    <li className='list-group'>
                      <div
                        className='week'
                        style={{
                          fontSize: '18px',
                          fontWeight: '400',
                        }}
                      >
                        {' '}
                        Phone Number:{' '}
                        <span
                          style={{
                            fontSize: '15px',
                            fontWeight: '400',
                            paddingLeft: '160px',
                          }}
                        >
                          708-499-8088
                        </span>
                      </div>
                    </li>
                    <li className='list-group'>
                      <div
                        className='week'
                        style={{
                          fontSize: '18px',
                          fontWeight: '400',
                        }}
                      >
                        {' '}
                        Payment:{' '}
                        <span
                          style={{
                            fontSize: '15px',
                            fontWeight: '400',
                            paddingLeft: '98px',
                          }}
                        >
                          Cash, Visa & Master Card
                        </span>
                        <span
                          style={{
                            color: 'red',
                            fontSize: '12px',
                            paddingLeft: '3px',
                          }}
                        >
                          (min $5)
                        </span>
                      </div>
                    </li>
                    <li className='list-group'>
                      <div
                        className='week'
                        style={{ fontSize: '18px', fontWeight: '400' }}
                      >
                        {' '}
                        Location:{' '}
                        <span
                          style={{
                            fontSize: '15px',
                            fontWeight: '400',
                            paddingLeft: '40px',
                          }}
                        >
                          3340 W. 95th St. Evergreen Park, IL 60805
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hours;
