
import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
  return (
 
   <div className="App">
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/" element={< Login/>} />
        <Route path="/signup" element={< SignUp/>} />
      </Routes>
    </div>
   
  );
}

export default App;
