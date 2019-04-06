const TableSpoonConverter = (conversionType, numberOfUnits) => {
  if (conversionType === 'tea-spoons') {
    return numberOfUnits / 3;
  } else if (conversionType === 'table-spoons') {
    return numberOfUnits * 1;
  } else if (conversionType === 'ounces') {
    return numberOfUnits * 2;
  } else if (conversionType === 'pints') {
    return numberOfUnits * 32;
  } else if (conversionType === 'quarts') {
    return numberOfUnits * 64;
  }
}

export default TableSpoonConverter;
