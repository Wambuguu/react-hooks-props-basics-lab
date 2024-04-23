import React from "react";
import Links from "./Links";

function About(props) {
  const { bio, github, linkedin } = props;

  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      <img src="https://marketingstrategyexpert.wordpress.com/wp-content/uploads/2019/06/1e.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
