import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import 'swiper/css/bundle';
import adidas from '../../images/logos/logo_adidas.png'
import carlo from '../../images/logos/logo_carlo.png'
import cym from '../../images/logos/logo_cym.png'
import gum from '../../images/logos/logo_gum.png'
import nike from '../../images/logos/logo_nike.png'
import prada from '../../images/logos/logo_prada.png'
import zara from '../../images/logos/logo_zara.png'

import 'swiper/swiper-bundle.css';

import './Slider.scss';



const Slider = () => {
    const [items, setItems] = useState([prada, nike, cym, adidas, gum, zara, carlo])
    const swiper = useSwiper();
    return (

        < div className="slider__track" >
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={44}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                slidesPerView={7}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {items.map((item) => {
                    return (
                        <SwiperSlide><img className="slider__item" src={item} alt='Логотип' /></SwiperSlide>
                    )
                })}
            </Swiper>
            {/* <button onClick={() => swiper.slideNext()}></button> */}

            {/* <button className={styles.Slider__button}></button>
            <button className={styles.Slider__button}></button> */}
        </div >


    )
}

export default Slider