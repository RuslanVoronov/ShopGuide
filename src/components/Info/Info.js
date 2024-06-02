import './Info.css'
import phone from '../../images/phone2_ref.png'

function Info() {
    return (
        <section className='info'>
            {/* <div className='info__phone'>
                <img className='phone__screen' alt='экран' src={screen} />
            </div> */}
            <h2 className='info__title'>ИЗБРАННОЕ</h2>
            <img className='info__phone' alt='телефон' src={phone} />
            <div className='info__container'>
                <nav className='info__nav'>
                    <ul className='nav__list'>
                        <li className='nav__item info__title'>ПРОФИЛЬ АКЦИИ</li>
                        <li className='nav__item info__title'>ПОДПИСКИ</li>
                        <li className='nav__item info__title'>КАРТА</li>
                        <li className='nav__item info__title'>МОЯ ЛЕНТА</li>
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