import Logo from '../assets/logo.png';
import "./Header.css";

function Header() {
    return (
        <header>
            <img src={Logo} alt="" />
            <a href="/">Home</a>
        </header>
      )
}

export default Header;