import './Main.scss'
import phone from '../../images/_phone1.png'
import shopGuide from '../../images/shopguide.svg'
import arrow from '../../images/arrow_down.svg'

function Main() {
    return (
        <main className='main'>
            <div className='main__download'>
                <div className='download__popup'>
                    <p className='popup__text'>ТОЛЬКО ЛУЧШИЕ АКЦИИ</p>

                </div>

                <img src={shopGuide} alt='shop-guide' className='download__title' />
                <div className='download__subtitle'>
                    <span>загрузить</span>
                </div>
                <div className='download__buttons'>
                    <button className='download__button download__button_type_android'></button>
                    <button className='download__button download__button_type_ios'></button>
                </div>
            </div>
            <img src={phone} className='main__phone' alt='Телефон' />
            <button className='main__button'>
                <p className='button__text'>ВНИЗ</p>
                <img className='button__arrow' src={arrow}></img>
                <p className='button__text'>ВНИЗ</p>
            </button>
        </main >
    );
}
export default Main;