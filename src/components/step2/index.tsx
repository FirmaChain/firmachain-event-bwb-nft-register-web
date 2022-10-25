import React, { useState } from 'react';

import RequestQR from '../requestQR';

import { Step2Wrapper } from '../../styles';
import { GuideTypo, TimerWrapper, TimerTypo, RefreshButton } from './styles';

interface IProps {
  setStep: (step: number) => void;
  t: (name: string) => string;
  setLoading: (isLoading: boolean) => void;
  setSigner: (signer: string) => void;
  isActive: boolean;
}

const Step2 = ({ setStep, t, setLoading, setSigner, isActive }: IProps) => {
  const [timerText, setTimerText] = useState('00:00');
  const [isRefresh, setRefresh] = useState(false);

  const requestQRCallback = (result: any) => {
    setSigner(result.signer);
    setLoading(true);

    setTimeout(() => {
      setStep(2);
    }, 1000);
  };

  const refreshQR = () => {
    setRefresh(true);
  };

  return (
    <Step2Wrapper>
      <GuideTypo>{t('step2GuideText')}</GuideTypo>
      <RequestQR
        requestType='login'
        t={t}
        setLoading={() => {}}
        isActive={isActive}
        setActive={() => {}}
        isRefresh={isRefresh}
        setRefresh={setRefresh}
        setTimerText={setTimerText}
        callback={requestQRCallback}
        qrSize={240}
      />
      <TimerWrapper onClick={refreshQR}>
        <TimerTypo>{timerText}</TimerTypo>
        <RefreshButton />
      </TimerWrapper>
    </Step2Wrapper>
  );
};

export default React.memo(Step2);
