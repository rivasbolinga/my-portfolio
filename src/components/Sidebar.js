import React from 'react'
import logo from '../assets/ar-grey.png'
import { Link } from 'react-router-dom';
import { useNavigationContext } from '../context/navbar_context';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/data.js';
import '../styles/sidebar.scss';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useNavigationContext()

  return (

      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo-sidebar" alt="coding addict" />
          <button className="close-sidebar" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="sidebar-links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  <span className='say-hello'>{text.charAt(0)}</span>
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
