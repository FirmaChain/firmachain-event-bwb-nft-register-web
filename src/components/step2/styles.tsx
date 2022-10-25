import styled from 'styled-components';

export const GuideTypo = styled.div`
  font-size: 4.4rem;
  font-weight: bold;
  line-height: 5.8rem;
  color: #292929;
  white-space: pre-wrap;
`;

export const TimerWrapper = styled.div`
  width: 14.2rem;
  height: 4.4rem;
  border-radius: 2.2rem;
  box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);
  background-color: #404040;
  margin-top: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const TimerTypo = styled.div`
  font-size: 2.4rem;
  color: white;
  margin-left: 1rem;
`;

export const RefreshButton = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url('/images/ic_refresh.png');
  background-size: contain;
  background-repeat: no-repeat;
`;
