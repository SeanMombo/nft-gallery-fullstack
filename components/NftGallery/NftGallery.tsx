// react image gallery

import React from 'react';
import useNftStore from '../../store/nfts';
import styles from './NftGallery.module.css';
import NftCard from '../NftCard/NftCard';

const NftGallery = () => {
  const nfts = useNftStore((state) => state.nfts);
  return (
    <div className={styles.nftGallery}>
      {nfts.map((nft, index) => {
        return (
          <NftCard
          key={index}
          image={nft.image.url}
          name={nft.name}
          />
          );
        })}
      </div>
  );
};

export default NftGallery;