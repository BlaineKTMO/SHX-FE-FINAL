// app/components/DeviceBox.jsx
'use client';
import useDeviceStore from './stores/deviceStore';
import styles from '../styles/DeviceBox.module.css'; // Import CSS module
import TriggerApiRequest from './TriggerApiRequest';

export default function DeviceBox({ id, name, ip, status }) {
  const deleteDevice = useDeviceStore((state) => state.deleteDevice);

  return (
    <div className={styles.deviceBox}>
      <div className={styles.deviceHeader}>
        <h2 className={styles.deviceName}>{name}</h2>
        <span
          className={`${styles.status} ${
            status === 'Online' ? styles.statusOnline : styles.statusOffline
          }`}
        >
          {status}
        </span>
      </div>
      <p className={styles.ipAddress}>IP: {ip}</p>
      <button
        onClick={() => deleteDevice(id)}
        className={styles.deleteButton}
      >
        Delete
      </button>
      <TriggerApiRequest/>
    </div>
  );
}