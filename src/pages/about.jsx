import "../Styles/About.css"; // Ensure this is the correct path for your CSS file
import myImage from "../assets/"; // Update with the correct path
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <div className="about">
      <div className="about-img">
        <img src={myImage} alt="David Pippin" />
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
          
        </p>
      </div>
    </div>
  );
}