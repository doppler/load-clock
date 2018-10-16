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
    this.state = mapDataToState(data.d)
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState(prevState => ({
        ...prevState,
        winds: {
          ...prevState.winds,
          direction: prevState.winds.direction + 6,
          speed: prevState.winds.speed + 1,
        }
      }))
    }, 1000)
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        {
          this.state.timers.length > 0 ? <Timers timers={this.state.timers}/> : <BigLogo/>
        }
        <WeatherSection {...this.state}/>
      </div>
    );
  }
}

export default App;
