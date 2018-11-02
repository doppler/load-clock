import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import mapDataToState from "./mapDataToState";
import parse from "date-fns/parse";
import Timers from "./Timers";
import WeatherSection from "./WeatherSection";

const TEST = false;

class App extends Component {
  constructor() {
    super();
    this.state = mapDataToState(data.d);
  }

  fetchDataAndUpdateState() {
    fetch(
      // `https://a0lpb24ek3.execute-api.us-east-1.amazonaws.com/dev/${
      //   this.state.locationId
      // }`,
      `https://load-clock-poller.herokuapp.com/clock/${this.state.locationId}`,
      {
        mode: "cors",
        headers: { "Content-Type": "application/json" }
      }
    )
      .then(response => response.json())
      .then(json => {
        const newState = json;
        this.setState(prevState => ({
          timers: newState.timers,
          winds: newState.winds,
          weather: newState.weather,
          loadsFlownToday: newState.loadsFlownToday,
          lastUpdate: parse(newState.lastUpdate),
          prevWindDirections: [
            newState.winds.direction,
            ...this.state.prevWindDirections
          ].slice(0, 240)
        }));
      });
  }

  componentDidMount() {
    const params = new URL(window.location.href).searchParams;
    this.setState({ locationId: params.get("locationId") || "Houston" });

    if (TEST) {
      window.setInterval(() => {
        this.setState(prevState => ({
          ...prevState,
          winds: {
            ...prevState.winds,
            direction: prevState.winds.direction + 1,
            speed: prevState.winds.speed + 1
          },
          prevWindDirections: [
            prevState.winds.direction,
            ...this.state.prevWindDirections
          ].slice(0, 240)
        }));
      }, 1000);
    } else {
      window.setInterval(() => this.fetchDataAndUpdateState(), 1000);
    }
  }

  render() {
    return (
      <div className="App">
        <Timers timers={this.state.timers} locationId={this.state.locationId} />
        <WeatherSection {...this.state} />
      </div>
    );
  }
}

export default App;
