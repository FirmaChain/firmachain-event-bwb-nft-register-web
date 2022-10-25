import { useEffect, useState } from 'react';
import { FirmaSDK } from '@firmachain/firma-js';
import axios from 'axios';

import { FIRMACHAIN_CONFIG } from '../../config';

const firmaSDK = new FirmaSDK(FIRMACHAIN_CONFIG);

export const useGetNftList = (isActive: boolean, signer: string, setLoading: (loading: boolean) => void) => {
  const [nftList, setNftList] = useState<
    { nftId: string; name: string; imageURI: string; alreadyRegistered: boolean }[]
  >([]);

  useEffect(() => {
    if (isActive) {
      axios
        .get(`${process.env.REACT_APP_API_HOST}/gallery/${signer}`)
        .then((response) => {
          const alreadyNftList = response.data.result.nftIdList;

          firmaSDK.Nft.getNftItemAllFromAddress(signer)
            .then(async (result) => {
              let array: { nftId: string; name: string; imageURI: string; alreadyRegistered: boolean }[] = [];
              for (const nft of result.dataList) {
                const nftId = nft.id;
                const response = await axios.get(nft.tokenURI);
                const name = response.data.name;
                const imageURI = response.data.imageURI;

                array.push({ nftId, name, imageURI, alreadyRegistered: alreadyNftList.includes(nftId) });
              }
              array.sort((a: any, b: any) => b.nftId - a.nftId);
              setNftList(array);
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isActive]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    nftList,
  };
};
