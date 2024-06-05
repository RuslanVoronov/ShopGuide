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

import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.scss';



const Slider = () => {
    const [items, setItems] = useState([prada, nike, cym, adidas, gum, zara, carlo])
    return (

        < div className="slider__track" >
            <Swiper
                modules={[Navigation]}
                spaceBetween={44}
                slidesPerView="auto"
                navigation={{
                    prevEl: '.slider__btn-prev',
                    nextEl: '.slider__btn-next',
                }}
                centeredSlides
                slideToClickedSlide
                initialSlide={3}
            >
                {items.map((item) => {
                    return (
                        <SwiperSlide><img className="slider__item" src={item} alt='Логотип' /></SwiperSlide>
                    )
                })}
            </Swiper>
            <div class="slider__btn-prev"></div>
            <div class="slider__btn-next"></div>
        </div >


    )
}

export default Slider