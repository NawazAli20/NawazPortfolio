import publicationsData from '../dbs/publications.json'

function Publications() {
  return (
    <div>
      <h1>Publications</h1>

      {Object.keys(publicationsData)
        .sort((a, b) => b - a) // latest year first
        .map((year) => (
          <div key={year}>
            <h2 className='year'>{year}</h2>

            <ul>
              {publicationsData[year].map((pub, index) => (
                <li key={index}>
                  <strong>{pub.title}</strong><br />

                  {pub.authors} <br />

                  {pub.journal && <em>{pub.journal}</em>}{" "}
                  {pub.booktitle && <em>{pub.booktitle}</em>} &nbsp; &nbsp;

                  {/* Links */}
                  {pub.urlSource ? (
                    <a href={pub.urlSource} target="_blank" rel="noreferrer">
                      View Paper
                    </a>
                  ) : (
                    <a href={pub.url} target="_blank" rel="noreferrer">
                      Search
                    </a>
                  )}
                  
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default Publications;