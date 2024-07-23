import "../styles/resume.css";
import Skills from "../components/skills";
import PDFComponent from "../components/pdfComp";

export default function Resume() {
  return (
    <div className="resume-container">
      <div
       className="resume-download">

       </div>
    
        <a 
          href="/David's Resume.pdf" 
          download="David's Resume.pdf"
          className="resume-link"
        >
          Download Resume
        </a>
      
      <Skills />
      <PDFComponent />  
        </div>
  )
}