import React from  'react';
import './styles/App.css';

function ResumeTitle(props) {
  return (
    <div className="profileImg">
      <h2 className="text-center">{props.firstName} {props.lastName}</h2>
      <h2 className="text-center">{props.label}</h2>
    </div>
  )
}

function Address(props) {
  return (
    <div>
      <ul className="list-unstyled contact-links text-center" id="personal">
        <li><i className="fa fa-lg fa-location-arrow"></i>{props.street} {props.city}</li>
        <li><i className="fa fa-lg fa-envelope"></i><a href={`mailto:briandelacruz408@gmail.com`}>{props.email}</a></li>
      </ul>
      <ul className="profileLinks list-inline text-center" id="personal">
        <li id="links"><a className="fa fa-github fa-2x" href={'https://github.com/bl2i4n'}></a></li>
        <li id="links"><a className="fa fa-linkedin fa-2x" href={'https://linkedin.com/in/briandelacruz408/'}></a></li>
        <li><a className="fa fa-wordpress fa-2x" href={'https://codehog.wordpress.com/'}></a></li>
      </ul>
      <p>This site is powered by <a href="https://facebook.github.io/react/">React</a> components. The resume is still in the works and the code can be found in <a href="https://github.com/bl2i4n">my Github repo</a>.</p>
    </div>
  )
}


class Header extends React.Component {
  render() {
    return (
      <div className="profileImg">
        <img role="presentation" className="img-circle center-block" src={"./profilePhoto.jpg"} width="200" />
        <ResumeTitle className="text-center" firstName="Brian" lastName="Dela Cruz" />
        <ResumeTitle className="text-center" label="Software Engineer" />
        <div className="divider"></div>
          <Address city="Milpitas, CA"  email="briandelacruz408@gmail.com"/>
        <div className="divider"></div>

      </div>
    );
  }
}

class Summary extends React.Component {
  render() {
    return (
        <section className="about">
          <h2 className="heading"><i className="fa fa-lg fa-user"></i>ABOUT</h2>
          <p className="summary" >
            {this.props.summary}
          </p>
        </section>
    );
  }
}

function Skill(props) {
  return (
    <div className="">
        <label id="side" type="button" className="btn btn-success skill-list">{props.item}</label>
    </div>
  )
}

function Job(props) {
  return (
    <div className="">
      <span className="" >{props.jobTitle}</span>
      <span className="">{props.jobDate}</span>
      <p className="" >{props.jobSummary}</p>
    </div>
  )
}

class Experience extends React.Component {

  render() {
    return (
      <section className="work">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-building"></i>WORK EXPERIENCE</h2>
        <h3><Job jobTitle="Victorise - Software Engineer Intern"/></h3>
        <ul>
          <li><Job jobDate="" jobSummary="Improve apps response time by debugging bugs"/></li>
          <li><Job jobSummary="Composed data scripts to be used throughout app"/></li>
          <li><Job jobSummary="Analyzed Augmented Reality avenues for app"/></li>
          <li><Job jobSummary="Deliver quality code on time"/></li>
        </ul>
        <h3><Job jobTitle="Superfoodbox - Web Developer Intern " /></h3>
        <ul>
          <li><Job jobDate="" jobSummary="Redesigned company's main website to flow simpler for users" /></li>
          <li><Job jobSummary="Ensured changes made to the desktop website were responsive and ideal for mobile devices."/></li>
          <li><Job jobSummary="Formalized code tracking system for new features and issues"/></li>
          <li><Job jobSummary="Collaborate with designer on InvisionApp for feature improvements"/></li>
        </ul>
        <h3><Job jobTitle="LiveRamp - Desktop Support Technician " /></h3>
        <ul>
          <li><Job jobDate="" jobSummary="Redesigned company's main website to flow simpler for users" /></li>
          <li><Job jobSummary="Educated users on a wide array of devices including: Macs, iPhones, Windows, Androids, and printers"/></li>
          <li><Job jobSummary="Administered conference rooms through BlueJeans Admin, Teem and Google Admin to ensure quality AV"/></li>
          <li><Job jobSummary="Composed processes for new users to reduce downtime for common issue" /></li>
        </ul>
      </section>
    );
  }
}

