import React from "react";
import appointments from '../dbs/appointments.json';
import "../assets/appointments.css";

function Appointments() {
  return (
    <section className="appointments-section">
      <h2 className="appointments-title">Professional Appointments</h2>

      <div className="timeline">
        {appointments.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>{item.title}</h3>

              <p className="timeline-department">
                {item.department}
              </p>

              <p className="timeline-institution">
                {item.institution}, {item.location}
              </p>

              <span className="timeline-date">
                {item.startDate} – {item.endDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Appointments;