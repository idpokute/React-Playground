import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    SplitMe: null,
  };

  onClick = async () => {
    const loadedModule = await import("./components/SplitMe");
    this.setState({ SplitMe: loadedModule.default });
  };

  render() {
    const { SplitMe } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <button onClick={this.onClick}>Greeting!</button>
          {SplitMe && <SplitMe />}
        </header>
      </div>
    );
  }
}

export default App;
