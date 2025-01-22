import React from "react";
import "./Skill.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Skill = () => {
  return (
    <div id="skills" className="skills">
      <div className='skills-title'>
              <h1>Skills</h1>
              <img src={theme_pattern} alt="" />
            </div>
      <div className="skills-types">
        <div className="skill-type">
          <p>Java</p>
           <hr style={{ width: "100%" }} />
        </div>

        <div className="skill-type">
          <p>Python </p> <hr style={{ width: "70%" }} />
        </div>

        <div className="skill-type">
          <p>JavaScript </p>
          <hr style={{ width: "75%" }} />
        </div>
        <div className="skill-type">
          <p>DSA</p>
           <hr style={{ width: "100%" }} />
        </div>

        <div className="skill-type">
          <p>HTML & CSS </p> <hr style={{ width: "75%" }} />
        </div>

        <div className="skill-type">
          <p>React JS </p>
          <hr style={{ width: "75%" }} />
        </div>

        <div className="skill-type">
          <p>Node JS </p>
          <hr style={{ width: "65%" }} />
        </div>

        <div className="skill-type">
          <p>BootStrap</p>
          <hr style={{ width: "75%" }} />
        </div>

        <div className="skill-type">
          <p>MongoDB</p>
          <hr style={{ width: "70%" }} />
        </div>

        <div className="skill-type">
          <p>SQL </p>
          <hr style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
