const QuartsConverter = (conversionType, numberOfUnits) => {
  if (conversionType === 'tea-spoons') {
    return numberOfUnits / 192;
  } else if (conversionType === 'table-spoons') {
    return numberOfUnits / 64;
  } else if (conversionType === 'ounces') {
    return numberOfUnits / 32;
  } else if (conversionType === 'pints') {
    return numberOfUnits / 2;
  } else if (conversionType === 'quarts') {
    return numberOfUnits * 1;
  }
}

export default QuartsConverter;
