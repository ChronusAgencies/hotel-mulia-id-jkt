import React from 'react';
import Routes from '@/components/Elements/Routes/Routes';
import Toggler from '@/components/Elements/Toggler/Toggler';
import Container from '@/components/Blocks/Container/Container';
import Styles from './Navbar.module.scss';
import Image from 'next/image';
import Logo from '@/public/ImgAssets/mulia_logo.png';
import { NextPage } from 'next';

interface INavToggleProps {
  activeClass : string,
  clickEvent : (event : React.MouseEvent<HTMLElement>) => void
}



const Navbar : NextPage<INavToggleProps> = (props) => {

  const {activeClass, clickEvent} = props;

  return (
    <>
      <Container className={Styles.container}>
        <Routes className={Styles.logo_container} href={'/'} linkClassName={Styles.logo}>
          <Image src={Logo} alt='hotel-mulia-logo' width={56} height={42} />
        </Routes>
        <Toggler className={`${Styles.nav_toggler} ${Styles[activeClass]}`} clickEvent={clickEvent}>
          <span></span>
          <span></span>
          <span></span>
        </Toggler>
      </Container>
    </>
  )
}

export default Navbar