import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import './Dashboard.css';

function Dashboard() {
  const { students } = useContext(StudentContext);
  const totalStudents = students.length;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Students: {totalStudents}</p>
    </div>
  );
}

export default Dashboard;
