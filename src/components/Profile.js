import portfolioData from "../dbs/portfolio.json";

function Profile() {
  return (
    <>
      <h1>Profile</h1>
      <section>
        <p className="bio">{portfolioData.profile.Bio[0]}</p>
        <p className="bio">{portfolioData.profile.Bio[1]}</p>
      </section>
    </>
  );
}

export default Profile;