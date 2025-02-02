// components/title.js
'use client';
import SignOutButton from './SignOutButton';
import styles from '../styles/title.module.css';

export default function TitleBar({ title, onSignOut }) {
  return (
    <div className={styles.titleBar}>
      <h1>{title}</h1>
      <div className={styles.signOutButtonContainer}>
        <SignOutButton onSignOut={onSignOut} />
      </div>
    </div>
  );
}