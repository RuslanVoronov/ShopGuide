import './Info.scss'
import actions from '../../images/phone2_actions.jpg';
import favourites from '../../images/phone2_favorites.jpg';
import list from '../../images/phone2_list.jpg';
import map from '../../images/phone2_map.jpg';
import subscriptions from '../../images/phone2_subsribtions.jpg';

// import
import { useState } from 'react';
import { NavLink, Link, Route, Router } from 'react-router-dom';

// [actions, favourites, list, map, subscriptions]
function Info() {

    const [screen, setScreen] = useState(actions)

    function handleLink(link) {
        // setScreen(link.target.id)
        const links = document.querySelectorAll('.info__title')
        links.forEach(link => {
            link.classList.remove('info__title_active')
        });
        link.target.classList.add('info__title_active')
        if (link.target.id === "actions") {
            setScreen(actions)
        }
        if (link.target.id === "favourites") {
            setScreen(favourites)
        }
        if (link.target.id === "list") {
            setScreen(list)
        }
        if (link.target.id === "map") {
            setScreen(map)
        }
        if (link.target.id === "subscriptions") {
            setScreen(subscriptions)
        }
    }

    return (
        <section className='info'>
            <h2 className='info__title' id="favourites" onClick={handleLink}>ИЗБРАННОЕ</h2>
            <div className='info__phone' >
                <img className='phone__screen' alt='экран' src={screen} />
            </div>
            <div className='info__container'>
                <nav className='info__nav'>
                    <ul className='nav__list'>
                        <li className='nav__item info__title info__title_active' id="actions" onClick={handleLink}>ПРОФИЛЬ АКЦИИ</li>
                        <li className='nav__item info__title' id="subscriptions" onClick={handleLink}>ПОДПИСКИ</li>
                        <li className='nav__item info__title' id="map" onClick={handleLink}>КАРТА</li>
                        <li className='nav__item info__title' id="list" onClick={handleLink}>МОЯ ЛЕНТА</li>
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