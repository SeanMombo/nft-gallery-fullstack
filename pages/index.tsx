import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar/Searchbar'
import NftGallery from '../components/NftGallery/NftGallery'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nft Gallery</title>
      </Head>
      <h1>NFT Gallery</h1>
      <h4>By: Sean Mombo</h4>
      <SearchBar/>
      <ErrorMessage/>
      <NftGallery/>
    </div>
  )
}
