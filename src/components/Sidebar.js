import React from 'react';
import { Link } from 'react-router-dom';
import { TfiClose } from 'react-icons/tfi';
import logo from '../assets/ar-grey.png';
import { useNavigationContext } from '../context/navbar_context';
import links from '../utils/data';
import '../styles/sidebar.scss';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useNavigationContext();

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
      <div className="side-menu__overlay" />
      <div className="sidebar-content">
        <div className="sidebar-header">
          <img src={logo} className="logo-sidebar" alt="coding addict" />
          <button type="button" className="close-sidebar" onClick={closeSidebar}>
            <TfiClose />
          </button>
        </div>
        <ul className="sidebar-links">
          {links.map(({ id, text, url }) => (
            <li key={id}>
              <Link to={url} onClick={closeSidebar}>
                <span>{text.slice(0, 1)}</span>
                {text.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
