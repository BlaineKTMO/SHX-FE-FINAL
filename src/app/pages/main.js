// pages/main.js
import AddDeviceForm from '../components/AddDeviceForm';
import DevicesList from '../components/DevicesList';
import SignOutButton from '../components/SignOutButton';

export default function Main() {
  return (
    <div>
      <h1>Main Page</h1>
      <SignOutButton />
      <DevicesList />
      <AddDeviceForm />
    </div>
  );
}