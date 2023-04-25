import React from 'react';
import Container from '@/components/Blocks/Container/Container';
import Styles from './ChatInput.module.scss';
import { TGeneral } from '@/utils/Types/Types';

type TChatInput = TGeneral & {
  changeEvent : (event : React.ChangeEvent<HTMLTextAreaElement>) => void,
  textValue : string
}

const ChatInput = ({className, changeEvent, textValue} : TChatInput) => {
  return (
    <>
      <Container className={Styles.container}>
        <textarea name="chatInput" id="chatInput" cols={30} rows={10} placeholder='Enter your messages...' value={textValue} className={className} onChange={changeEvent}></textarea>
      </Container>
    </>
  )
}

export default ChatInput