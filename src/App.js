
import './App.css';
import { 
  createBrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import {
  HomePage,
  AboutPage,
  ContactPage,
  WorksPage,
  ErrorPage
} from './pages/index'


const App = () => {
  const BrowserRouter = createBrowserRouter();

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>)
}

export default App;
