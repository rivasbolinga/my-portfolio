import {links} from '../utils/data';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {links.map((link) => {
          return <li key={link.index}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        })}
      </ul>
    </nav>
  )
  

}

export default Navbar;