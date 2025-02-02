// app/components/AddDeviceForm.jsx
'use client';
import { useState } from 'react';
import useDeviceStore from './stores/deviceStore';
import styles from '../styles/AddDeviceForm.module.css'; // Import CSS module

export default function AddDeviceForm() {
  const [name, setName] = useState('');
  const [ip, setIp] = useState('');
  const addDevice = useDeviceStore((state) => state.addDevice);

  const handleSubmit = (e) => {
    e.preventDefault();
    addDevice({ name, ip, status: 'Online' });
    setName('');
    setIp('');
  };

  return (
<form onSubmit={handleSubmit} className={styles.AddDeviceForm}>
  <input
    type="text"
    placeholder="Device Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className={styles.inputField}
    required
  />
  <input
    type="text"
    placeholder="IP Address"
    value={ip}
    onChange={(e) => setIp(e.target.value)}
    className={styles.inputField}
    required
  />
  <button type="submit" className={styles.submitButton}>
    Add Device
  </button>
</form>
  );
}