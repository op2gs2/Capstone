import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home'
import Detail from './components/pages/Detail'
import About from './components/pages/About'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react'
function App() {
  const [MD5, setMD5] =useState(null);
  return (
    <>
    <div className="App"></div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Detail' element={<Detail/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
