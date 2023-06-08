import { links } from '../utils/data'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/navbar.scss'

const Sidebar = () => {
  return (
    <nav className="navbar">
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
        <div class="border-animation"></div>
      </p>
    </nav>
  )
}

export default Sidebar
