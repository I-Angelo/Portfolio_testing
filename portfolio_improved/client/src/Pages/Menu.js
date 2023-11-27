import React, { useState } from 'react';
import '../Styles/Menu.css'; // Import your CSS file for styling
import LoginToggle from '../layouts/LoginToggle';
import GreetingMessage from '../layouts/GreetMessage';
import MenuToggle from '../layouts/MenuToggle';






const Menu = () => {


  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <>
    {/* // <motion.div className="menu-mobile" initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}> */}
    
    <GreetingMessage />

    <LoginToggle />

    <MenuToggle />

    {/* // </motion.div> */}
    </>
  )
}
export default Menu;




