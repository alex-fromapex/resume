import React, { Component } from 'react';
import { connect } from 'react-redux';
import ATSKeywords from './components/ATSKeywords';
import ContactInfo from './components/ContactInfo';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="resume">
        <ContactInfo contactInfo={this.props.contactInfo} />
        <WorkHistory workHistory={this.props.workHistory} />
        {/* <WorkHistory title="Volunteer Experience" workHistory={this.props.otherExperience} /> */}
        <Education education={this.props.education} />
        <ATSKeywords keywords={this.props.ATSkeywords} />
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.workHistory,
        ...state.contactInfo,
        ...state.otherExperience,
        ...state.education,
        ...state.ATSkeywords
    }
};

export default connect(mapStateToProps)(App);
