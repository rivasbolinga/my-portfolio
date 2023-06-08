
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
  ErrorPage
} from './pages/index';

import {
  Navbar,
  Sidebar
} from './components/index';


const App = () => {

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>)
}

export default App;
