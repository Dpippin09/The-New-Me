import React from 'react';
import '../../../src/styles/resume.css'; // Import the CSS file
import '../../../public';

const DownloadResume = () => {
  return (
    <div className="resume-container">
      <div className="resume-download">
        <a href="/DavidPippinResume.pdf" className="resume-link">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default DownloadResume;  