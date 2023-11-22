import React, { useState } from 'react';

import 'swiper/css';

import Swiper from 'react-id-swiper';

// custom css
import './ParllexSlider.css';

import image1 from '../Assets/imageOne.jpg';
import image2 from '../Assets/imageTwo.jpg';
import image3 from '../Assets/imageThree.jpg';

// slider configuration
const HeroSliderConfigs = {
  containerClass: 'swiper-container hero-slider',
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 500,
  spaceBetween: 0,
  effect: 'slide'
};

const ParllexSlider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      <div className="parllex-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image1} alt="image1"></img>
        </div>
      </div>
      <div className="parllex-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image2} alt="image2"></img>
        </div>

      </div>
      <div className="parllex-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image3} alt="image3"></img>
        </div>
      </div>
    </Swiper>
  );
};

export default ParllexSlider;
