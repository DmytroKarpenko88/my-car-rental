import { CarsList } from 'components';
import { Filter } from 'components/Filter';
import React, { useEffect, useState } from 'react';
import { fetchCars } from 'services/api';

const numberOfCars = 8;
const Catalog = ({ favorites, toggleFavorite }) => {
  const [allCars, setAllCars] = useState([]);
  const [visibleCars, setVisibleCars] = useState(numberOfCars);
  const [totalCars, setTotalCars] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setAllCars(await fetchCars());
      setTotalCars(allCars.length);
    }
    fetchData();
  }, [allCars.length]);

  const loadMore = () => {
    const nextVisibleCars = visibleCars + 8;

    if (nextVisibleCars <= totalCars) {
      setVisibleCars(nextVisibleCars);
    } else {
      setVisibleCars(totalCars);
    }
  };

  return (
    <>
      <Filter allCars={allCars} />
      <CarsList
        cars={allCars.slice(0, visibleCars)}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      {visibleCars < totalCars && (
        <button
          className="ml-auto mr-auto block mb-[150px] text-blue-500 text-base font-medium"
          onClick={loadMore}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default Catalog;
