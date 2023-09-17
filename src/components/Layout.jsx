import React from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};
