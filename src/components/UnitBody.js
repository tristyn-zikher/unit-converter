import React from 'react';
import PropTypes from 'prop-types';
import { TeaSpoonConverter, TableSpoonConverter, OuncesConverter, PintsConverter, QuartsConverter } from '../utils/index';

const UnitBody = ({ conversionType, numberOfUnits }) => {
  const RoundToHundredths =(val) => {
    return (Math.round(val * 100) / 100);
  };
  const Units = [
    {label: 'Tea Spoons', color: '#a80010', value: TeaSpoonConverter(conversionType, numberOfUnits)},
    {label: 'Table Spoons', color: '#b26800', value: TableSpoonConverter(conversionType, numberOfUnits)},
    {label: 'Ounces', color: '#008c1c', value: OuncesConverter(conversionType, numberOfUnits)},
    {label: 'Pints', color: '#070091', value: PintsConverter(conversionType, numberOfUnits)},
    {label: 'Quarts', color: '#560084', value: QuartsConverter(conversionType, numberOfUnits)},
  ];
  return Units.map((unit, i) => {
    return (
      <div style={{backgroundColor: unit.color}} className="card card-danger mt-2 text-light" key={i}>
        <div className="card-block">
          <h4>{unit.label}</h4>
          <div>{RoundToHundredths(unit.value)}</div>
        </div>
      </div>
    )
  });
};

UnitBody.propTypes = {
  conversionType: PropTypes.string.isRequired,
  numberOfUnits: PropTypes.number.isRequired,
}

export default UnitBody;
