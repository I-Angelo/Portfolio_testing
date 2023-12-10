import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import HomeButton from './HomeButton';

export default function RootLayout({ children }) {
  const [isHomeButtonRendered, setIsHomeButtonRendered] = useState(false);

  // Use useEffect to set the state when HomeButton is rendered
  useEffect(() => {
    setIsHomeButtonRendered(true);
  }, [children]);

  return (
    <div>
      <Outlet />
      <div>{children}</div>
      {isHomeButtonRendered && <HomeButton />}
    </div>
  );
}
