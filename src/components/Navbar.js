import {links} from '../utils/data';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className='nav-links'>
        {links.map((link) => {
          const {id,text,url} = link
          return <li key={id}>
            <Link to={url}>{text}</Link>
          </li>
        })}
      </ul>
      <div className='logo-container'>
        <Link to="/">
          <img className="logo-navbar" src={logo} alt="Andrea Rivas"></img>
        </Link>
      </div>
      <div className='phone-container'>
        call me
      </div>
    </nav>
  )
}

export default Navbar;