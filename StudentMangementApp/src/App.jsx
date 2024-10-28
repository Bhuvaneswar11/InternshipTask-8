// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Dashboard from './Pages/Dashboard';
import StudentList from './Pages/StudentList';
import StudentRegister from './Pages/StudentRegister';
import StudentDetails from './Pages/StudentDetails';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/register" element={<StudentRegister />} />
        <Route path="/students/:id" element={<StudentDetails />} />
      </Routes>
    </div>
  );
}

export default App;
