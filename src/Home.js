//
//
import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_TheBoys_S2_NowStreaming_WATCHPARTY/07762d97-8e4e-45f8-9511-b0296c918ccd._UR3000,600_SX1500_FMwebp_.jpg'
        alt=''
      />

      <div className='home__row'>
        <Product
          id='12321341'
          title='MacBook Pro'
          price={2099}
          rating={5}
          image='https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_QL65_.jpg'
        />
        <Product
          id='12321341'
          title='IPhone 11'
          price={699}
          rating={5}
          image='https://m.media-amazon.com/images/I/71Z8C1zRgAL._AC_UY327_FMwebp_QL65_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='12321341'
          title='LED Tac Flashlight'
          price={13.99}
          rating={5}
          image='https://m.media-amazon.com/images/I/71y0TvbIMuL._AC_UL480_FMwebp_QL65_.jpg'
        />
        <Product
          id='12321341'
          title='Instant Pot'
          price={99}
          rating={5}
          image='https://m.media-amazon.com/images/I/71A3oxSQ5rL._AC_UY327_FMwebp_QL65_.jpg'
        />
        <Product
          id='12321341'
          title='PS4 Bundle'
          price={479}
          rating={5}
          image='https://m.media-amazon.com/images/I/61W0a8kxbML._AC_UY327_FMwebp_QL65_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='12321341'
          title='XBOX Bundle'
          price={499}
          rating={5}
          image='https://m.media-amazon.com/images/I/610BYaKjVDL._AC_UY327_FMwebp_QL65_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;
