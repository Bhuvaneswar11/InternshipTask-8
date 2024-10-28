import React, { useState, useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useNavigate } from 'react-router-dom';
import './StudentRegister.css'; 

function StudentRegister() {
  const { addStudent } = useContext(StudentContext);
  const [student, setStudent] = useState({ name: '', email: '', age: '', class: '', address: '', phone: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
    navigate('/students');
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2 className="register-title">Register Student</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
        required
        className="register-input"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
        required
        className="register-input"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={student.phone}
        onChange={handleChange}
        required
        className="register-input"
      />
      <input
        type="text"
        name="class"
        placeholder="Class"
        value={student.class}
        onChange={handleChange}
        className="register-input"
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={student.age}
        onChange={handleChange}
        className="register-input"
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={student.address}
        onChange={handleChange}
        className="register-input"
      />
      <button type="submit" className="register-button">Register</button>
    </form>
  );
}

export default StudentRegister;
