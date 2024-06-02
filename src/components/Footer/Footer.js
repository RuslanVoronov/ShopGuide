import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div>
                <div className='footer__copyright'>2023 &copy; SHOPGUIDE</div>
                <div className='footer__hypertext'>
                    <p>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
                    <p>ПРАВИЛА ПОЛЬЗОВАНИЯ</p>
                </div>
            </div>
            <button className='footer__button'></button>
        </footer>
    );
}
export default Footer;