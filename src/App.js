import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactJsonSchema from 'react-json-schema';
import logo from './logo.svg';
import './App.css';

const schema = {
  "component": "basics",
    "name": "Brian Dela Cruz",
    "label": "Software Engineer",
    "picture": "",
    "email": "briandelacruz408@gmail.com",
    "phone": "(408)806-8714",
    "website": "https://briandelacruz.com",
    "summary": "Graduated from Bloc.io's full stack apprenticeship that teaches both frontend and backend technologies. Grew up in the 90's and have always been fascinated by unique user interfaces and emerging technologies. From Tamogochi's, Nintendo 64's, and T-mobile sidekicks, new tech has always amazed me. Seeing how people, communities and habits change through tech is an enlightening experience. I want to be able to use software and the web to assist business, people, and communities at large.",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "CA 94115",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [
      {
        "network": "Linkedin",
        "username": "briandelacruz408",
        "url": ""
      },
      {
        "network": "Github",
        "username": "bl2i4n",
        "url": ""
      }
    ]
  }

  const view = new ReactJsonSchema();
  view.setComponentMap({ basics, profiles });


class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
