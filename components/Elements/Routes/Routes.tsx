import React from 'react';
import Link from 'next/link';
import Container from '@/components/Blocks/Container/Container';
import { NextPage } from 'next';
import { IRoutesProps } from '@/utils/Interfaces/Interfaces';

const Routes : NextPage<IRoutesProps> = (props) => {

  const {className, href, children, linkClassName} = props

  return (
    <>
      <Container className={className}>
        <Link href={href} className={linkClassName}>{children}</Link>
      </Container>
    </>
  )
}

export default Routes