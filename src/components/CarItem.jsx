import { parseAddress } from 'utils';
import { FavoriteIcon } from './icons';
import { CarModal } from './modals/CarModal';
import { useState } from 'react';
import { CarDetails } from './CarDetails';

export const CarItem = ({ car, addToFavorites, isFavorite }) => {
  const [modalShow, setModalShow] = useState(false);
  const {
    year,
    make,
    model,
    type,
    img,
    carClass,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;

  const handleToggleFavorite = () => {
    addToFavorites(car);
  };

  const { city, country } = parseAddress(address);

  return (
    <>
      <div className="w-96 relative">
        <button
          className="absolute top-3.5 right-3.5 stroke-none"
          onClick={handleToggleFavorite}
        >
          <FavoriteIcon
            className={
              isFavorite
                ? 'fill-blue-500 stroke-none'
                : 'fill-none stroke-white'
            }
          />
        </button>
        <img src={img} alt={model} />
        <div className="flex justify-between">
          <div>
            <span>
              {make}
              <span> {model}</span>, {year}
            </span>
          </div>
          <span>{rentalPrice}</span>
        </div>
        <div>
          <span>{city}</span>
          <span>{country}</span>
          <span>{rentalCompany}</span>
          <span>{carClass}</span>
        </div>
        <div>
          <span>{type}</span>
          <span>{make}</span>
          <span>{mileage}</span>
          <span>{functionalities[0]}</span>
        </div>
        <button onClick={() => setModalShow(true)}>Learn more</button>
      </div>
      <CarModal show={modalShow} onHide={() => setModalShow(false)}>
        <CarDetails car={car} />
      </CarModal>
    </>
  );
};
