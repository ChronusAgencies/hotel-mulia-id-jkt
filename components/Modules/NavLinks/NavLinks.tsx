import React from 'react';
import Container from '@/components/Blocks/Container/Container';
import Routes from '@/components/Elements/Routes/Routes';
import Styles from './NavLinks.module.scss';
import { TGeneral } from '@/utils/Types/Types';

const NavLinks = ({className} : TGeneral) => {
  return (
    <>
      <nav className={`${Styles.wrapper} ${Styles[className]}`}>
        <Container className={Styles.container}>
          {/* link start */}
          <Container className={Styles.link_wrapper}>
            <Routes className={Styles.link_container} linkClassName={Styles.main_link} href={'/'}>
              ACCOMODATIONS
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 2C20.5 1.17157 19.8284 0.500001 19 0.500001H5.5C4.67157 0.500001 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5V2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939341L0.93934 17.9393L3.06066 20.0607Z" fill="#232323"/>
              </svg>
            </Routes>
            <Routes className={Styles.link_container} linkClassName={Styles.sec_link} href={'/'}>
              dinings
            </Routes>
          </Container>
          {/* link start */}
          <Container className={Styles.link_wrapper}>
            <Routes className={Styles.link_container} linkClassName={Styles.main_link} href={'/'}>
            EVENTS
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 2C20.5 1.17157 19.8284 0.500001 19 0.500001H5.5C4.67157 0.500001 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5V2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939341L0.93934 17.9393L3.06066 20.0607Z" fill="#232323"/>
              </svg>
            </Routes>
            <Routes className={Styles.link_container} linkClassName={Styles.sec_link} href={'/'}>
            weddings
            </Routes>
          </Container>
          {/* link start */}
          <Container className={Styles.link_wrapper}>
            <Routes className={Styles.link_container} linkClassName={Styles.main_link} href={'/'}>
            ACTIVITIES
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 2C20.5 1.17157 19.8284 0.500001 19 0.500001H5.5C4.67157 0.500001 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5V2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939341L0.93934 17.9393L3.06066 20.0607Z" fill="#232323"/>
              </svg>
            </Routes>
            <Routes className={Styles.link_container} linkClassName={Styles.sec_link} href={'/'}>
            tours
            </Routes>
          </Container>
          {/* link start */}
          <Container className={Styles.link_wrapper}>
            <Routes className={Styles.link_container} linkClassName={Styles.main_link} href={'/'}>
            MULIA PRIVILAGE
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 2C20.5 1.17157 19.8284 0.500001 19 0.500001H5.5C4.67157 0.500001 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5V2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939341L0.93934 17.9393L3.06066 20.0607Z" fill="#232323"/>
              </svg>
            </Routes>
            <Routes className={Styles.link_container} linkClassName={Styles.sec_link} href={'/'}>
            mulia gifts
            </Routes>
          </Container>
          {/* link start */}
          <Container className={Styles.link_wrapper}>
            <Routes className={Styles.link_container} linkClassName={Styles.main_link} href={'/'}>
            SPECIAL OFFERS
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 2C20.5 1.17157 19.8284 0.500001 19 0.500001H5.5C4.67157 0.500001 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5V2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939341L0.93934 17.9393L3.06066 20.0607Z" fill="#232323"/>
              </svg>
            </Routes>
            <Routes className={Styles.link_container} linkClassName={Styles.sec_link} href={'/'}>
            blogs
            </Routes>
          </Container>
        </Container>
      </nav>
    </>
  )
}

export default NavLinks