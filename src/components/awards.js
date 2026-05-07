import React from "react";
import awards from "../dbs/awards.json";
import "../assets/awards.css";

function Awards() {
  const renderAwards = (awardList) => {
    return awardList.map((award, index) => (
      <div key={index} className="award-card">
        <div className="award-year">{award.year}</div>

        <div className="award-info">
          <h3>{award.title}</h3>
          <p>{award.organization}</p>
          <span>{award.category}</span>
        </div>
      </div>
    ));
  };

  return (
    <section className="awards-section">
      <h2>Awards and Honors</h2>

      <div className="award-category">
        <h3>At Bradley University</h3>
        <div className="awards-list">
          {renderAwards(awards.atBradleyUniversity)}
        </div>
      </div>

      <div className="award-category">
        <h3>Before Bradley University</h3>
        <div className="awards-list">
          {renderAwards(awards.beforeBradleyUniversity)}
        </div>
      </div>
    </section>
  );
}

export default Awards;