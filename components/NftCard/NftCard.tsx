import React from 'react';
import styles from './NftCard.module.css';
import Tilt from 'react-parallax-tilt';
import NoImage from '../../assets/images/no-image.jpg';
import Image from 'next/image'

interface NftCardProps {
  name: string,
  image: string,
  description: string,
} 

const NftCard = (props: NftCardProps) => {
  const { name, image, description } = props;

  return (
    <Tilt
    perspective={800}
    className={styles.nftCard}
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    scale={1.05}
    transitionSpeed={2000}
    >
      <div className={styles.nftCardInner}>
        <Image 
          src={image || NoImage} 
          alt={name} 
          fill={true}
          />
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </Tilt>
  )
}

export default NftCard;