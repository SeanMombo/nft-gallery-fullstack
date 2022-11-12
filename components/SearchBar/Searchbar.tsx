//create a react search bar component with button
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useNftStore from '../../store/nfts';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  // get store state and actions
  const { setNfts, setError } = useNftStore((state) => ({ setNfts: state.setNfts, setError: state.setError }));

  // create state for search bar
  const [address, setAddress] = useState('');

  //create a function to handle the search button click
  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(address)

    // prevent empty search
    if (address === '') {
      setError('Address cannot be empty');
      setNfts([]);
      return 
    }

    // prevent search with spaces
    if (address.includes(' ')) {
      setError('Address cannot contain spaces');
      setNfts([]);
      return 
    }

    // fetch nfts from api
    axios.get(`/api/nft/${address}`)
    .then((res) => {
      setError('')
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
  }

  return (
    <form className={styles.searchbar}>
      <input onInput={handleChange} type="text" placeholder="Wallet Address" value={address} />
      <button onClick={onSubmit}>Fetch NFTs</button>
    </form>
  );
}

export default SearchBar;
