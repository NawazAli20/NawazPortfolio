import portfolioData from "../dbs/portfolio.json";
import ResearchSkills from "./researchSkills";
import '../assets/profile.css';

function Profile() {
  return (
    <>
      <h2>Profile</h2>
      {/* <section>
        <p className="bio">{portfolioData.profile.Bio[0]}</p>
        <p className="bio">{portfolioData.profile.Bio[1]}</p>
      </section> */}
        <div className="profile-bio-card">
      {/* <h2>Profile</h2> */}
      {portfolioData.profile.Bio.map((paragraph, index) => (
        <p key={index} className="bio">
          {paragraph}
        </p>
      ))}
  </div>
      <ResearchSkills/>
    </>
  );
}

export default Profile;