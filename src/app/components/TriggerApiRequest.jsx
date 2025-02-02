// components/TriggerApiRequest.jsx
'use client';
import { useEffect } from 'react';
import { getUsers } from '../utils/api';

export default function TriggerApiRequest() {
  useEffect(() => {
    const id = setInterval(async () => {
      try {
        const status = await fetch("http://192.168.100.162:5000", {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        } catch (error) {
        console.error('Error fetching users:', error);
      }
    }, 5000); // Set the interval time in milliseconds (e.g., 5000ms = 5 seconds)

    return () => clearInterval(id);
  }, []);

  return null; // No need to render anything
}