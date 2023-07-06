import React from 'react';
import { Routes } from './src/routes/Router';
import { AuthProvider } from './src/context/Auth';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}


