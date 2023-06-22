import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../assets/logo.png';
import '../styles/navbar.scss';
import { useNavigationContext } from '../context/navbar_context';
import Hello from './Hello';
import { HoverContext } from '../context/hover_context';

const Navbar = () => {
  const { openSidebar } = useNavigationContext();
  const { links } = useContext(HoverContext);
  const firstLinkId = links[0].id;
  const isHomeLinkHovered = links.find((link) => link.id === firstLinkId)?.isHovered;
  console.log(isHomeLinkHovered);

  return (
    <nav className="navbar">
      <button className="hamburger-btn" type="button">
        <RxHamburgerMenu className="hamburger-icon" onClick={openSidebar} />
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
      {isHomeLinkHovered ? null : (
        <div className="logo-container">
          <Link to="/">
            <img className="logo-navbar" src={logo} alt="Andrea Rivas" />
          </Link>
        </div>
      )}
      {isHomeLinkHovered ? null : <Hello />}
    </nav>
  );
};

export default Navbar;
