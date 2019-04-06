import React, { Component } from 'react';
import UnitContainer from './components/UnitContainer';
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
      <div className="App">
        <h1 className="text-light">Rainbow Liquid Converter</h1>
        <div className="container">
          <div className="row">
            <div className="input-group">
              <input onChange={this.convertUnits} ref="name" id="name" type="text" className="form-control" aria-label="search by name" />
              <div className="btn-group ml-0">
                <div className="container">
                  <div className="form-group row">
                    <select onChange={this.setConversionType} className="form-control col" id="type" ref="type">
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
          <UnitContainer
            numberOfUnits={this.state.numberOfUnits}
            conversionType={this.state.conversionType}
            />
        </div>
      </div>

    );
  }
}

export default App;
