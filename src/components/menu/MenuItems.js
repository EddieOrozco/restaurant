import React, { Component } from 'react';
import Menu from './Menu';
import Soup from './Soup';
import FriedRice from './FriedRice';
import EggFoo from './EggFoo';
import Chicken from './Chicken';
import Beef from './Beef';
import Vegetable from './Vegetable';
import Seafood from './Seafood';
import Pork from './Pork';
import ChopChow from './ChopChow';
import LoMein from './LoMein';
import FamDinner from './FamDinner';
import Other from './Other';

import menuData from '../data/menuData';
import appData from '../data/appData';
import soupData from '../data/soupData';
import friedRiceData from '../data/friedRiceData';
import eggFooData from '../data/eggFooData';
import chickenData from '../data/chickenData';
import beefData from '../data/beefData';
import veggieData from '../data/veggieData';
import seafoodData from '../data/seafoodData';
import porkData from '../data/porkData';
import chopChowData from '../data/chopChowData';
import loMeinData from '../data/loMeinData';
import otherData from '../data/otherData';
import famDinnerData from '../data/famDinnerData';

export class MenuItems extends Component {
  state = {
    menuData,
    appData,
    soupData,
    friedRiceData,
    eggFooData,
    chickenData,
    beefData,
    veggieData,
    seafoodData,
    porkData,
    chopChowData,
    loMeinData,
    otherData,
    famDinnerData,
  };
  render() {
    return (
      <section id='menu' className='menu'>
        <div className='container'>
          <div className='section-title'>
            <h2>Appetizers</h2>
          </div>
          <div className='row menu-container'>
            {appData.map((a) => (
              <Menu key={a.id} a={a} />
            ))}
          </div>
        </div>
        <div className='container'>
          <div className='section-title'>
            <h2>Soup</h2>
          </div>
          <div className='row menu-container'>
            {soupData.map((soup) => (
              <Soup key={soup.id} soup={soup} />
            ))}
          </div>
        </div>

        <div className='container'>
          <div className='section-title'>
            <h2>Fried Rice</h2>
          </div>
          <div className='row menu-container'>
            {friedRiceData.map((rice) => (
              <FriedRice key={rice.id} rice={rice} />
            ))}
          </div>
        </div>
        <div className='container'>
          <div className='section-title'>
            <h2>Egg Foo Young</h2>
            <div>Served with Steam Rice</div>
            <div>Small (2) Patties, Large (4) Patties</div>
          </div>
          <div className='row menu-container'>
            {eggFooData.map((eggFoo) => (
              <EggFoo key={eggFoo.id} eggFoo={eggFoo} />
            ))}
          </div>
        </div>
        <div className='container'>
          <div className='section-title'>
            <h2>Chicken</h2>
            <div>Served with Steam Rice</div>
          </div>
          <div className='row menu-container'>
            {chickenData.map((chicken) => (
              <Chicken key={chicken.id} chicken={chicken} />
            ))}
          </div>
        </div>
        <div className='container'>
          <div className='section-title'>
            <h2>Beef</h2>
            <div>Served with Steam Rice</div>
          </div>
          <div className='row menu-container'>
            {beefData.map((beef) => (
              <Beef key={beef.id} beef={beef} />
            ))}
          </div>
        </div>
        <div className='container'>
          <div className='section-title'>
            <h2>Vegetables</h2>
            <div>Served with Steam Rice</div>
          </div>
          <div className='row menu-container'>
            {veggieData.map((veggie) => (
              <Vegetable key={veggie.id} veggie={veggie} />
            ))}
          </div>
        </div>
        <div className='container'>
          <div className='section-title'>
            <h2>Seafood</h2>
            <div>Served with Steam Rice</div>
          </div>
          <div className='row menu-container'>
            {seafoodData.map((seafood) => (
              <Seafood key={seafood.id} seafood={seafood} />
            ))}
          </div>
        </div>
        <div className='container'>
          <div className='section-title'>
            <h2>Pork</h2>
            <div>Served with Steam Rice</div>
          </div>
          <div className='row menu-container'>
            {porkData.map((pork) => (
              <Pork key={pork.id} pork={pork} />
            ))}
          </div>
        </div>
        <div className='container'>
          <div className='section-title'>
            <h2>Chop Suey & Chow Mein </h2>
            <div>
              <span>(Chop Suey)</span> Served with Steam Rice
            </div>
            <div>
              <span>(Chow Mein)</span> Served with Crispy Noodle
            </div>
          </div>
          <div className='row menu-container'>
            {chopChowData.map((chopChow) => (
              <ChopChow key={chopChow.id} chopChow={chopChow} />
            ))}
          </div>
        </div>
        <div className='container'>
          <div className='section-title'>
            <h2>Lo Mein </h2>
            <div>
              Pan Fried Noodles <span>(Large Only) </span> or Soft Noodles
            </div>
          </div>
          <div className='row menu-container'>
            {loMeinData.map((loMein) => (
              <LoMein key={loMein.id} loMein={loMein} />
            ))}
          </div>
        </div>
        <div className='container'>
          <div className='section-title'>
            <h2>Family Dinner </h2>
            <div>$1 Extra for Substitution</div>
          </div>
          <div className='row menu-container'>
            {famDinnerData.map((famDinner) => (
              <FamDinner key={famDinner.id} famDinner={famDinner} />
            ))}
          </div>
        </div>
        <div className='container'>
          <div className='section-title'>
            <h2>Miscellaneous </h2>
          </div>
          <div className='row menu-container'>
            {otherData.map((other) => (
              <Other key={other.id} other={other} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default MenuItems;

// const MenuItems = ({
//   appData,
//   soupData,
//   friedRiceData,
//   eggFooData,
//   chickenData,
//   beefData,
//   veggieData,
//   seafoodData,
//   porkData,
//   chopChowData,
//   loMeinData,
//   famDinnerData,
//   otherData,
// }) => {
//   return (
//     <section id='menu' className='menu'>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>Appetizers</h2>
//         </div>
//         <div className='row menu-container'>
//           {appData.map((a) => (
//             <Menu key={a.id} a={a} />
//           ))}
//         </div>
//       </div>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>Soup</h2>
//         </div>
//         <div className='row menu-container'>
//           {soupData.map((soup) => (
//             <Soup key={soup.id} soup={soup} />
//           ))}
//         </div>
//       </div>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>Fried Rice</h2>
//         </div>
//         <div className='row menu-container'>
//           {friedRiceData.map((rice) => (
//             <FriedRice key={rice.id} rice={rice} />
//           ))}
//         </div>
//       </div>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>Egg Foo Young</h2>
//           <div>Served with Steam Rice</div>
//           <div>Small (2) Patties, Large (4) Patties</div>
//         </div>
//         <div className='row menu-container'>
//           {eggFooData.map((eggFoo) => (
//             <EggFoo key={eggFoo.id} eggFoo={eggFoo} />
//           ))}
//         </div>
//       </div>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>Chicken</h2>
//           <div>Served with Steam Rice</div>
//         </div>
//         <div className='row menu-container'>
//           {chickenData.map((chicken) => (
//             <Chicken key={chicken.id} chicken={chicken} />
//           ))}
//         </div>
//       </div>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>Beef</h2>
//           <div>Served with Steam Rice</div>
//         </div>
//         <div className='row menu-container'>
//           {beefData.map((beef) => (
//             <Beef key={beef.id} beef={beef} />
//           ))}
//         </div>
//       </div>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>Vegetables</h2>
//           <div>Served with Steam Rice</div>
//         </div>
//         <div className='row menu-container'>
//           {veggieData.map((veggie) => (
//             <Vegetable key={veggie.id} veggie={veggie} />
//           ))}
//         </div>
//       </div>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>Seafood</h2>
//           <div>Served with Steam Rice</div>
//         </div>
//         <div className='row menu-container'>
//           {seafoodData.map((seafood) => (
//             <Seafood key={seafood.id} seafood={seafood} />
//           ))}
//         </div>
//       </div>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>Pork</h2>
//           <div>Served with Steam Rice</div>
//         </div>
//         <div className='row menu-container'>
//           {porkData.map((pork) => (
//             <Pork key={pork.id} pork={pork} />
//           ))}
//         </div>
//       </div>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>Chop Suey & Chow Mein </h2>
//           <div>
//             <span>(Chop Suey)</span> Served with Steam Rice
//           </div>
//           <div>
//             <span>(Chow Mein)</span> Served with Crispy Noodle
//           </div>
//         </div>
//         <div className='row menu-container'>
//           {chopChowData.map((chopChow) => (
//             <ChopChow key={chopChow.id} chopChow={chopChow} />
//           ))}
//         </div>
//       </div>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>Lo Mein </h2>
//           <div>
//             Pan Fried Noodles <span>(Large Only) </span> or Soft Noodles
//           </div>
//         </div>
//         <div className='row menu-container'>
//           {loMeinData.map((loMein) => (
//             <LoMein key={loMein.id} loMein={loMein} />
//           ))}
//         </div>
//       </div>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>Family Dinner </h2>
//           <div>$1 Extra for Substitution</div>
//         </div>
//         <div className='row menu-container'>
//           {famDinnerData.map((famDinner) => (
//             <FamDinner key={famDinner.id} famDinner={famDinner} />
//           ))}
//         </div>
//       </div>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>Miscellaneous </h2>
//         </div>
//         <div className='row menu-container'>
//           {otherData.map((other) => (
//             <Other key={other.id} other={other} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MenuItems;
