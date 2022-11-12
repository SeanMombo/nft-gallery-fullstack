// display error message react component
import styles from './ErrorMessage.module.css';
import React from 'react';
import useNftStore from '../../store/nfts';

const ErrorMessage = () => {
  const { error } = useNftStore((state) => ({ error: state.error}));
  if (!error) {
    return null;
  }
  return (
    <div className={styles.errorMessage}>
      <p>ERROR: {error}</p>
    </div>
  );
};

export default ErrorMessage;