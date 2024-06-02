import { useState } from 'react';
import styles from './Slider.module.scss';
import adidas from '../../images/logos/logo_adidas.png'
import carlo from '../../images/logos/logo_carlo.png'
import cym from '../../images/logos/logo_cym.png'
import gum from '../../images/logos/logo_gum.png'
import nike from '../../images/logos/logo_nike.png'
import prada from '../../images/logos/logo_prada.png'
import zara from '../../images/logos/logo_zara.png'

const Slider = () => {
    const [items, setItems] = useState([adidas, carlo, cym, gum, nike, prada, zara])
    return (
        < div className={styles.Slider__track} >
            {items.map((item) => {
                return (
                    <img className={styles.Slider__item} src={item} alt='Логотип'/>
                )
            })}
            <button className={styles.Slider__button}></button>
            <button className={styles.Slider__button}></button>
        </div >
    )
}

export default Slider