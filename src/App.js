import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import NavUsers from './Components/NavUsers';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Profil from './Components/Profil';
import { useState } from 'react';
import PriviteRoute from './Components/PriviteRoute';

function App() {
  const[aa, setAa] = useState(false)
  
  return (
    <div className="App">
      <NavUsers  aa={aa} setAa={setAa}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<PriviteRoute aa={aa}><Users /></PriviteRoute>} />
        <Route path="/Profil/:id" element={<PriviteRoute aa={aa}><Profil /></PriviteRoute>} />
      </Routes>

    </div>
  );
}

export default App;
