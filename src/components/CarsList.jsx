import React, { useEffect, useState } from 'react';
import { CarItem } from './CarItem';

export const CarsList = ({ cars }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites') || [])
  );

  const addToFavorites = car => {
    console.log('car:', car);

    if (!favorites.some(fav => fav.id === car.id)) {
      setFavorites([...favorites, car]);
    } else {
      setFavorites(favorites.filter(fav => fav.id !== car.id));
    }
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || []);
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <ul>
      {cars.length > 0 &&
        cars?.map(car => (
          <li key={car.id}>
            <CarItem
              car={car}
              addToFavorites={addToFavorites}
              isFavorite={favorites.some(fav => fav.id === car.id)}
            />
          </li>
        ))}
    </ul>
  );
};
