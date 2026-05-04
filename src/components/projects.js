import React, { useState, useEffect } from "react";
import projectsData from '../dbs/projects.json' // adjust path if needed

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData.active_research_projects);
  }, []);

  return (
    <div className="projects-container">
      <h1>Active Research Projects</h1>

      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>

            <p><strong>Objective:</strong> {project.objective}</p>
            <p><strong>Funder:</strong> {project.funder}</p>
            <p><strong>Graduate Students:</strong> {project.graduate_students}</p>
            <p><strong>Status:</strong> {project.status}</p>
            <p><strong>Start Year:</strong> {project.start_year}</p>

            {/* Collaborators */}
            {project.collaborators?.length > 0 && (
              <>
                <strong>Collaborators:</strong>
                <ul>
                  {project.collaborators.map((collab, i) => (
                    <li key={i}>{collab}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Publications */}
            {project.publications?.length > 0 && (
              <>
                <strong>Publications:</strong>
                <ul>
                  {project.publications.map((pub, i) => (
                    <li key={i}>{pub}</li>
                  ))}
                </ul>
              </>
            )}

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Projects;