import { TGeneral } from '@/utils/Types/Types';
import React from 'react';

type TContainerProps = TGeneral & {
  clickEvent? : (event : React.MouseEvent<HTMLElement>) => void
}

const Container = ({className, children, clickEvent} : TContainerProps ) => {
  return (
    <div className={className} onClick={clickEvent}>
      {children}
    </div>
  )
}

export default Container