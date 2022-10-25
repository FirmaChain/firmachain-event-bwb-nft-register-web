import React from 'react';

import { Step1Wrapper } from '../../styles';
import { LogoImg, StartButton } from './styles';

interface IProps {
  setStep: (step: number) => void;
  t: (name: string) => string;
}

const Step1 = ({ setStep, t }: IProps) => {
  return (
    <Step1Wrapper>
      <LogoImg src='/images/img_title.png' />
      <StartButton onClick={() => setStep(1)}>{t('step1ButtonText')}</StartButton>
    </Step1Wrapper>
  );
};

export default React.memo(Step1);
