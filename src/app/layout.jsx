// layout.jsx
'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TitleBar from "./components/title";
import DevicesList from "./components/DevicesList";
import AddDeviceForm from "./components/AddDeviceForm";
import LoginPage from "./components/LoginPage";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {isAuthenticated ? (
          <>
            <TitleBar title="Welcome to ReTrain!" onSignOut={handleSignOut} />
            <DevicesList />
            <AddDeviceForm />
          </>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </body>
    </html>
  );
}