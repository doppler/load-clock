import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import mapDataToState from './mapDataToState'
import Timers from './Timers'
import BigLogo from './BigLogo'
import WeatherSection from './WeatherSection'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        timers: [],
        winds: {},
        weather: {},
        loadsFlownToday: 0
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
        <WeatherSection {...this.state.data}/>
      </div>
    );
  }
}

export default App;
