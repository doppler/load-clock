import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import mapDataToState from "./mapDataToState";
import Timers from "./Timers";
import WeatherSection from "./WeatherSection";

class App extends Component {
  constructor() {
    super();
    this.state = mapDataToState(data.d);
  }

  fetchDataAndUpdateState() {
    fetch("https://houston.spacelandclock.com/clock5.aspx/getTimerInfo", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({ param: "data", db: "Dallas" })
    })
      .then(response => response.json())
      // .then(json => this.setState(mapDataToState(json.d)));
      .then(json => {
        const newState = mapDataToState(json.d);
        this.setState(prevState => ({
          timers: newState.timers,
          winds: newState.winds,
          weather: newState.weather,
          loadsFlownToday: newState.loadsFlownToday,
          lastUpdate: newState.lastUpdate,
          prevWindDirections: [
            newState.winds.direction,
            ...this.state.prevWindDirections
          ].slice(0, 240)
        }));
      });
  }

  componentDidMount() {
    window.setInterval(() => this.fetchDataAndUpdateState(), 1000);
    // window.setInterval(() => {
    //   this.setState(prevState => ({
    //     ...prevState,
    //     winds: {
    //       ...prevState.winds,
    //       direction: prevState.winds.direction + 1,
    //       speed: prevState.winds.speed + 1
    //     },
    //     prevWindDirections: [
    //       prevState.winds.direction,
    //       ...this.state.prevWindDirections
    //     ].slice(0, 240)
    //   }));
    // }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Timers timers={this.state.timers} />
        <WeatherSection {...this.state} />
      </div>
    );
  }
}

export default App;
