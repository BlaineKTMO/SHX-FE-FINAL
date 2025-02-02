// pages/main.js
import AddDeviceForm from '../components/AddDeviceForm';
import DevicesList from '../components/DevicesList';
import SignOutButton from '../components/SignOutButton';
import TriggerApiRequest from '../components/TriggerApiRequest';
import styles from '../styles/MainPage.module.css'; // Import CSS module for main page

export default function Main() {
  return (
    <div className={styles.mainPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>Main Page</h1>
        <SignOutButton />
      </div>
      <DevicesList />
      <AddDeviceForm />
      <TriggerApiRequest /> {/* Include the TriggerApiRequest component */}
    </div>
  );
}