import React from 'react';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import "./styles.css";
////////////////[ I M A G E S ]////////////////

import logo_electro from '../../screen/img/bg_12_dark.jpg';
import logo_hiphop from '../../screen/img/bg_14_dark.jpg';
import logo_funk from '../../screen/img/bg_11_lock.jpg';
import logo_edm from '../../screen/img/bg_15_lock.jpg';
// Need to add Pagination, Navigation modules
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'
 
const Swiperz = () => {
  const params = {
    // effect: 'coverflow',
    // grabCursor: true,
    // centeredSlides: true,
    // slidesPerView: 'auto',
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows : true,
    // },
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    direction: 'vertical',
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }

  return(

    <Swiper {...params} className="swiper-container">
 

        <div className="swiper-slide" style={{backgroundColor:'transparent',borderRadius:16}}>
        <img src={logo_electro} alt=''/>
        </div>
        <div className="swiper-slide"  style={{backgroundColor:'transparent',borderRadius:16}}>
          <img src={logo_hiphop} alt=''/>
        </div>
        <div className="swiper-slide" style={{backgroundColor:'transparent',borderRadius:16}}>
        <img src={logo_funk} alt=''/>
        </div>
        <div className="swiper-slide" style={{backgroundColor:'transparent',borderRadius:16}}>
        <img src={logo_edm} alt=''/>
        </div>
        <div class="swiper-pagination"></div>

    </Swiper>
  )
}
 
export default Swiperz;