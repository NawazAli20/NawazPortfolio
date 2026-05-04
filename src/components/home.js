import portfolioData from "../dbs/portfolio.json";
import nawazPic from '../assets/Nawaz1.jpg'
import BUlogo from '../assets/Bradley logo2.png'

function Home() {
  return (
    <section>
      <h1>{portfolioData.profile.name}</h1>
      {/* <p> <img src={BUlogo} alt="BU logo" /></p>
      <p> <img src={nawazPic} alt="Nawaz pic" /></p>
       */}
      <p>{portfolioData.profile.title}</p>
      <p>{portfolioData.profile.affiliation}</p>
      <p>{portfolioData.profile.location}</p>
      <p>E-mail: {portfolioData.profile.email}</p>
      <p>Phone: {portfolioData.profile.phone}</p>
      <p>
        <a href={portfolioData.profile.website} target="_blank">Website</a>
        &nbsp; &nbsp;<a href={portfolioData.profile.GoogleScholar} target="_blank">Google Scholar</a>
      </p>
    </section>
  );
}

export default Home;