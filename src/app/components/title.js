import React from 'react';
import styles from '../styles/title.module.css';

const TitleBar = ({ title }) => {
  return (
    <div className={styles.titlebar}>
      <h1>{title}</h1>
    </div>
  );
};

export default TitleBar;