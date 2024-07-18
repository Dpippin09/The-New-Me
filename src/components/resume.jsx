import React from 'react';

function Resume() {
  return (
    <div>
      <h1>My Resume</h1>
      <section>
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Job Title</strong> - Company Name (Year - Year)
            <p>Brief description of your responsibilities and achievements.</p>
          </li>
          {/* Repeat for other experiences */}
        </ul>
      </section>
      
      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Degree</strong> - Institution Name (Year - Year)
            <p>Short description or major subjects.</p>
          </li>
          {/* Repeat for other educational qualifications */}
        </ul>
      </section>
      
      <section>
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          {/* Repeat for other skills */}
        </ul>
      </section>
      
      <section>
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: yourlinkedinprofile</p>
        {/* Add other contact methods if necessary */}
      </section>
    </div>
  );
}

export default Resume;