import React, { useEffect } from 'react';
import '../Styles/Menu.css';
import LoginToggle from '../layouts/LoginToggle';
import GreetingMessage from '../layouts/GreetMessage';
import MenuToggle from '../layouts/MenuToggle';
import IsometricImages from '../layouts/IsometricImages';
import image1 from "../static/Image1.png"; 

const Menu = () => {
  useEffect(() => {
    // Disable scrolling when the Menu component mounts
    disableScroll();
    // Enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = ''; // Restore default scrolling
    };
  }, []);

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }


  return (
    <>
      <GreetingMessage />

        <IsometricImages>
          <div
            className="image1"
            style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover' }} />
          <div
            className="image2"
            style={{ backgroundImage: 'url(path_to_your_image_2)' }}
          />
          <div
            className="image3"
            style={{ backgroundImage: 'url(path_to_your_image_3)' }}
          />
          <div
            className="image4"
            style={{ backgroundImage: 'url(path_to_your_image_4)' }}
          />
        </IsometricImages>

      <LoginToggle />
      
      <MenuToggle />
    </>
  );
};

export default Menu;
