import './Info.scss'
import phone from '../../images/phone2_ref.png'
import { useState } from 'react';
import { NavLink, Link, Route, Router } from 'react-router-dom';


function Info() {
    function handleLink(link) {
        const links = document.querySelectorAll('.info__title')
        links.forEach(link => {
            link.classList.remove('info__title_active')
        });
        link.target.classList.add('info__title_active')
    }
    return (
        <section className='info'>
            {/* <div className='info__phone'>
                <img className='phone__screen' alt='экран' src={screen} />
            </div> */}
            <h2 className='info__title' onClick={handleLink}>ИЗБРАННОЕ</h2>
            <img className='info__phone' alt='телефон' src={phone} />
            <div className='info__container'>
                <nav className='info__nav'>
                    <ul className='nav__list'>
                        <li className='nav__item info__title info__title_active' onClick={handleLink}>ПРОФИЛЬ АКЦИИ</li>
                        <li className='nav__item info__title' onClick={handleLink}>ПОДПИСКИ</li>
                        <li className='nav__item info__title' onClick={handleLink}>КАРТА</li>
                        <li className='nav__item info__title' onClick={handleLink}>МОЯ ЛЕНТА</li>
                    </ul>
                </nav>
                <p className='info__text'>Вы всегда получите полную информацию об акции: подробное описание, бренд,
                    магазины и торговые центры где походит акция.</p>
                <p className='info__text'>
                    Также доступна возможность сразу перейти на сайт товара и купить в рамках действующей акции.</p>
            </div>
        </section>
    );
}
export default Info;