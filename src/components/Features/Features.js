import './Features.scss'
import like from '../../images/like.svg'
import sheet from '../../images/sheet.svg'
import bell from '../../images/bell.svg'
import geo from '../../images/geo.svg'

function Features() {
    return (
        <section className='features'>
            <ul className='features__list'>
                <li className='features__item'>
                    <img className='item__image' alt='Лайк' src={like} />
                    <h2 className='item__title'>ТОЛЬКО ЛУЧШЕЕ</h2>
                    <p className='item__text'>Всегда актуальные<br /> акции и скидки у вас в телефоне</p>
                </li>
                <li className='features__item'>
                    <img className='item__image' alt='Геолокация' src={geo} />
                    <h2 className='item__title'>ВСЕ РЯДОМ</h2>
                    <p className='item__text'>Находите ближайшие акции на карте рядом с вами.</p>
                </li>
                <li className='features__item'>
                    <img className='item__image' alt='Уведомление' src={bell} />
                    <h2 className='item__title'>УВЕДОМЛЕНИЯ</h2>
                    <p className='item__text'>Подписывайтесь только на то,<br /> что вас интересует и всегда будьте в курсе новых акций.</p>
                </li>
                <li className='features__item'>
                    <img className='item__image' alt='Каталог' src={sheet} />
                    <h2 className='item__title'>КАТАЛОГ</h2>
                    <p className='item__text'>Огромный каталог с информацией<br /> о магазинах, брендах и ТЦ всегда под рукой.</p>
                </li>
            </ul>
        </section>
    );
}
export default Features;