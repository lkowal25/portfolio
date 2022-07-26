import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import { Link, Outlet } from 'react-router-dom';
import Landing from './components/Landing';
function App() {
  return (
    <div>
      <Landing />
      <Outlet />
    </div>
  );
}

export default App;
