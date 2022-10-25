import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  background-image: url('/images/img_background.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const ContentsContainer = styled.div<{ currentStep: number }>`
  width: 100%;
  height: 100%;
  flex: 1 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > div {
    display: none;
    flex: 1;
  }
  & > div:nth-child(${(props) => props.currentStep + 1}) {
    display: flex;
  }
`;

const Step = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Step1Wrapper = styled(Step)``;

export const Step2Wrapper = styled(Step)``;

export const Step3Wrapper = styled(Step)``;

export const LoadingWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  width: 100vw;
  height: 100vh;
  background-color: #000000bb;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.active ? `` : `display:none`)}
`;

export const ModalWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  width: 100vw;
  height: 100vh;
  background-color: #000000bb;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.active ? `` : `display:none`)}
`;

export const RequestQRWrapper = styled.div`
  width: 28.8rem;
  height: 28.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 1.5rem;
  box-shadow: 0 0.3rem 2rem 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-top: 3.5rem;
`;

export const LoginWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-bottom: 0.2rem;
  background-color: #000000bb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) => (props.active ? `` : `display:none`)}
`;

export const LoginTextWrapper = styled.div`
  diplay: flex;
  flex-direction: column;
  height: 20rem;
  justify-content: center;
  align-items: center;
  & > div {
    text-align: center;
    font-size: 4.8rem;
    color: #eee;
    margin-top: 3rem;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
  }
`;

export const LoginText = styled.div<{ active: boolean }>`
  ${(props) => (props.active ? `` : `display:none`)}
`;
