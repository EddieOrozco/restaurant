import React, { Component } from 'react';

class Jumbo extends Component {
  render() {
    return (
      <section id='hero'>
        <div class='hero-container'>
          <div
            id='heroCarousel'
            class='carousel slide carousel-fade'
            data-ride='carousel'
          >
            <ol class='carousel-indicators' id='hero-carousel-indicators'></ol>

            <div class='carousel-inner' role='listbox'>
              <div
                class='carousel-item active'
                // style={{ background: 'url(assets/img/slide/slide-1.jpg)' }}
                style={{ background: 'rgb(255,253,208)' }}
              >
                <div class='carousel-container'>
                  <div class='carousel-content'>
                    <h1
                      class='animated fadeInDown'
                      style={{
                        color: 'red',
                        fontSize: '6rem',
                        fontWeight: '800',
                      }}
                    >
                      King's Wok
                    </h1>
                    <p class='animated fadeInUp' style={{ color: 'red' }}>
                      Chinese Restaurant
                    </p>
                    <p style={{ color: 'black' }}>
                      Carry Out <span style={{ color: 'red' }}>&</span> Delivery
                    </p>
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
