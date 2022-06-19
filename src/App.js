import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Gitusers from './components/pages/Gitusers';
import Home from './components/pages/Home';
import { Login } from './components/pages/Login';
function App() {
  let isLogged = true
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/gitusers' element={isLogged?<Gitusers/>:<Navigate to="/login" replace/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
