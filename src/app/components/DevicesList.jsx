// app/components/DevicesList.jsx
'use client';
import useDeviceStore from './stores/deviceStore';
import DeviceBox from './DeviceBox';
import styles from '../styles/DevicesList.module.css'; // Import CSS module

export default function DevicesList() {
    const devices = useDeviceStore((state) => state.devices);
  
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