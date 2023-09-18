import React, { useEffect, useState } from 'react';
import { CarItem } from './CarItem';

export const CarsList = ({ cars }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  const addToFavorites = car => {
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

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <ul className="flex flex-wrap gap-x-[29px] gap-y-[50px] w-[1184px]">
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
