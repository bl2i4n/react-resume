import React, { Component } from  'react';
import Profile from './components/Profile';
import About from './components/About';
import Work from './components/Work';
import './styles/App.css';

function ResumeTitle(props) {
  return (
    <div className="" >
      <h2 className="text-center">{props.firstName} {props.lastName}</h2>
      <h2 className="text-center">{props.label}</h2>
    </div>
  )
}

function Address(props) {
  return (
   <div className="" >
    <span className="">{props.street}</span>
    <span className="">{props.city}</span>
  </div>
  )
}

function ContactInfo(props) {
  return (
    <div className="contact" >
      <span className="contact__email">{props.email}</span>
    </div>
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
      <div className="profileImg"><img role="presentation" className="img-circle center-block" src={"./public/profilePhoto.jpg"} width="200" /></div>
      <ResumeTitle firstName="Brian" lastName="Dela Cruz" />
      <ResumeTitle label="Software Engineer" />
      <Address city="Milpitas, CA" />
      <ContactInfo email="briandelacruz408@gmail.com" />

    </div>
    );
  }
}

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h2>About</h2>
          <p className="summary" >
            {this.props.summary}
          </p>
        </div>
    );
  }
}

function Skill(props) {
  return (
    <div className="skill">
      <p className="skill__name" >{props.item}</p>
      <div className="skill__rating" size="mini"/>
    </div>
  )
}

function Job(props) {
  return (
    <div className="job">
      <span className="job__title" >{props.jobTitle}</span>
      <span className="job__date">{props.jobDate}</span>
      <p className="job__summary" >{props.jobSummary}</p>
    </div>
  )
}

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="experience">
        <h2 className="heading">EXPERIENCE</h2>
        <Job jobTitle="Victorise - Software Engineer Intern " jobDate="" jobSummary="Improve apps response time by debugging bugs"/>
        <Job jobSummary="Composed data scripts to be used throughout app"/>
        <Job jobSummary="Analyzed Augmented Reality avenues for app"/>
        <Job jobSummary="Deliver quality code on time"/>
        <Job jobTitle="Superfoodbox - Web Developer Intern " jobDate="" jobSummary="Redesigned company's main website to flow simpler for users" />
        <Job jobSummary="Ensured changes made to the desktop website were responsive and ideal for mobile devices."/>
        <Job jobSummary="Formalized code tracking system for new features and issues"/>
        <Job jobSummary="Collaborate with designer on InvisionApp for feature improvements"/>
        <Job jobTitle="LiveRamp - Desktop Support Technician " jobDate="" jobSummary="Redesigned company's main website to flow simpler for users" />
        <Job jobSummary="Educated users on a wide array of devices including: Macs, iPhones, Windows, Androids, and printers"/>
        <Job jobSummary="Administered conference rooms through BlueJeans Admin, Teem and Google Admin to ensure quality AV"/>
        <Job jobSummary="Composed processes for new users to reduce downtime for common issue" />
      </div>
    );
  }
}

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ratings">
        <div className="ratings__skills">
          <h3>Skills</h3>
          <Skill item="HTML5"/>
          <Skill item="CSS3"/>
          <Skill item="JavaScript"  />
          <Skill item="Sass"/>
          <Skill item="React"  />
        </div>
        <div className="ratings__skills">
          <Skill item="Bootstrap"  />
          <Skill item="Node.js"/>
          <Skill item="MongoDB"  />
        </div>
        <div className="ratings__tools">
          <h3>Tools</h3>
          <Skill item="Git"  />
        </div>
      </div>
    )
  }
}

function Education(props) {
  return(
    <div className="school">
      <span className="school__name" >{props.schoolName}</span>
      <span className="school__location" >{props.schoolLocation}</span>
      <span className="school__degree" >{props.schoolDegree}</span>
      <span className="school__cos" >{props.schoolCourse}</span>
    </div>
  )
}

function Project(props) {
  return(
    <div className="project">
      <span className="project__title" >{props.projectTitle}</span>
      <span className="project__url" >{props.projectUrl}</span>
      <span className="project__desc" >{props.projectDesc}</span>
    </div>
  )
}

class History extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="history">
        <h2 className="heading">PROJECTS</h2>
        <Project projectTitle="Chatme" projectUrl="https://brians-slack.netlify.com/" projectDesc="Used Firebase and Angular to create a real time chat application. Firebase would be our backend database, and Angular would be the framework for the HTML, CSS, and logic of the application. The fun part of this object was seeing objects such as chat rooms and messages. I also had fun styling this project to look similar to modern chat applications such as Slack. The difficult part of this project was using a cookie to store the username and attaching the message to that username. In the end I was able to chat with friends easier" />
        <Project projectTitle="Partimus" projectUrl="http://partimus.org/" projectDesc="This project was mentioned to me by the East Bay Linux User Group. Here we met regularly to discuss hardware and software options for low income schools and homeless shelters. We tested different linux flavors and applications that would be easily manageable by a teacher or volunteer. We also tested sending updates to the OS or applications remotely. I mainly assisted in testing the hardware and software that was created by the rest of the group. Successfully deployed 2 machines with Arch Linux at a homeless shelter in Oakland, CA." />
        <Project projectTitle="JamOut" projectUrl="http://brians-bloc-jams.netlify.com/" projectDesc="Single-Page Application made with AngularJS, HTML, CSS, Javascript and the Buzz API to handle mp3 files. This responsive app plays a static music file with all the functionality of a mp3 player, from pausing, skipping and turning up the volume. This app was also refactored from jQuery to AngularJS." />
      </div>
    );
  }
}

class School extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="education">
        <h2 className="heading">EDUCATION</h2>
        <Education schoolName="Bloc" schoolLocation="Online Bootcamp" schoolDegree="Full Stack Apprenticeship" schoolCourse="Full Stack Web Developer // 2017" />
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Summary summary="Graduated from Bloc.io's full stack apprenticeship that teaches both frontend and backend technologies. Grew up in the 90's and have always been fascinated by unique user interfaces and emerging technologies. From Tamogochi's, Nintendo 64's, and T-mobile sidekicks, new tech has always amazed me. Seeing how people, communities and habits change through tech is an enlightening experience. I want to be able to use software and the web to assist business, people, and communities at large." />
        <div className="qualifications">
          <Experience />
          <History />
          <Skills />
        </div>
        <School />
      </div>
    );
  }
}

export default App;
