import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE (AI & ML)</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>2025 - NOW</h3>
            </div>
            <p>
              Specializing in Artificial Intelligence and Machine Learning with a 7.2 CGPA. Coursework covers core OOP, data structures, algorithms, computer vision, and database management systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Training</h4>
                <h5>Infosys Springboard & Deloitte</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Completed Infosys Springboard certifications in Python Programming (Parts 1 & 2) and Cyber Security. Completed Deloitte Data Analytics simulation on Forage.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary & Higher Secondary</h4>
                <h5>Sri Chaitanya Education</h5>
              </div>
              <h3>2023 - 2025</h3>
            </div>
            <p>
              Achieved 94% in Higher Secondary Education at Sri Chaitanya Junior Kalasala, and 9.0 CGPA in Secondary Education at Sri Chaitanya Techno School, Telangana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
