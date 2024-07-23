import "../styles/about.css"; // Ensure this is the correct path for your CSS file
import myImage from "../assets/davidImage.jpg"; // Update with the correct path
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <div className="about">
      <div className="about-img">
        <img src={myImage}  alt="David Pippin" />
      </div>
      <div className="about-description">
        <h1>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'David Pippin',
        2000, // Wait for 1 second for text to be animated
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </h1>
        <h2>
          Full Stack Web Development | Responsive Design
        </h2>
        <p>
          Hello its really nice to meet you!  I am a full stack web developer with a passion for responsive design.  I have experience with React, Node, Express, and MongoDB.  I am always looking to learn new things and expand my skill set.  My goal in the software development industry is to create a positive impact on the world through technology.  I am excited to work with you on your next project!  Please feel free to take a look at my portfolio and reach out to me with any questions.  I look forward to hearing from you soon!
        </p>
      </div>
    </div>
  );
}