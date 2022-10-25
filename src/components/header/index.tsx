import React from 'react';
import { HeaderContainer, Wrapper } from './styles';
import styled from 'styled-components';

export const LogoutButton = styled.img`
  margin: 4rem 4rem 0 0;
`;

interface IProps {
  setStep: (step: number) => void;
  currentStep: number;
  setSigner: (signer: string) => void;
}

const Header = ({ setStep, currentStep, setSigner }: IProps) => {
  const logout = () => {
    setSigner('');
    setStep(0);
  };

  return (
    <HeaderContainer>
      <Wrapper>
        {currentStep > 0 && currentStep < 3 && <LogoutButton src='/images/ic_logout.png' onClick={logout} />}
      </Wrapper>
    </HeaderContainer>
  );
};

export default React.memo(Header);
