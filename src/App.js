import React, { Component } from 'react';
import ContactInfo from './components/ContactInfo';
import WorkHistory from './components/WorkHistory';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="resume">
        <ContactInfo />
        <WorkHistory />
    </div>
    );
  }
}

export default App;
