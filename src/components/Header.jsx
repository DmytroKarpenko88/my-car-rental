import React from 'react';

import { Link } from 'react-router-dom';

import { NavBar } from './NavBar';
import { LogoIcon } from './icons';

export const Header = () => {
  return (
    <header className="flex justify-between bg-blue-500 p-5">
      <Link className="flex group flex-col w-36 hover:" to={'/'}>
        <div className="flex flex-col items-center">
          <LogoIcon className={' group-hover:fill-white'} />
          <span className="mx-auto group-hover:text-white">Car Rental</span>
        </div>
      </Link>

      <NavBar />
    </header>
  );
};
