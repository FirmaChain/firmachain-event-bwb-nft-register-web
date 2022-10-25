import React, { useEffect } from 'react';

import { Step3Wrapper } from '../../styles';
import { NftTypo, GuideTypo, SubGuideTypo, BottomTypo, NftImage, NftLabel } from './styles';

interface IProps {
  t: (name: string) => string;
  isActive: boolean;
  selectedNft: { nftId: string; name: string; imageURI: string };
}

const Step4 = ({ t, isActive, selectedNft }: IProps) => {
  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  }, [isActive]);
  return (
    <Step3Wrapper>
      <NftTypo>
        [#{selectedNft.nftId}] {selectedNft.name}
      </NftTypo>
      <GuideTypo>{t('step4GuideText1')}</GuideTypo>
      <SubGuideTypo>{t('step4GuideText2')}</SubGuideTypo>
      <NftImage src={selectedNft.imageURI} />
      <NftLabel>{selectedNft.name}</NftLabel>
      <BottomTypo>{t('step4GuideText3')}</BottomTypo>
    </Step3Wrapper>
  );
};

export default React.memo(Step4);
