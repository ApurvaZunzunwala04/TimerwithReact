import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState({ count: this.state.count + 1 });
  }
  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(this.tick.bind(this), 1000);
  }
  stopTimer() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="timer">
        <h2>Timer in seconds</h2>
        <h3>{this.state.count}</h3>
        <div>
          <button onClick={this.startTimer.bind(this)}>Start</button>
          <button onClick={this.stopTimer.bind(this)}>Stop</button>
        </div>
      </div>
    );
  }
}

export default App;
