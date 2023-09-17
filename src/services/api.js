import axios from 'axios';
import { Notify } from 'notiflix';

const BASE_URL = 'https://6504a775c8869921ae254d5c.mockapi.io';

axios.defaults.baseURL = BASE_URL;
// axios.defaults.params = {
//   include_adult: 'false',
//   language: 'en-US',
// };

export const fetchCars = async () => {
  const config = {
    // params: {
    //   page: page,
    // },
  };

  try {
    const response = await axios.get(`/cars`, config);
    // console.log('response:', response);
    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
};
