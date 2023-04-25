import React from 'react';
import Container from '@/components/Blocks/Container/Container';
import Paragraf from '@/components/Blocks/Paragraf/Paragraf';
import Styles from './Bubble.module.scss';
import { NextPage } from 'next';
import { IDataChatProps } from '@/utils/Interfaces/Interfaces';

const Bubble : NextPage<IDataChatProps>= (props) => {

  const {userMessage, messageTime} = props

  return (
    <>
      <Container className={Styles.container}>
        <Paragraf className={Styles.message}>
          {userMessage}
        </Paragraf>
        <Paragraf className={Styles.time}>
          {messageTime}
        </Paragraf>
      </Container>
    </>
  )
}

export default Bubble