import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import mapDataToState from './mapDataToState'
import Timers from './Timers'
import WeatherSection from './WeatherSection'

class App extends Component {
  constructor() {
    super();
    this.state = mapDataToState(data.d)
  }

  componentDidMount() {
    fetch("http://houston.spacelandclock.com/clock5.aspx/getTimerInfo", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({param:"data",db:"Houston"})

    })
    .then(response => response.json())
    .then(json => this.setState(mapDataToState(json.d)))

    // window.setInterval(() => {
    //   this.setState(prevState => ({
    //     ...prevState,
    //     winds: {
    //       ...prevState.winds,
    //       direction: prevState.winds.direction + 1,
    //       speed: prevState.winds.speed + 1,
    //     },
    //     prevWindDirections: [prevState.winds.direction, ...this.state.prevWindDirections].slice(0, 240)
    //   }))
    // }, 1000)
  }

  render() {
    return (
      <div className="App">
        <Timers timers={this.state.timers}/>
        <WeatherSection {...this.state}/>
      </div>
    );
  }
}

export default App;
