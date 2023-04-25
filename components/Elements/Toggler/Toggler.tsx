import React from 'react';
import Container from '@/components/Blocks/Container/Container';
import { NextPage } from 'next';
import { TGeneral } from '@/utils/Types/Types';

type TToggleProps = TGeneral & {
  clickEvent : (event : React.MouseEvent<HTMLElement>) => void
}

const Toggler = ({className, children, clickEvent} : TToggleProps) => {
  
  
  return (
    <>
      <Container className={className} clickEvent={clickEvent}>
        {children}
      </Container>
    </>
  )
}

export default Toggler