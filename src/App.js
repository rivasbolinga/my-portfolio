import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {
  HomePage,
  AboutPage,
  ContactPage,
  WorksPage,
  ErrorPage,
} from './pages/index';

import {
  Navbar,
  Sidebar,
} from './components/index';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    AOS.init();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <Sidebar />
      <Navbar />
      {width < 769 ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      ) : (
        <Route path="/" element={<HomePage />} />
      )}
    </Router>
  );
};

export default App;
