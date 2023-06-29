import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-small.png';
import { useNavigationContext } from '../context/navbar_context';
import links from '../utils/data';
import '../styles/sidebar.scss';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useNavigationContext();

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
      <div className="sidebar-content">
        <div className="sidebar-header">
          <img src={logo} className="logo-sidebar" alt="coding addict" />
        </div>
        <ul className="sidebar-links">
          {links.map(({ id, text, url }) => (
            <li key={id}>
              <Link className="sidebar-link-menu" to={url} onClick={closeSidebar}>
                <span className="number-menu">
                  0
                  {id}
                </span>
                <span> </span>
                <span
                  className={`sidebar-link ${
                    isSidebarOpen ? 'nav-active' : ''
                  }`}
                  // className={text}
                >
                  {text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
