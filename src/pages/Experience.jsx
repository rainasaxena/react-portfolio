import React from "react";
import "../assets/styles/Experience.scss";

const Experience = () => {
  return (
    <div id="exp-container" data-aos="zoom-out">
      <h1>EXPERIENCE</h1>
      <section id="timeline">
        <div className="tl-item">
          <div
            className="tl-bg"
            style={{
              backgroundImage: "url(https://placeimg.com/801/801/nature)",
            }}
          ></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Jul.2021 – Present</p>
            <h4>Agrawal Builders</h4>
            <h4>(Sagar Group)</h4>
            <h4>BHOPAL</h4>
          </div>
          <div className="tl-content">
            <h1>Architect </h1>
            <p>
              {" "}
              <sub>Sagar Manufacturers Pvt. Ltd. (Sagar Yarn)</sub>
              Infrastructural and Interior Design for upgrading office,
              residences, utility and landscape areas.
              <sub>Sagar Elite</sub>Coordination and quality check for on-going
              construction. Developing and providing relevant drawings on site.
              <sub>Sagar Public School, Dwarka Dham</sub>Coordinating on
              drawings, designing and execution of civil work and interiors of
              the school building.
              <sub>Sagar Public School, Gandhi Nagar</sub>Upgrading and
              enhancing infrastructure of existing school buildings and
              designing additional floors for utility and expansion purposes.
            </p>
          </div>
        </div>

        <div className="tl-item">
          <div
            className="tl-bg"
            style={{
              backgroundImage: "url(https://placeimg.com/801/801/nature)",
            }}
          ></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Aug.2019 – Jan.2021</p>
            <h4>School of Architecture</h4>
            <h4>L.N.C.T. University</h4>
            <h4>BHOPAL</h4>
          </div>
          <div className="tl-content">
            <h1>Assistant Professor</h1>
            <p>
              <sub>Subjects Taught</sub>Architectural Design Building
              Construction Computer Applications Theory of Settlements Theory of
              Design Graphics.
              <sub> Workshops/Seminars Conducted</sub>Architect’s Dairy: Series
              of Seminars by renowned architects and graphic designers.
              <sub>Universal Design Workshop</sub>Implementation of universal
              design in architecture and its need.
              <sub>Model Making</sub>Hands-On activity based on model making of
              famous buildings around the world using various materials and
              finishes.
            </p>
          </div>
        </div>

        <div className="tl-item">
          <div
            className="tl-bg"
            style={{
              backgroundImage: "url(https://placeimg.com/801/801/nature)",
            }}
          ></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Jul.2018 – Aug.2019</p>
            <h4>Dr. D.Y. Patil</h4>
            <h4>College of Architecture</h4>
            <h4>PUNE</h4>
          </div>
          <div className="tl-content">
            <h1> Assistant Professor</h1>
            <p>
              <sub>Subjects Taught</sub>Architectural Design Building
              Construction Computer Applications Research in Architecture
              <sub> Workshops/Seminars Conducted</sub>BuildTech 2019: Building
              Construction Hands-On workshop
              <sub>Design Dialogue with Ar. Sangeet Sharma</sub>Chandigarh based
              architect showcasing his works and sharing experiences.
            </p>
          </div>
        </div>

        <div className="tl-item">
          <div
            className="tl-bg"
            style={{
              backgroundImage: "url(https://placeimg.com/801/801/nature)",
            }}
          ></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Jun.2016 – Jul.2018</p>
            <h4>Manam Architects</h4>
            <h4>BHOPAL</h4>
          </div>
          <div className="tl-content">
            <h1>Assistant Architect</h1>
            <p>
              <sub>Residential Projects</sub>Design development of various
              housing projects including site layouts, construction drawings,
              elevations, landscape and interior design.
              <sub>Commercial Projects</sub>Preparation of project presentations
              and development of concepts for interior layouts.
            </p>
          </div>
        </div>

        {/* Other timeline items go here */}
      </section>
    </div>
  );
};

export default Experience;
