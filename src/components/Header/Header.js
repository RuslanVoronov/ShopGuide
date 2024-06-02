import './Header.css'
import facebook from '../../images/icon_fb.svg'
import instagram from '../../images/icon_ig.svg'
import vk from '../../images/icon_vk.svg'
import twitter from '../../images/icon_tw.svg'
import od from '../../images/icon_ok.svg'

function Header() {
    return (
        <header className="header">
            <nav>
                <ul className='header__nav'>
                    <li><img src={facebook} alt='фейсбук' className='header__nav-link' /></li>
                    <li><img src={instagram} alt='инстаграм' className='header__nav-link' /></li>
                    <li><img src={vk} alt='вконтакте' className='header__nav-link' /></li>
                    <li><img src={twitter} alt='твиттер' className='header__nav-link' /></li>
                    <li><img src={od} alt='одноклассники' className='header__nav-link' /></li>
                </ul>
            </nav>
            <button className='header__button'>стать партнёром</button>
        </header>
    );
}
export default Header;