import React from 'react';
import PropTypes from 'prop-types';

const UnitInput = ({ value, onChange, onSelect }) => {
  return (
    <div className="row">
      <div className="input-group">
        <input value={value} onChange={onChange} id="name" type="text" className="form-control" aria-label="search by name" />
        <div className="btn-group ml-0">
          <div className="container">
            <div className="form-group row">
              <select onChange={onSelect} className="form-control col" id="type">
                <option defaultValue value="tea-spoons">Tea Spoons</option>
                <option value="table-spoons">Table Spoons</option>
                <option value="ounces">Ounces</option>
                <option value="pints">Pints</option>
                <option value="quarts">Quarts</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

UnitInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default UnitInput;
