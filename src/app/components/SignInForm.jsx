'use client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/SignInForm.module.css';

export default function SignInForm({ onLogin }) {
  const [email, setEmail] = useState('Hello@gmail.com');
  const [password, setPassword] = useState('Hello');
  // const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your authentication logic here
    if (email === 'Hello@gmail.com' && password === 'Hello') {
      onLogin(); // Call the onLogin function to navigate to the main page
      router.push('/main'); // Navigate to the main page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.SignInForm}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.inputField}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.inputField}
        required
      />
      <button type="submit" className={styles.submitButton}>Sign In</button>
    </form>
  );
}