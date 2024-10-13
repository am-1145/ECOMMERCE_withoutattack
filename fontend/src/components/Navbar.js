import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import { useUser } from './UserProvider'; // Import the custom hook

export default function Navbar() {
  const { user, setUser } = useUser(); // Get user state and setter
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null); // Clear user state after logging out
    window.location.href = '/login'; // Redirect to login page
  };

  const handleChangePassword = () => {
    window.location.href = '/change-password'; // Redirect to change password page
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/logo.png"
            alt="AMEHA Logo"
            width="70"
            height="70"
            className="d-inline-block align-text-centre"
          />
          AMEHA
        </a>

        {/* Conditionally render buttons when user is logged in */}
        {user && (
          <div className="navbar-right">
            {location.pathname !== '/change-password' && (
              <button className="change-password-button" onClick={handleChangePassword}>
                Change Password
              </button>
            )}
            <FaSignOutAlt className="logout-icon" onClick={handleLogout} />
          </div>
        )}
      </div>
    </nav>
  );
}
