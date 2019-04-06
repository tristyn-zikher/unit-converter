const PintsConverter = (conversionType, numberOfUnits) => {
  if (conversionType === 'tea-spoons') {
    return numberOfUnits / 96;
  } else if (conversionType === 'table-spoons') {
    return numberOfUnits / 32;
  } else if (conversionType === 'ounces') {
    return numberOfUnits / 16;
  } else if (conversionType === 'pints') {
    return numberOfUnits * 1;
  } else if (conversionType === 'quarts') {
    return numberOfUnits * 2;
  }
}

export default PintsConverter;
