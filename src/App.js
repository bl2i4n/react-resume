import React, { Component } from 'react';
import Profile from './components/Profile';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Education from './components/Education';
import './styles/App.css';

const App = props => {
  // const profileData = props.basics;
  // const aboutData = this.props;
  // const workData = props.work;
  // const skillsData = props.skills;
  // const educationData = props.education;

  return(
    <div className="container">
      <div className="row">
        <aside className="col-md-4">
          <div className="inner">
          </div>
        </aside>
        <main className="col-md-8">
          <div className="inner">
            <About {this.props.summary}/>
          </div>
        </main>
      </div>
    </div>
  )

};

export default App;
