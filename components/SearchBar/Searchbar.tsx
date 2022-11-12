//create a react search bar component with button
import React, { useState } from 'react';
import axios from 'axios';
import useNftStore from '../../store/nfts';
import styles from '../../styles/SearchBar.module.css';

const SearchBar = () => {
  // get store state and actions
  const {setNfts, setError} = useNftStore((state) => ({ setNfts: state.setNfts, setError: state.setError }));

  // create state for search bar
  const [address, setAddress] = useState('');

  //create a function to handle the search button click
  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    axios.get(`http://localhost:3001/api/nft/${address}`)
    .then((res) => {
      console.info(res.data)
      setNfts(res.data);
    })
    .catch((err) => {
      setError(err.response.data);
      setNfts([]);
    })
  };

  //create a function to handle the search bar input and store the value in state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input: HTMLInputElement = event.currentTarget;
    setAddress(input.value);
    setError('')
  }

  return (
    <form className={styles.searchbar}>
      <input onInput={handleChange} type="text" placeholder="Wallet Address" value={address} />
      <button onClick={onSubmit}>Fetch NFTs</button>
    </form>
  );
}

export default SearchBar;
