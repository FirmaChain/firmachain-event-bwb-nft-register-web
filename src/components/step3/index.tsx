import React, { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';
import axios from 'axios';

import Modal from '../modal';
import { useGetNftList } from './hook';
import { Step3Wrapper } from '../../styles';
import {
  GuideTypo,
  NftList,
  NftCard,
  NftImageContainer,
  NftBorder,
  NftImage,
  NftLabel,
  NftName,
  RegisterButton,
  NftModalCard,
  NftModalImage,
  NftModalContents,
  NftModalTitle,
  NftModalBody,
  NftModalName,
  NftModalGuide,
  NftModalButton,
  NftIdLabel,
  ModalCloseButton,
  NextArrow,
  PrevArrow,
  ArrowImg,
  StyledSlider,
  PasswordModalContents,
  PasswordModalBody,
  PasswordModalCard,
  PasswordModalButton,
  NumberPad,
  NumberItem,
} from './styles';

interface IProps {
  setStep: (step: number) => void;
  t: (name: string) => string;
  setLoading: (isLoading: boolean) => void;
  signer: string;
  isActive: boolean;
  setNft: React.Dispatch<React.SetStateAction<{ nftId: string; name: string; imageURI: string }>>;
}

const Step3 = ({ setStep, t, setLoading, signer, isActive, setNft }: IProps) => {
  const [registerModalState, setRegisterModalState] = useState(false);
  const [passwordModalState, setPasswordModalState] = useState(false);
  const [selectedNftIndex, setSelectedNftIndex] = useState(-1);
  const [password, setPassword] = useState('');

  const { nftList } = useGetNftList(isActive, signer, setLoading);

  useEffect(() => {
    if (nftList.length === 1) setSelectedNftIndex(0);
  }, [nftList]);

  const onClickRegisterButton = () => {
    if (selectedNftIndex === -1) return;

    setRegisterModalState(true);
  };

  const onClickRegisterCancel = () => {
    setRegisterModalState(false);
  };

  const onClickPasswordCancel = () => {
    setPasswordModalState(false);
  };

  const onClickRegisterNext = () => {
    setRegisterModalState(false);
    setPasswordModalState(true);
  };

  const onclickSubmit = () => {
    if (password.length !== 4) return;

    setRegisterModalState(false);
    setPasswordModalState(false);
    setLoading(true);

    axios
      .post(`${process.env.REACT_APP_API_HOST}/gallery`, {
        signer,
        nftId: nftList[selectedNftIndex].nftId,
        code: password,
      })
      .then(() => {
        setNft(nftList[selectedNftIndex]);
        setLoading(false);
        setStep(3);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addPassword = (num: string) => {
    setPassword((prev) => prev + num);
  };

  const removePassword = () => {
    setPassword((prev) => prev.slice(0, -1));
  };

  return (
    <Step3Wrapper>
      <Modal isActive={registerModalState}>
        <NftModalCard>
          <NftModalImage src={selectedNftIndex !== -1 ? nftList[selectedNftIndex].imageURI : ''}>
            <NftIdLabel>#{selectedNftIndex !== -1 && nftList[selectedNftIndex].nftId}</NftIdLabel>
          </NftModalImage>
          <NftModalContents>
            <NftModalTitle>
              {t('step3ModalTitle')}
              <ModalCloseButton onClick={onClickRegisterCancel} />
            </NftModalTitle>
            <NftModalBody>
              <NftModalName>{selectedNftIndex !== -1 && nftList[selectedNftIndex].name}</NftModalName>
              <NftModalGuide>{t('step3ModalGuideText')}</NftModalGuide>
            </NftModalBody>
            <NftModalButton onClick={onClickRegisterNext}>{t('step3ModalButton')}</NftModalButton>
          </NftModalContents>
        </NftModalCard>
      </Modal>

      <Modal isActive={passwordModalState}>
        <>
          <PasswordModalCard>
            <PasswordModalContents>
              <NftModalTitle>
                {t('step3ModalTitle2')}
                <ModalCloseButton onClick={onClickPasswordCancel} />
              </NftModalTitle>
              <PasswordModalBody>
                <OtpInput
                  value={password}
                  onChange={setPassword}
                  numInputs={4}
                  shouldAutoFocus={true}
                  inputStyle={{ fontSize: '3rem', padding: '1rem', margin: '1rem', width: '3.5rem' }}
                />

                <NftModalGuide>{t('step3ModalText2')}</NftModalGuide>
              </PasswordModalBody>
              <PasswordModalButton onClick={onclickSubmit}>{t('step3ModalButton2')}</PasswordModalButton>
            </PasswordModalContents>
          </PasswordModalCard>
          <NumberPad>
            <NumberItem onClick={() => addPassword('1')}>1</NumberItem>
            <NumberItem onClick={() => addPassword('2')}>2</NumberItem>
            <NumberItem onClick={() => addPassword('3')}>3</NumberItem>
            <NumberItem onClick={() => addPassword('4')}>4</NumberItem>
            <NumberItem onClick={() => addPassword('5')}>5</NumberItem>
            <NumberItem onClick={() => addPassword('6')}>6</NumberItem>
            <NumberItem onClick={() => addPassword('7')}>7</NumberItem>
            <NumberItem onClick={() => addPassword('8')}>8</NumberItem>
            <NumberItem onClick={() => addPassword('9')}>9</NumberItem>
            <NumberItem onClick={() => addPassword('0')}>0</NumberItem>
            <NumberItem onClick={() => removePassword()}>{'←'}</NumberItem>
          </NumberPad>
        </>
      </Modal>

      <GuideTypo>{t('step3GuideText')}</GuideTypo>
      <NftList>
        <StyledSlider
          arrows={true}
          dots={false}
          infinite={false}
          slidesToShow={3}
          slidesToScroll={3}
          prevArrow={
            <PrevArrow>
              <ArrowImg src='/images/ic_arrow_next.png' />
            </PrevArrow>
          }
          nextArrow={
            <NextArrow>
              <ArrowImg src='/images/ic_arrow_next.png' />
            </NextArrow>
          }
        >
          {nftList.map((nft, index) => {
            return (
              <NftCard key={index} onClick={() => setSelectedNftIndex(index)}>
                <NftImageContainer>
                  <NftBorder isActive={index === selectedNftIndex} />
                  <NftImage isActive={index === selectedNftIndex} src={nft.imageURI} />
                  <NftLabel isActive={index === selectedNftIndex}>#{nft.nftId}</NftLabel>
                </NftImageContainer>
                <NftName>{nft.name}</NftName>
              </NftCard>
            );
          })}
        </StyledSlider>
      </NftList>
      <RegisterButton onClick={onClickRegisterButton}>{t('step3Button')}</RegisterButton>
    </Step3Wrapper>
  );
};

export default React.memo(Step3);
