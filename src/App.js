import React, { Component } from 'react';
import UnitBody from './components/UnitBody';
import UnitInput from './components/UnitInput';
import ConverterContainer from './containers/ConverterContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      conversionType: 'tea-spoons',
      numberOfUnits: 0,
      teaSpoons: 0,
      tableSpoons: 0,
      ounces: 0,
      pints: 0,
      quarts: 0,
    };
    this.convertUnits = this.convertUnits.bind(this);
    this.setConversionType = this.setConversionType.bind(this);
  }

  convertUnits(e) {
    let numberOfUnits = +e.target.value;
    if (isNaN(numberOfUnits)) {
      return;
    }
    this.setState((state) => {
      return { numberOfUnits }
    })
  }

  setConversionType(e) {
    let conversionType = e.target.value;
    this.setState((state) => {
      return { conversionType }
    })
  }

  render() {
    return (
      <ConverterContainer title="Rainbow Liquids Converter">
        <UnitInput
          onChange={this.convertUnits}
          value={this.state.numberOfUnits}
          onSelect={this.setConversionType}
        />
        <UnitBody
          numberOfUnits={this.state.numberOfUnits}
          conversionType={this.state.conversionType}
        />
      </ConverterContainer>
    );
  }
}

export default App;
