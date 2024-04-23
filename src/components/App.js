import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links"; 

// Import user data
import user from "../data/user";
console.log(user);

function App() {
  const { name, city, color, bio } = user;
  const {github, linkedin } = user.links
  return (
    <div>
      <NavBar />
      <Home name={name} city={city} color={color} />
      <About bio={bio}>
        <Links github={github} linkedin={linkedin} />
      </About>
    </div>
  );
}

export default App;
