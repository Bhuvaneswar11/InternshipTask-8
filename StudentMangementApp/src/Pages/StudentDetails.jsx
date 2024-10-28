import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';
import './StudentDetail.css';

function StudentDetails() {
  const { id } = useParams();
  const { students } = useContext(StudentContext);
  const student = students.find((student) => student.id === parseInt(id));

  return (
    <div>
      {student ? (
        <>
          <h2>{student.name}</h2>
          <p>Email: {student.email}</p>
          <p>Phone: {student.phone}</p>
          <p>Class: {student.class}</p>
          <p>Age: {student.age}</p>
          <p>Address: {student.address}</p>
        </>
      ) : (
        <p>Student not found.</p>
      )}
    </div>
  );
}

export default StudentDetails;
