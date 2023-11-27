// LoginToggle.js
import React, { useState } from 'react';
import LogInIcon from './loginIcon';
import '../Styles/Menu.css';
import { Link } from 'react-router-dom';
import '../Styles/logInToggle.css';

const LoginToggle = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleLogin = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  return (
    <div className='custom-login'>
      <input type="checkbox" id="custom-menu-btn" className="custom-menu-btn" onClick={handleToggleLogin}/>
      <label htmlFor="custom-menu-btn" className="custom-menu-icon">
        {/* Your LogInIcon component or other login-related content */}
        <LogInIcon icon={<i className="fas fa-envelope"></i>} />
      </label>
      <div className="custom-dropdown">
        {isLoggedIn ? <Link to="/logout">Log Out</Link> : <Link to="/login">Log In</Link>}
      </div>
    </div>
  );
};

export default LoginToggle;


    // <Link className="#" to="/login"></Link>