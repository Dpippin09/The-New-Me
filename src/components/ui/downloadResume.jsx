import React from 'react';
import '../../../src/styles/resume.css'; // Import the CSS file

const DownloadResume = () => {
  return (
    <div className="resume-container">
      <div className="resume-download">
        <a href="/resume.pdf" download="My_Resume.pdf" className="resume-link">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default DownloadResume;  