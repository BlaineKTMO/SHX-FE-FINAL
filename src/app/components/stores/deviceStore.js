// app/stores/deviceStore.js
import { create } from 'zustand';

const useDeviceStore = create((set) => ({
  devices: [
    { id: 1, name: 'Router', ip: '192.168.1.1', status: 'Online' },
    { id: 2, name: 'Switch', ip: '192.168.1.2', status: 'Offline' },
  ],
  addDevice: (device) =>
    set((state) => ({
      devices: [...state.devices, { ...device, id: state.devices.length + 1 }],
    })),
  deleteDevice: (id) =>
    set((state) => ({
      devices: state.devices.filter((device) => device.id !== id),
    })),
}));

export default useDeviceStore;