import './Partners.scss'
import phone from '../../images/_phone1.png'
import Slider from '../Slider/Slider';

function Partners() {
    return (
        <section className='partners'>
            <h2 className='partners__title'>НАШИ ПАРТНЁРЫ</h2>
            <div className='partners__slider'></div>
            <Slider />
            <div className='partners__text-container'>
                <p className='partners__text'>Хотите стать партнером?</p>
                <p className='partners__text'>Напишите нам и про ваши акции узнают все.</p>
            </div>
            <button className='partners__button'>СТАТЬ ПАРТНЕРОМ</button>
        </section>
    );
}
export default Partners;