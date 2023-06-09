import React from 'react'
import logo from '../assets/ar-grey.png'
import { Link } from 'react-router-dom';
import { useNavigationContext } from '../context/navbar_context';
import { TfiClose } from 'react-icons/tfi'
import { links } from '../utils/data.js';
import '../styles/sidebar.scss';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useNavigationContext()

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo-sidebar" alt="coding addict" />
        <button className="close-sidebar" onClick={closeSidebar}>
          <TfiClose />
        </button>
      </div>
      <ul className="sidebar-links">
        {links.map(({ id, text, url }) => {
          return (
            <li key={id}>
              <Link to={url} onClick={closeSidebar}>
                <span>{text.slice(0, 1)}</span>
                {text.slice(1)}
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}


export default Sidebar
