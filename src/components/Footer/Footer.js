import './Footer.scss'
import message from '../../images/Vector.svg';

function Footer() {
    return (
        <footer className='footer'>
            <div>
                <div className='footer__copyright'>2016 &copy; SHOPGUIDE</div>
                <div className='footer__hypertext'>
                    <p>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
                    <p>ПРАВИЛА ПОЛЬЗОВАНИЯ</p>
                </div>
            </div>
            <button className='footer__button'><img alt='' src={message} className='footer__button-icon'/>СВЯЗАТЬСЯ С НАМИ</button>
        </footer>
    );
}
export default Footer;