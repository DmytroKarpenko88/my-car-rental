import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/catalog'}>Catalog</Link>
          </li>
          <li>
            <Link to={'/favorites'}>Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
