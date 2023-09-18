import React from 'react';
import { parseAddress } from 'utils';

export const CarDetails = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    carClass,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = car;

  const { city, country } = parseAddress(address);

  return (
    <div className="container p-6">
      <img
        className="rounded-[14px] w-[461px] h-[248px] object-cover"
        src={img}
        alt={model}
      />
      <div>
        <span>
          {make}
          <span> {model}</span>, {year}
        </span>
      </div>
      <div>
        <span>{city}</span>
        <span>{country}</span>
        <span>{id}</span>
        <span>Year:{year}</span>
        <span>Type:{type}</span>
        <span>Class:{carClass}</span>
      </div>
      <div>
        <span>Fuel Consumption:{fuelConsumption} </span>
        <span>Engine Size:{engineSize} </span>
      </div>
      <p>{description}</p>
      <h2>Accessories and functionalities:</h2>
      <ul>
        {accessories.map((acc, index) => (
          <li key={index}>{acc}</li>
        ))}
      </ul>
      <ul>
        {functionalities.map((acc, index) => (
          <li key={index}>{acc}</li>
        ))}
      </ul>

      <h2>Rental Conditions: </h2>
      <span>{rentalConditions}</span>
      <span>Mileage:{mileage}</span>
      <span>Price:{rentalPrice}</span>

      <button className="bg-blue-500 rounded-xl py-3 px-12 text-white hover:bg-indigo-500">
        Rental car
      </button>
    </div>
  );
};
