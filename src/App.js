import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import mapDataToState from './mapDataToState'
import Timers from './Timers'
import BigLogo from './BigLogo'
import Compass from './Compass'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        timers: [],
        currentWind: 0
      }
    }
  }

  componentDidMount() {
    const organizedData = mapDataToState(data.d)
    this.setState({
      data: organizedData
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        {
          this.state.data.timers.length > 0 ? <Timers timers={this.state.data.timers}/> : <BigLogo/>
        }
        <Compass currentWind={this.state.data.currentWind}/>
      </div>
    );
  }
}

export default App;