class Skills extends React.Component {

  render() {
    return (
      <section className="">
        <div className="skills">
          <h2 className=""><i className="fa fa-lg fa-cogs"></i>SKILLS</h2>
          <Skill item="HTML5"/>
          <Skill item="CSS3"/>
          <Skill item="Sass"/>
          <Skill item="Bootstrap"  />
          <Skill item="JavaScript"  />
          <Skill item="React"  />
          <Skill item="Node.js"/>
          <Skill item="AngularJS"  />
          <Skill item="PixiJS"  />
          <Skill item="MEAN Stack"  />
          <Skill item="Ionic"  />
          <Skill item="MongoDB"  />
          <Skill item="Ruby on Rails"  />
          <Skill item="Unity"  />
        </div>
      </section>
    )
  }
}

function Education(props) {
  return(
    <div className="education">
      <span className="" >{props.schoolName}</span>
      <span className="" >{props.schoolLocation}</span>
      <span className="" >{props.schoolDegree}</span>
      <span className="" >{props.schoolCourse}</span>
    </div>
  )
}

function Project(props) {
  return(
    <div className="project">
      <span className="" >{props.projectTitle}</span>
      <span className="" >{props.projectUrl}</span>
      <div className="" >{props.projectDesc}</div>
    </div>
  )
}

class History extends React.Component {

  render() {
    return (
      <section>
      <div className="">
        <h2 className="heading"><i className="fa fa-lg fa-file-code-o"></i>PROJECTS</h2>
        <a href={`https://brians-slack.netlify.com/`} target="_blank">Chatme</a>
        <Project projectTitle=""  projectUrl="" projectDesc="Used Firebase and Angular to create a real time chat application. Firebase would be our backend database, and Angular would be the framework for the HTML, CSS, and logic of the application. The fun part of this object was seeing objects such as chat rooms and messages. I also had fun styling this project to look similar to modern chat applications such as Slack. The difficult part of this project was using a cookie to store the username and attaching the message to that username. In the end I was able to chat with friends easier" />
        <br/>
        <a href={`https://partimus.org/`} target="_blank">Partimus</a>
        <Project projectTitle="" projectUrl="" projectDesc="This project was mentioned to me by the East Bay Linux User Group. Here we met regularly to discuss hardware and software options for low income schools and homeless shelters. We tested different linux flavors and applications that would be easily manageable by a teacher or volunteer. We also tested sending updates to the OS or applications remotely. I mainly assisted in testing the hardware and software that was created by the rest of the group. Successfully deployed 2 machines with Arch Linux at a homeless shelter in Oakland, CA." />
        <br/>
        <a href={`https://brians-bloc-jams.netlify.com/`} target="_blank">JamOut</a>
        <Project projectTitle="" projectUrl="" projectDesc="Single-Page Application made with AngularJS, HTML, CSS, Javascript and the Buzz API to handle mp3 files. This responsive app plays a static music file with all the functionality of a mp3 player, from pausing, skipping and turning up the volume. This app was also refactored from jQuery to AngularJS." />
        <br/>
      </div>
      </section>
    );
  }
}

class School extends React.Component{

  render(){
    return(
      <section className="education">
        <div className="education">
          <h2 className=""><i className="fa fa-lg fa-mortar-board"></i>EDUCATION</h2>
            <h3>
              <Education schoolName="Bloc" schoolLocation=" Online Bootcamp"/>
            </h3>
              <Education schoolDegree="" schoolCourse=" Full Stack Software Developer : Nov, 2016 - Aug, 2017" />
        </div>
      </section>
    )
  }
}


class App extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <aside className="col-md-4">
          <div className="inner">
            <Header />
          </div>
          </aside>
          <main className="col-md-8">
            <div className="inner">
              <Summary summary="Graduated from Bloc.io's full stack apprenticeship that teaches both frontend and backend technologies. Grew up in the 90's and have always been fascinated by unique user interfaces and emerging technologies. From Tamogochi's, Nintendo 64's, and T-mobile sidekicks, new tech has always amazed me. Seeing how people, communities and habits change through tech is an enlightening experience. I want to be able to use software and the web to assist businesses, people, and communities at large." />
              <Experience />
              <History />
              <Skills />
              <School />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
