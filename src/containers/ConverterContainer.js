import React from 'react';
import PropTypes from 'prop-types';

const ConverterContainer = ({ children, title }) => {
  return (
    <div className="App">
      <h1 className="text-light">{title}</h1>
      <div className="container">
        {children && children}
      </div>
    </div>
  )
}

ConverterContainer.propTypes = {
  title: PropTypes.string
}

export default ConverterContainer;
