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
      <div className="text-l mt-[14px] font-medium">
        <span>
          {make}
          <span className="text-blue-500"> {model}</span>, {year}
        </span>
      </div>
      <div className="mt-2 text-xs text-gray-rgba-18-20-23-50">
        <div className="flex flex-row gap-[12px] ">
          <span>{city}</span>
          <span>{country}</span>
          <span>{id}</span>
          <span>Year:{year}</span>
          <span>Type:{type}</span>
          <span>Class:{carClass}</span>
        </div>
        <div className="flex flex-row gap-[12px] mt-[4px]">
          <span>Fuel Consumption:{fuelConsumption} </span>
          <span>Engine Size:{engineSize} </span>
        </div>
      </div>
      <p className="mt-[14px] text-sm">{description}</p>
      <h2 className="text-sm font-medium mt-3">
        Accessories and functionalities:
      </h2>
      <ul className="flex gap-[12px] mt-2 text-xs text-gray-rgba-18-20-23-50">
        {accessories.map((acc, index) => (
          <li key={index}>{acc}</li>
        ))}
      </ul>
      <ul className="flex gap-[12px] mt-2 text-xs text-gray-rgba-18-20-23-50">
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
