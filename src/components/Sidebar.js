import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { useNavigationContext } from '../context/navbar_context';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/data';


const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useNavigationContext()

  return (

      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="coding addict" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>

  )
}


export default Sidebar
