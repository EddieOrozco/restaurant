import React, { Component } from 'react';

export class Catering extends Component {
  render() {
    return (
      <section id='catering'>
        <div className='container'>
          <div class='section-title'>LET US CATER YOUR NEXT EVENT!</div>
          <p style={{ textAlign: 'center' }}>
            If your favorite Chinese Dish is not listed in our menu, please
            inquire and we will try our best to please you.{' '}
          </p>
        </div>
      </section>
    );
  }
}

export default Catering;
