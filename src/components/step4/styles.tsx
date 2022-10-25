import styled from 'styled-components';

export const NftTypo = styled.div`
  font-size: 4.4rem;
  font-weight: bold;
  line-height: 5.8rem;
  color: #316ff5;
  white-space: pre-wrap;
`;

export const GuideTypo = styled.div`
  font-size: 4.4rem;
  font-weight: bold;
  line-height: 5.8rem;
  color: #292929;
  white-space: pre-wrap;
`;

export const SubGuideTypo = styled.div`
  font-size: 2.4rem;
  font-weight: 500;
  color: #404040;
  margin-top: 1.6rem;
  margin-bottom: 5.2rem;
`;

export const BottomTypo = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: #707070;
  margin-top: 4.7rem;
`;

export const NftImage = styled.div<{ src: string }>`
  width: 29rem;
  height: 29rem;
  border-radius: 1rem;
  background-color: #ccc;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  background-image: url('${(props) => props.src}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const NftLabel = styled.div`
  width: 29rem;
  height: 5rem;
  border-radius: 1rem;
  box-shadow: 0 0.3rem 1rem 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: #404040;
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 5rem;
  margin: 2rem 0;
`;
