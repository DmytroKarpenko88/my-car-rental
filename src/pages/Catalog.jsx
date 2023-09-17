import { CarsList } from 'components';
import React, { useEffect, useState } from 'react';
import { fetchCars } from 'services/api';

const Catalog = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setCars(await fetchCars());
    }
    fetchData();
  }, []);

  return (
    <div>
      <CarsList cars={cars} />
    </div>
  );
};

export default Catalog;
