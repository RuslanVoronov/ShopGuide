import './Stocks.css'
import firstPhone from '../../images/_phone3_1.png'
import secondPhone from '../../images/_phone3_2.png'

function Stocks() {
    return (
        <section className='stocks'>
            <div className='stocks__container'>
                <div className='stocks__description'>
                    <h2 className='stocks__title'>НАШИ АКЦИИ</h2>
                    <p className='stocks__text'>Каждый день в Москве проходят распродажи.<br />
                        В акциях и скидках дня могут принимать участие любые группы товаров.
                        Особенно популярны распродажи одежды и обуви, распродажи мебели, распродажи сумок.</p>
                </div>
                <div className='stocks__phones'>
                    <img src={firstPhone} alt='первый телефон' className='stocks__phones_first-phone' />
                    <img src={secondPhone} alt='второй телефон' className='stocks__phones_second-phone' />
                </div>
            </div>
        </section>
    );
}
export default Stocks;