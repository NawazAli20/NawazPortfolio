import React from "react";
import "../assets/researchSkills.css";

function ResearchSkills() {
  const researchInterests = [
    "Data and Sentiment Analytics",
    "Large Language Models (LLMs)",
    "Network Coding",
    "On-demand Scheduling",
    "Data Broadcasting",
    "Real-time Scheduling",
    "Vehicular Networks (V2X Communication)",
    "Vehicular Cyber Physical Systems (VCPS)",
    "Software-defined Vehicular Networks (SDN-VANETs)"
  ];

  const programmingSkills = [
    "C/C++",
    "Python (NumPy, Pandas, Matplotlib, Scikit-learn, Keras, TensorFlow)",
    "Java",
    "PHP",
    "MySQL",
    "HTML, CSS, JavaScript",
    "React, NodeJS",
    "MATLAB",
    "Network Simulator (NS-3)",
    "C Simulator (CSIM)",
    "SUMO (Simulation of Urban Mobility)",
    "PTV VISSIM",
    "Linux Kernel",
    "ITS Framework",
    "Cohda MK5 Box",
    "DriverModel.dll",
    "Shell Programming",
    "Cisco Packet Tracer",
    "LLM Transformer Architecture"
  ];

  return (
    <section className="research-skills">
      <h2>Research Interests & Skills</h2>

      {/* Research Interests */}
      <div className="section-block">
        <h3>Research Interests</h3>
        <div className="tag-container">
          {researchInterests.map((item, index) => (
            <span key={index} className="tag">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Programming Skills */}
      <div className="section-block">
        <h3>Simulation / Programming Experience</h3>
        <div className="tag-container">
          {programmingSkills.map((item, index) => (
            <span key={index} className="tag skill">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchSkills;