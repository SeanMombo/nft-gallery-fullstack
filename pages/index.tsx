import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar/Searchbar'
import NftGallery from '../components/NftGallery/NftGallery'
export default function Home() {
  return (
    <div className={styles.container}>
      <SearchBar/>
      <NftGallery/>
    </div>
  )
}
