// components/LoginPage.jsx
'use client';
import { useState, useEffect } from 'react';
import styles from '../styles/LoginPage.module.css';

export default function LoginPage({ onLogin }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [typingComplete, setTypingComplete] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    const typingDuration = 4000; // Duration of the typing animation in milliseconds
    const typingFadeOutDuration = 500; // Duration of the typing fade-out animation in milliseconds
    const totalDuration = typingDuration + typingFadeOutDuration;

    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    // Implement your authentication logic here
    if (formData.email === 'Hello@gmail.com' && formData.password === 'Hello') {
      onLogin(); // Call the onLogin function to navigate to the main page
    } else {
      alert('Invalid credentials');
      setIsLoggingIn(false);
    }
  };

  return (
    <div className={styles.LoginPage}>
      <div className={`${styles.companyNameBackground} ${typingComplete ? styles.typingComplete : ''}`}>ReTrain</div>
      <form onSubmit={handleSubmit} className={styles.LoginForm}>
        {!isLoggingIn && (
          <>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={styles.inputField}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className={styles.inputField}
              required
            />
          </>
        )}
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
    </div>
  );
}