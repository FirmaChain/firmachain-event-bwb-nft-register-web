import React from 'react';

import { ModalWrapper } from '../../styles';

interface IProps {
  isActive: boolean;
  children: JSX.Element;
}

const Modal = ({ isActive, children }: IProps) => {
  return <ModalWrapper active={isActive}>{children}</ModalWrapper>;
};

export default React.memo(Modal);
