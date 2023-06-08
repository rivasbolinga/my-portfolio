
import './App.css';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Link } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}></Route>
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
