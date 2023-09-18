import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4 gap-2">
          <li>
            <NavLink
              className="py-[14px] px-[44px] rounded-[12px] hover:bg-indigo-500 hover:text-white "
              to={'/'}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="py-[14px] px-[44px] rounded-[12px]  hover:bg-indigo-500 hover:text-white"
              to={'/catalog'}
            >
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink
              className="py-[14px] px-[44px] rounded-[12px]  hover:bg-indigo-500 hover:text-white"
              to={'/favorites'}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
