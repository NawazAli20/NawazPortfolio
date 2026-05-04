import teachingData from "../dbs/teaching.json";

function Teaching() {
  return (
    <div className="teaching">
      <h1>Teaching</h1>

      <p className="catalog">
        <a href={teachingData.catalogUrl} target="_blank" rel="noreferrer">
          Bradley University CS&IS Course Catalog
        </a>
      </p>

      {teachingData.categories.map((category, index) => (
        <section key={index}>
          <h2 className="category">{category.level}</h2>

          <ul>
            {category.courses.map((course, idx) => (
              <li key={idx}>
                <strong>{course.courseCode}</strong>: {course.title}

                {course.fullTitle && (
                  <>
                    <br />
                    <em>{course.fullTitle}</em>
                  </>
                )}

                {course.expectedOffering && (
                  <>
                    <br />
                    Expected Offering: {course.expectedOffering}
                  </>
                )}

                {course.toolsTopics && (
                  <p>
                    <strong>Topics/Tools:</strong>{" "}
                    {course.toolsTopics.join(", ")}
                  </p>
                )}

                <a href={course.catalogUrl} target="_blank" rel="noreferrer">
                  Course Catalog
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default Teaching;