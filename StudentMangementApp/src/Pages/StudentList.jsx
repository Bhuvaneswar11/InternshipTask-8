import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import { Link } from 'react-router-dom';
import Pagination from '../Component/Pagination';
import './StudentList.css'
function StudentList() {
  const { students, deleteStudent } = useContext(StudentContext);
  const [searchTerm, setSearchTerm] = useState('');
  const studentsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredStudents = students
    .filter((student) => student.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice((currentPage - 1) * studentsPerPage, currentPage * studentsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
     
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td>
                <Link to={`/students/${student.id}`}>View</Link>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalItems={students.length}
        itemsPerPage={studentsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default StudentList;
