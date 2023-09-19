import React from // useState
'react';
import { allUnicBrands } from 'utils';

export const Filter = ({ allCars }) => {
  // const [make, setMake] = useState('');
  // const [price, setPrice] = useState('');
  // const [mileageRange, setMileageRange] = useState([]);

  // const handleFilterChange = (make, priceRange, mileageRange) => {};
  const brands = allUnicBrands(allCars);

  return (
    <div className="mx-auto w-[859px] h-[74px] bg-gray-400">
      <form className="flex">
        <div className="">
          <p>Car brand</p>
          <select name="" id="">
            <option value="">Enter the text</option>
            {brands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p>Price/ 1 hour</p>
          <select name="" id="2">
            <option value="">To $</option>
            <option value="">10</option>
            <option value="">20</option>
          </select>
        </div>

        <div>
          <p>Сar mileage / km</p>
          <label>
            From
            <input type="text" />
          </label>
          <label>
            To
            <input type="text" />
          </label>
        </div>
      </form>
    </div>
  );
};
