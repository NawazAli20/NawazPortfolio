import portfolioData from "../dbs/portfolio.json";
import nawazPic from '../assets/Nawaz1.jpg'
import BUlogo from '../assets/Bradley logo2.png'
import '../assets/profile.css'

function Home() {
  return (
    // <section>
    //   <h1>{portfolioData.profile.name}</h1>
    //   <p>{portfolioData.profile.title}</p>
    //   <p>{portfolioData.profile.affiliation}</p>
    //   <p>{portfolioData.profile.location}</p>
    //   <p>E-mail: {portfolioData.profile.email}</p>
    //   <p>Phone: {portfolioData.profile.phone}</p>
    //   <p>
    //     <a href={portfolioData.profile.website} target="_blank">Website</a>
    //     &nbsp; &nbsp;<a href={portfolioData.profile.GoogleScholar} target="_blank">Google Scholar</a>
    //   </p>
    // </section>
    <>
      <h1>{portfolioData.profile.name}</h1>
       <section className="profile-section">
        <div className="profile-card">
        <div className="profile-header">
        <h2>{portfolioData.profile.title}</h2>
          <p className="profile-affiliation">
          {portfolioData.profile.affiliation}
          </p>
        <p className="profile-location">
        {portfolioData.profile.location}
        </p>
        <p><strong>Office:</strong> BR 297, Bradley Hall</p>
        </div>

    <div className="profile-contact">
      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${portfolioData.profile.email}`}>
          {portfolioData.profile.email}
        </a>
      </p>

      <p>
        <strong>Phone:</strong>{" "}
        <a href={`tel:${portfolioData.profile.phone}`}>
          {portfolioData.profile.phone}
        </a>
      </p>
    </div>

    <div className="profile-links">
      <a
        href={portfolioData.profile.website}
        target="_blank"
        rel="noopener noreferrer"
      >
        Website
      </a>

      <a
        href={portfolioData.profile.GoogleScholar}
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Scholar
      </a>
      </div>
    </div>
    </section>
    </>
  );
}

export default Home;