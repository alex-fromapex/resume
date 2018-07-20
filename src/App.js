import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="resume">
      <div className="flex flex-row flex-col-3">
          <div>
              <hr className="test" />
          </div>
          <div className="text-center red">
              <h1>Alex</h1>
              <h2>Watson</h2>
          </div>
          <div>
              <hr />
          </div>
      </div>
    </div>
    );
  }
}

export default App;
