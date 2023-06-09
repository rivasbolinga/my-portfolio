import {links} from '../utils/data';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/navbar.scss';
import { RxHamburgerMenu} from 'react-icons/rx';
import { useNavigationContext } from '../context/navbar_context';


const Navbar = () => {

  const {openSidebar} = useNavigationContext();

  return (
    <nav className="navbar">
      <button className='hamburger-btn' type="button">
        <RxHamburgerMenu onClick={openSidebar} />
      </button>
      <ul className="nav-links">
        {links.map((link) => {
          const { id, text, url } = link
          return (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          )
        })}
      </ul>
      <div className="logo-container">
        <Link to="/">
          <img className="logo-navbar" src={logo} alt="Andrea Rivas"></img>
        </Link>
      </div>
      <p className="phone-container">
        say
        {''}
        <span className="say-hello"> hello</span>
      </p>
    </nav>
  )
}

export default Navbar;