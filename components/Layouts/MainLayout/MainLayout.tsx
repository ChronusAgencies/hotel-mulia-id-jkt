import React, { HTMLProps } from 'react';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import Footer from '../Footer/Footer';

const MainLayout = ({children} : HTMLProps<HTMLAnchorElement>) => {
  return (
    <>
      <Header/>
      <Modal/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default MainLayout