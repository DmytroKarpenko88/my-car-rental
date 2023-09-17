import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Catalog = lazy(() => import('pages/Catalog'));
const Favorites = lazy(() => import('pages/Favorites'));

export const RoutesCar = () => {
  return (
    <Routes>
      <Route path="/" index element={Home} />
      <Route path="/catalog" element={Catalog} />
      <Route path="/favorites" element={Favorites} />
    </Routes>
  );
};
