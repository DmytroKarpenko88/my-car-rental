export const parseAddress = address => {
  const arr = address.split(', ');
  const city = arr[1];
  const country = arr[2];
  return { city, country };
};

export const parseKeyValueString = str => {
  const arr = str.split('\n');
  const num = arr[0].split(' ').slice(-1).join('');

  arr[0] = arr[0].replace(num, '');
  arr.splice(1, 0, num);

  return arr;
};

export const allUnicBrands = cars =>
  cars.reduce((acc, car) => {
    if (!acc.includes(car.make)) {
      acc.push(car.make);
    }
    return acc;
  }, []);

export const parseMileage = num => num.toLocaleString('en-EN');

export const parsePrice = str => str.split('').slice(1).join('');

// export const toggleObject = (array, objectToAddOrRemove) => {
//   const objectIndex = array.findIndex(obj => obj.id === objectToAddOrRemove.id);

//   if (objectIndex !== -1) {
//     // Якщо об'єкт знайдено, видаляємо його
//     array.splice(objectIndex, 1);
//   } else {
//     // Якщо об'єкт не знайдено, додаємо його
//     array.push(objectToAddOrRemove);
//   }
// };
