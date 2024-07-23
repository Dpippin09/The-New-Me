import "../styles/resume.css";
import Skills from "../components/skills";

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-download">
        <a 
          href="../assets/" 
          download=""
          className="resume-link"
        >
          Download Resume
        </a>
      </div>
      <Skills />
      <div className="resume-viewer">
        <iframe
          src="../assets/"
          width="100%"
          height="600px"
          title="Resume"
        >
        </iframe>
      </div>
    </div>
  );
}