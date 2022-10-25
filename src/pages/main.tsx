import React, { useState, useEffect } from 'react';

import Header from '../components/header';
import Step1 from '../components/step1';
import Step2 from '../components/step2';
import Step3 from '../components/step3';
import Step4 from '../components/step4';

import { useTranslate } from '../utils/locale';

import { MainContainer, ContentsContainer } from '../styles';

interface IProps {
  setLoading: (isLoading: boolean) => void;
}

const Main = ({ setLoading }: IProps) => {
  const { t, setLanguage } = useTranslate();
  const [currentStep, setStep] = useState(0);
  const [signer, setSigner] = useState('');
  const [selectedNft, setNft] = useState<{ nftId: string; name: string; imageURI: string; alreadyRegistered: boolean }>(
    {
      nftId: '',
      name: '',
      imageURI: '',
      alreadyRegistered: false,
    }
  );

  useEffect(() => {
    setLanguage('kr');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <MainContainer>
        <Header setStep={setStep} currentStep={currentStep} setSigner={setSigner} />
        <ContentsContainer currentStep={currentStep}>
          <Step1 setStep={setStep} t={t} />
          <Step2 setStep={setStep} t={t} setLoading={setLoading} setSigner={setSigner} isActive={currentStep === 1} />
          <Step3
            setStep={setStep}
            t={t}
            setLoading={setLoading}
            signer={signer}
            isActive={currentStep === 2}
            setNft={setNft}
          />
          <Step4 t={t} isActive={currentStep === 3} selectedNft={selectedNft} />
        </ContentsContainer>
      </MainContainer>
    </>
  );
};

export default React.memo(Main);
