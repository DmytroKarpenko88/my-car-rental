export const parseAddress = address => {
  const arr = address.split(', ');
  const city = arr[1];
  const country = arr[2];
  return { city, country };
};

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
