// components/SignOutButton.jsx
'use client';
import { useRouter } from 'next/router';
import styles from '../styles/SignOutButton.module.css';

export default function SignOutButton({ onSignOut }) {
//   const router = useRouter();

  const handleSignOut = () => {
    onSignOut();
    router.push('/login'); // Navigate to the login page
  };

  return (
    <button onClick={handleSignOut} className={styles.signOutButton}>
      Sign Out
    </button>
  );
}