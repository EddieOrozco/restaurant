import React, { Component } from 'react';

class Jumbo extends Component {
  render() {
    return (
      <section id='hero'>
        <div className='hero-container'>
          <div
            id='heroCarousel'
            className='carousel slide carousel-fade'
            data-ride='carousel'
          >
            <ol
              className='carousel-indicators'
              id='hero-carousel-indicators'
            ></ol>

            <div className='carousel-inner' role='listbox'>
              <div
                className='carousel-item active'
                style={{
                  background:
                    'url(https://duyt4h9nfnj50.cloudfront.net/resized/1536853137151-w2880-5e.jpg)',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                // style={{ background: 'rgb(255,253,208)' }}
              >
                <div
                  style={{ background: 'rgba(0, 0, 0, 0.5)', height: '100vh' }}
                >
                  <div className='carousel-container'>
                    <div className='carousel-content'>
                      <h1
                        className='animated fadeInDown'
                        style={{
                          color: '#fff',
                          fontSize: '6rem',
                          fontWeight: '800',
                        }}
                      >
                        King's Wok
                      </h1>
                      <p
                        className='animated fadeInUp'
                        style={{ color: '#fff' }}
                      >
                        Chinese Restaurant
                      </p>
                      <p
                        className='animated fadeInUp'
                        style={{ color: '#fff' }}
                      >
                        Carry Out <span style={{ color: 'red' }}>&</span>{' '}
                        Delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Jumbo;
