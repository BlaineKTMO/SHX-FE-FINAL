// app/components/DevicesList.jsx
'use client';
import useDeviceStore from './stores/deviceStore';
import DeviceBox from './DeviceBox';
import styles from '../styles/DevicesList.module.css'; // Import CSS module
import { getUsers } from '../utils/api';
import { useEffect, useState } from 'react';


export default function DevicesList() {
    const [users, setUsers] = useState([]);
    const devices = useDeviceStore((state) => state.devices);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const data = await getUsers();
          setUsers(data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      fetchUsers();
    }, []);
    return (
      <div className={styles.devicesList}>
        {devices.map((device) => (
          <DeviceBox
            key={device.id} // Ensure this is unique
            id={device.id}
            name={device.name}
            ip={device.ip}
            status={device.status}
          />
        ))}
      </div>
    );
  }