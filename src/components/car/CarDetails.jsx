import React from 'react';
import {
  parseAddress,
  parseKeyValueString,
  parseMileage,
  parsePrice,
} from 'utils';

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

  const conditions = parseKeyValueString(rentalConditions);
  console.log('result:', conditions);

  const mil = parseMileage(mileage);
  console.log('mil:', mil);

  const price = parsePrice(rentalPrice);
  console.log('price:', price);

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
      <h2 className="text-sm font-medium mt-4">
        Accessories and functionalities:
      </h2>
      <ul className="flex flex-wrap  gap-[12px] mt-2 text-xs text-gray-rgba-18-20-23-50">
        {accessories.map((acc, index) => (
          <li key={index}>{acc}</li>
        ))}
      </ul>
      <ul className="flex flex-wrap gap-[12px] mt-2 text-xs text-gray-rgba-18-20-23-50">
        {functionalities.map((acc, index) => (
          <li key={index}>{acc}</li>
        ))}
      </ul>

      <h2 className="mt-6 text-sm font-medium">Rental Conditions: </h2>
      <div className="flex flex-wrap mt-2 gap-1 text-gray-dark-gray text-gray-rgba-18-20-23-50">
        {conditions.map((el, index) => (
          <span
            className={`py-[7px] px-[14px] bg-gray-light-gray rounded-[35px] ${
              !isNaN(el) && 'text-blue-500'
            }`}
            key={index}
          >
            {el}
          </span>
        ))}
        <span className="py-[7px] px-[14px] bg-gray-light-gray rounded-[35px]">
          Mileage: <span className="text-blue-500">{mil}</span>
        </span>
        <span className="py-[7px] px-[14px] bg-gray-light-gray rounded-[35px]">
          Price: <span className="text-blue-500">{price}$</span>
        </span>
      </div>

      <a
        href="tel:+380730000000"
        className="bg-blue-500 mt-4 rounded-xl py-[12px] px-[50px] text-white hover:bg-indigo-500"
      >
        Rental car
      </a>
    </div>
  );
};
