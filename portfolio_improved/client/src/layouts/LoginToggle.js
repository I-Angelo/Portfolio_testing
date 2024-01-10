// LoginToggle.js
import React, { useState, useEffect } from 'react';
// import LogInIcon from './loginIcon';
import { Link } from 'react-router-dom';
import '../Styles/logInToggle.css';
import loginIcon from '../static/loginicon.png'; 
import { motion } from 'framer-motion';

const LoginToggle = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0.5}}
  const enterAnimation = { opacity: 1, transition: { duration: 1, delay: 2}}

  const handleToggleMenu = () => {
    console.log('Checkbox clicked!')
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  useEffect(() => {
    console.log('isMenuOpen:', isMenuOpen);
  }, [isMenuOpen]);

  return (
    <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>
      <nav className={`login-toggle ${isMenuOpen ? 'open' : ''}`}>
          <input
              type="checkbox"
              id="menu-checkbox"
              className="menu-checkbox"
              checked={isMenuOpen}
              onChange={handleToggleMenu}
          />
          <div >
            <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
                <img src={loginIcon} className="login-icon" alt="lock" />
            </div>
          </div>
          <div className={`dropdown ${isMenuOpen ? 'open' : ''}`}>
          {/* Dropdown content */}
          <ul>
            <li><Link to="/login">Log In</Link></li>
          </ul>
        </div>

          {/* <ul>
            <li></li>
          </ul> */}
      </nav>
    </motion.div>
  );
};

export default LoginToggle;


// <label htmlFor="custom-menu-btn" className="custom-menu-icon">
//           <LogInIcon icon={<i className="fas fa-envelope"></i>} />
//           <input type="checkbox" id="custom-menu-btn" className="custom-menu-btn" onClick={handleToggleMenu} checked={isMenuOpen}/>
        
//         </label>

//       <div className={`custom-dropdown ${isMenuOpen ? 'open' : ''}`}>
//         Depending on isLoggedIn state, show appropriate link
//         {isLoggedIn ? (
//           <Link to="/logout" onClick={handleToggleMenu}>Log Out</Link>
//         ) : (
//           <Link to="/login" onClick={handleToggleMenu}>Log In</Link>
//         )}
//       </div>
