const CalculateOunces = (conversionType, numberOfUnits) => {
  if (conversionType === 'tea-spoons') {
    return numberOfUnits / 6;
  } else if (conversionType === 'table-spoons') {
    return numberOfUnits / 2;
  } else if (conversionType === 'ounces') {
    return numberOfUnits * 1;
  } else if (conversionType === 'pints') {
    return numberOfUnits * 16;
  } else if (conversionType === 'quarts') {
    return numberOfUnits * 32;
  }
}

export default CalculateOunces;
