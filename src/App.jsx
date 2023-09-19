import { Layout } from 'components';
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  const toggleFavorite = car => {
    if (!favorites.some(fav => fav.id === car.id)) {
      setFavorites([...favorites, car]);
    } else {
      setFavorites(favorites.filter(fav => fav.id !== car.id));
    }
  };

  useEffect(() => {
    try {
      const storedFavorites =
        JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(storedFavorites);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="catalog"
            element={
              <Catalog favorites={favorites} toggleFavorite={toggleFavorite} />
            }
          />
          <Route
            path="favorites"
            element={
              <Favorites
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
