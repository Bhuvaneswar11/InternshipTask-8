import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Student Portal</div>
            <div>
                <Link to="/">Dashboard</Link>
                <Link to="/students">Student List</Link>
                <Link to="/register">Register Student</Link>
            </div>
        </nav>
    );
};

export default Navbar;
