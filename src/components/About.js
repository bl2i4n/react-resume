import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <section className="about">
        <div summary="Graduated from Bloc.io's full stack apprenticeship that teaches both frontend and backend technologies. Grew up in the 90's and have always been fascinated by unique user interfaces and emerging technologies. From Tamogochi's, Nintendo 64's, and T-mobile sidekicks, new tech has always amazed me. Seeing how people, communities and habits change through tech is an enlightening experience. I want to be able to use software and the web to assist business, people, and communities at large." />
      </section>
    );
  }
};

export default About;
