import logo from '../logo/lunapay-logo-no-bg.png'
import "../stlyles/Header.css";

function Header( {title} ) {

    return(

    <header className='header'>
        <img src={logo} alt="LunaPay logo" />
        <h1>{title}</h1>
    </header>

    );
}

export default Header;