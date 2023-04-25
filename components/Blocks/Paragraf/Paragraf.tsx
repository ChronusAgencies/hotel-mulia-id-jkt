import React from 'react';
import Container from '../Container/Container';
import { TGeneral } from '@/utils/Types/Types';

const Paragraf = ({className,children} : TGeneral) => {
  return (
    <>
      <Container className={className}>
        <p>{children}</p>
      </Container>
    </>
  )
}

export default Paragraf