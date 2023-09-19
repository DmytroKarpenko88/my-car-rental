import React, { useState } from 'react';
import { allUnicBrands, filterCars, formatNumber, priceList } from 'utils';

export const Filter = ({ allCars, setFilterCars, setTotalCars }) => {
  const [filterData, setFilterData] = useState({
    make: '',
    price: '',
    mileageMin: '',
    mileageMax: '',
  });

  const brands = allUnicBrands(allCars);

  const priceArr = priceList(allCars);

  const handleChange = e => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const carsForSearch = filterCars(allCars, filterData);
    setFilterCars(carsForSearch);
    setTotalCars(carsForSearch.length);
  };

  const resetForm = e => {
    setFilterData({
      make: '',
      price: '',
      mileageMin: '',
      mileageMax: '',
    });
    const carsForSearch = filterCars(allCars, filterData);
    setFilterCars(carsForSearch);
    setTotalCars(allCars.length);
  };

  return (
    <div className="mx-auto w-[859px] h-[74px] bg-gray-400">
      <form className="flex" onSubmit={handleSubmit}>
        <div className="">
          <p>Car brand</p>
          <select
            name="make"
            id="make"
            value={filterData.make}
            onChange={handleChange}
          >
            <option value="" disabled>
              Enter the text
            </option>
            {brands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p>Price/ 1 hour</p>
          <select
            name="price"
            id="price"
            value={filterData.price}
            onChange={handleChange}
          >
            <option value="" disabled>
              To $
            </option>
            {priceArr.map((price, index) => (
              <option key={index} value={price}>
                {price}
              </option>
            ))}
          </select>
          <span className="selected-price">
            {filterData.price ? `To ${filterData.price} $` : ''}
          </span>
        </div>

        <div>
          <p>Car mileage / km</p>
          <label>
            From
            <input
              type="text"
              name="mileageMin"
              value={formatNumber(filterData.mileageMin)}
              onChange={handleChange}
            />
          </label>
          <label>
            To
            <input
              type="text"
              name="mileageMax"
              value={formatNumber(filterData.mileageMax)}
              onChange={handleChange}
            />
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 rounded-xl px-11 py-[14px] hover:bg-indigo-500 text-white font-semibold text-sm"
        >
          Search
        </button>

        <button
          type="button"
          onClick={resetForm}
          className="bg-blue-500 rounded-xl px-11 py-[14px]  hover:bg-indigo-500 text-white font-semibold text-sm"
        >
          Reset
        </button>
      </form>
    </div>
  );
};
