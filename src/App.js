import React, { Component } from 'react';
import Profile from './components/Profile';
import About from './components/About';
import Work from './components/Work';
import './styles/App.css';

function ResumeTitle(props) {
  return (
    <div className="name" contentEditable={true}>
      <h2 className="name__first">{props.firstName}</h2>
      <h1 className="name__last">{props.lastName}</h1>
    </div>
  )
}

function Address(props) {
  return (
   <div className="address" contentEditable={true}>
    <span className="address__street">{props.street}</span>
    <span className="address__city">{props.city}</span>
  </div>
  )
}

function ContactInfo(props) {
  return (
    <div className="contact" contentEditable={true}>
      <span className="contact__email">{props.email}</span>
      <span className="contact__phone">{props.phone}</span>
    </div>
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <header className="header">
      <Address street="1 Hacker Way" city="Menlo Park, CA 94025" />
      <ResumeTitle firstName="Jared" lastName="Dunn" />
       <ContactInfo email="email@company.com" phone="(123) 456-7890" />
    </header>
    );
  }
}

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <p className="summary" contentEditable={true}>
          {this.props.summary}
        </p>
    );
  }
}

function Skill(props) {
  return (
    <div className="skill">
      <p className="skill__name" contentEditable={true}>{props.item}</p>
      <div className="skill__rating" icon="star" size="mini" defaultRating={props.rating} maxRating={5} />
    </div>
  )
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
          <Skill item="HTML5" rating={5} />
          <Skill item="CSS3" rating={5} />
          <Skill item="JavaScript" rating={4} />
          <Skill item="Sass" rating={5} />
          <Skill item="React" rating={4} />
        </div>
        <div className="ratings__skills">
          <Skill item="Bootstrap" rating={4} />
          <Skill item="Node.js" rating={5} />
          <Skill item="Meteor" rating={5} />
          <Skill item="Redux" rating={3} />
          <Skill item="MongoDB" rating={4} />
        </div>
        <div className="ratings__tools">
          <h3>Tools</h3>
          <Skill item="Git" rating={4} />
          <Skill item="Sketch" rating={5} />
          <Skill item="Webstorm IDE" rating={5} />
          <Skill item="iTerm2" rating={4} />
          <Skill item="VS Code" rating={3} />
        </div>
      </div>
    )
  }
}

function Job(props) {
  return (
    <div className="job">
      <span className="job__title" contentEditable={true}>{props.jobTitle}</span>
      <span className="job__date">{props.jobDate}</span>
      <p className="job__summary" contentEditable={true}>{props.jobSummary}</p>
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
        <Job jobTitle="HOOLI - FRONT END DEVELOPER //" jobDate="2011 — PRESENT" jobSummary="Affordances user story quantitative vs. qualitative affordances thought leader big data sticky note workflow parallax ideate thinker-maker-doer pair programming. Big data entrepreneur intuitive engaging sticky note fund paradigm thought leader innovate. Physical computing cortado human-centered design user centered design venture capital innovate waterfall is so 2000 and late integrate prototype grok. Sticky note ideate responsive driven viral actionable insight engaging integrate user story integrate." />
        <Job jobTitle="PIED PIPER — ASSISTANT //" jobDate="2013 — 2016" jobSummary="360 campaign venture capital pivot earned media pivot ship it moleskine venture capital. Bootstrapping long shadow prototype latte engaging user story driven pair programming parallax earned media SpaceTeam. Co-working workflow fund pitch deck human-centered design food-truck parallax driven user centered design sticky note co-working SpaceTeam affordances quantitative vs. qualitative. Sticky note pitch deck actionable insight hacker SpaceTeam paradigm SpaceTeam latte." />
      </div>
    );
  }
}

function Education(props) {
  return(
    <div className="school">
      <span className="school__name" contentEditable={true}>{props.schoolName}</span>
      <span className="school__location" contentEditable={true}>{props.schoolLocation}</span>
      <span className="school__degree" contentEditable={true}>{props.schoolDegree}</span>
      <span className="school__cos" contentEditable={true}>{props.schoolCourse}</span>
    </div>
  )
}

function Project(props) {
  return(
    <div className="project">
      <span className="project__title" contentEditable={true}>{props.projectTitle}</span>
      <span className="project__url" contentEditable={true}>{props.projectUrl}</span>
      <span className="project__desc" contentEditable={true}>{props.projectDesc}</span>
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
        <h2 className="heading">EDUCATION</h2>
        <Education schoolName="Udacity" schoolLocation="Online Coursework" schoolDegree="Nanodegree" schoolCourse="Full Stack Web Developer // 2017" />
        <Education schoolName="MIT" schoolLocation="Cambridge, MA" schoolDegree="Bachelors of Arts & Science" schoolCourse="Computer Science // 2006 - 2008" />
        <h2 className="heading">SELECTED WORK</h2>
        <Project projectTitle="NUCLEUS - FULL END DEVELOPER // 2017" projectUrl="http://chrisbeard.io" projectDesc="Workflow responsive moleskine convergence personas long shadow user centered design fund food-truck. Agile pivot agile 360 campaign quantitative vs. qualitative actionable insight waterfall is so 2000 and late parallax." />
        <Project projectTitle="DISRUPT APP - FRONT END DEVELOPER // 2016" projectUrl="http://chrisbeard.io" projectDesc="Parallax experiential minimum viable product earned media user centered design quantitative vs. qualitative human-centered design latte user centered design convergence sticky note thinker-maker-doer driven." />
      </div>
    );
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__inner" contentEditable={true}>
          <div>
            <div name='briefcase' /> {this.props.portfolioUrl}
          </div>
          <div>
            <div name='phone square' /> {this.props.phoneNumber}
          </div>
          <div>
            <div name='mail' /> {this.props.email}
          </div>
        </div>
      </footer>
    );
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
        <Summary summary="Cortado Steve Jobs parallax parallax waterfall is so 2000 and late thought leader iterate pair programming physical computing. Thinker-maker-doer thinker-maker-doer earned media integrate grok latte experiential responsive innovate unicorn. Waterfall is so 2000 and late cortado thinker-maker-doer thought leader actionable insight big data earned media long shadow ideate waterfall is so 2000 and late." />
        <Skills />
        <div className="qualifications">
          <Experience />
          <History />
        </div>
        <Footer portfolioUrl="http://chrisbeard.io" phoneNumber="(123) 456-7890" email="email@company.com" />
      </div>
    );
  }
}

export default App;
