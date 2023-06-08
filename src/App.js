
import './App.css';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Link } from 'react-router-dom';
import {
  HomePage,
  AboutPage,
  ContactPage,
  WorksPage
} from './pages/index'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route element={<ContactPage />} />
        <Route element={<AboutPage />} />
        <Route element={<WorksPage />} />
      </Route>
    )
  )
  return (
    <div className="App">
      hi
    </div>
  );
}
const Root = () => {
return (
  <>
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </>
)
}
export default App;
