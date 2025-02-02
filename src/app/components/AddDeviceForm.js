// app/components/AddDeviceForm.jsx
'use client';
import { useState } from 'react';
import useDeviceStore from './stores/deviceStore';

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
    <form onSubmit={handleSubmit} className="mb-8">
      <input
        type="text"
        placeholder="Device Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
        required
      />
      <input
        type="text"
        placeholder="IP Address"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        className="border p-2 mr-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Device
      </button>
    </form>
  );
}