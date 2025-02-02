// app/stores/deviceStore.js
import { create } from 'zustand';

const useDeviceStore = create((set) => ({
    devices: [
      { id: 1, name: 'Router', ip: '192.168.1.1', status: 'Online' },
      { id: 2, name: 'Switch', ip: '192.168.1.2', status: 'Offline' },
      { id: 3, name: 'Firewall', ip: '192.168.1.3', status: 'Online' },
    ],
    addDevice: (device) =>
      set((state) => ({
        devices: [
          ...state.devices,
          {
            ...device,
            id: state.devices.length > 0 ? state.devices[state.devices.length - 1].id + 1 : 1,
          },
        ],
      })),
    deleteDevice: (id) =>
      set((state) => ({
        devices: state.devices.filter((device) => device.id !== id),
      })),
  }));
  
  export default useDeviceStore;