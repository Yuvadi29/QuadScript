import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar_Stu from './components/NavBar_Stu';
import Students from './components/Students';
import Landing from './components/Landing';
import College from './components/College';

const App = () => {
  return (
    <>
      <Router>
        <NavBar_Stu />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/college' element={<College />} />
          <Route path="/students" element={<Students />} />
          
        </Routes>
      </Router>

    </>
  )
}

export default App;