import { Link } from 'react-router-dom';
import { BsCodeSlash } from 'react-icons/bs';
import links from '../utils/data';
import logo from '../assets/logo.png';
import '../styles/navbar.scss';
import { useNavigationContext } from '../context/navbar_context';
import Hello from './Hello';

const Navbar = () => {
  const { openSidebar } = useNavigationContext();

  return (
    <nav className="navbar">
      <button className="hamburger-btn" type="button">
        <BsCodeSlash className="hamburger-icon" onClick={openSidebar} />
      </button>

      <ul className="nav-links">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li className="nav-link" key={id}>
              <Link to={url}>
                <p className="nav-link-rotate">{text}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="logo-container">
        <Link to="/">
          <img className="logo-navbar" src={logo} alt="Andrea Rivas" />
        </Link>
      </div>
      <Hello />
    </nav>
  );
};

export default Navbar;
