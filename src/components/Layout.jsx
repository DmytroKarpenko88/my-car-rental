import React from 'react';
import { Header } from './header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <div className="container w-[1184px] p-0 mx-auto">
      <Header />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};
