'use clients';

import React, {useState} from 'react';
import NavLinks from '@/components/Modules/NavLinks/NavLinks';
import Navbar from '@/components/Modules/Navbar/Navbar';

const Header = () => {

  const [isActive, setIsActive] = useState(false);

  const handleToggleActivate = () => {
    setIsActive(!isActive)
  };

  return (
    <>
      <Navbar activeClass={`${isActive && 'isActive'}`} clickEvent={handleToggleActivate}/>
      <NavLinks className={`${isActive && 'isActive'}`}/>
    </>
  )
}

export default Header