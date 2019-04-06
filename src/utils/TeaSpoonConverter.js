const TeaSpoonConverter = (conversionType, numberOfUnits) => {
  if (conversionType === 'tea-spoons') {
    return numberOfUnits * 1;
  } else if (conversionType === 'table-spoons') {
    return numberOfUnits * 3;
  } else if (conversionType === 'ounces') {
    return numberOfUnits * 6;
  } else if (conversionType === 'pints') {
    return numberOfUnits * 96;
  } else if (conversionType === 'quarts') {
    return numberOfUnits * 192;
  }
}

export default TeaSpoonConverter;
