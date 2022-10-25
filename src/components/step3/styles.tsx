import styled from 'styled-components';
import Slider from 'react-slick';

export const GuideTypo = styled.div`
  font-size: 4.4rem;
  font-weight: bold;
  line-height: 5.8rem;
  color: #292929;
  white-space: pre-wrap;
`;

export const NftList = styled.div`
  margin-top: 4rem;
  width: 80rem;
`;

export const NftCard = styled.div`
  width: 22rem !important;
  display: flex;
  flex-direction: column;
  &:focus {
    outline: none;
  }
`;

export const NftImageContainer = styled.div`
  position: relative;
  width: 22rem;
  height: 22rem;
  border-radius: 1rem;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
`;

export const NftBorder = styled.div<{ isActive: boolean }>`
  ${(props) => props.isActive === false && `filter: grayscale(100%);`}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/img_nft_active_bg.png');
  background-size: 22rem;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const NftImage = styled.div<{ src: string; alreadyRegistered: boolean; isActive: boolean }>`
  ${(props) => props.alreadyRegistered && `filter: grayscale(100%);opacity:0.3;`}
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  width: calc(100% - 2.4rem);
  height: calc(100% - 2.4rem);
  border-radius: 1rem;
  background-image: url('${(props) => props.src}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const NftLabel = styled.div<{ isActive: boolean }>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 6.7rem;
  height: 2.7rem;
  line-height: 2.6rem;
  background-image: url('/images/img_nft_active_label.png');
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  ${(props) => props.isActive === false && `filter: grayscale(100%);`}
`;

export const NftName = styled.div`
  margin-top: 2rem;
  max-width: 22rem;
  line-height: 2.6rem;
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  color: #404040;
`;

export const RegisterButton = styled.div`
  width: 28rem;
  height: 6rem;
  line-height: 6rem;
  font-size: 2.4rem;
  color: white;
  border-radius: 0.8rem;
  background-color: #316ff5;
  margin-top: 5rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const NftModalCard = styled.div`
  width: 73rem;
  height: 37rem;
  border-radius: 1rem;
  background-color: white;
  display: flex;
`;

export const PasswordModalCard = styled.div`
  width: 40rem;
  height: 37rem;
  border-radius: 1rem;
  background-color: white;
  display: flex;
`;

export const NftModalImage = styled.div<{ src: string }>`
  position: relative;
  width: 37rem;
  height: 37rem;
  flex-shrink: 0;
  border-radius: 1rem 0 0 1rem;
  background-image: url('${(props) => props.src}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const NftModalContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const PasswordModalContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const NftModalTitle = styled.div`
  position: relative;
  width: calc(100% - 4rem - 4rem);
  height: calc(8.5rem - 6rem);
  flex-shrink: 0;
  font-size: 2.4rem;
  font-weight: bold;
  color: #292929;
  text-align: center;
  padding: 3rem 2rem;
  border-bottom: 0.1rem solid #ddd;
`;

export const NftModalBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

export const PasswordModalBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

export const NftModalName = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  color: #316ff5;
`;

export const NftModalGuide = styled.div`
  font-size: 2.2rem;
  color: #404040;
`;

export const NftModalButton = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 6.5rem;
  border-radius: 0 0 1rem 0;
  background-color: #316ff5;
  font-size: 2.2rem;
  line-height: 6.5rem;
  color: white;
  font-weight: 500;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const PasswordModalButton = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 6.5rem;
  border-radius: 0 0 1rem 1rem;
  background-color: #316ff5;
  font-size: 2.2rem;
  line-height: 6.5rem;
  color: white;
  font-weight: 500;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const ModalCloseButton = styled.div`
  position: absolute;
  top: 0;
  right: -2rem;
  width: 1.6rem;
  height: 1.6rem;
  padding: 2rem;
  cursor: pointer;
  background-image: url('/images/ic_close.png');
  background-size: 1.6rem;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const NextArrow = styled.div`
  width: 6rem;
  height: 7.4rem;
  position: absolute;
  top: 11.5rem;
  right: -6rem;
  z-index: 3;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const PrevArrow = styled.div`
  width: 6rem;
  height: 7.4rem;
  position: absolute;
  display: none !important;
  top: 11.5rem;
  left: -6rem;
  z-index: 3;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  & > img {
    transform: scaleX(-1);
  }
`;

export const ArrowImg = styled.img``;

export const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

export const NftIdLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 7.5rem;
  height: 3rem;
  line-height: 3rem;
  background-color: #919aac;
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  border-radius: 0 1rem 0 1rem;
`;

export const NumberPad = styled.div`
  width: calc(100% - 20rem);
  margin: 0 10rem;
  position: absolute;
  bottom: 3rem;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: stretch;
  align-content: stretch;
  margin-top: 2rem;
`;

export const NumberItem = styled.div`
  flex: 1;
  height: 8rem;
  line-height: 8rem;
  font-size: 1.6rem;
  color: black;
  text-align: center;
  border-top: 1px solid #bbb;
  border-right: 1px solid #bbb;
  background-color: white;
  font-size: 2.5rem;
  &:last-child {
    border-right: 0;
  }
`;
