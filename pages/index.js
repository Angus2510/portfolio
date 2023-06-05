import Layout from "../components/MyLayout";

const About = () => (
  // About component
  <Layout>
    <div className="about-content">
      {" "}
      <div className="logo">
        {" "}
        <img src="./static/logo.png" alt="logo" />{" "}
      </div>
      <div className="bio">
        {" "}
        <h2>About Me</h2>
        <p>
          I consider myself to be a people’s person. I enjoy meeting new people,
          and experiencing different cultures and personalities. I have strong
          interpersonal skills and can connect with others easily. I thrive when
          I am presented with challenges, and view them as opportunities to
          learn and grow. I do well in high pressure environments, and am very
          result driven. I also love to help other people overcome their
          challenges in the workplace, and share knowledge with others,
          encouraging growth and unity as a team. I have found that I naturally
          assume a leadership role in a team dynamic, and others often look to
          me for direction. I am a strategic thinker, and enjoy using my
          initiative to find solutions when presented with the unexpected. I
          learn fast, and take pride in the abilty to absorb and retain large
          amounts of information.,
        </p>
        <p>
          INTERESTS & HOBBIES, Reading, Sporting activities, Fishing, Boating,
          Saling, Gardening, Cooking
        </p>
        <h3>skills</h3>
        <div className="container">
          <div className="css">
            {" "}
            <img src="./static/css.png" alt="CSS" />{" "}
          </div>
          <div className="skills">
            {" "}
            <img src="./static/html.png" alt="HTML" />{" "}
          </div>
          <div className="skills">
            {" "}
            <img src="./static/javascript.png" alt="JavaScript" />{" "}
          </div>
          <div className="skills">
            {" "}
            <img src="./static/mongo.png" alt="Mongo" />{" "}
          </div>
          <div className="skills">
            {" "}
            <img src="./static/nextjs.png" alt="next" />{" "}
          </div>
          <div className="skills">
            {" "}
            <img src="./static/react.png" alt="React" />{" "}
          </div>
         
        </div>
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Varsity College</h3>
            <p>Bachelor of administration and hospitality management</p>
            <p>Graduated: 2018</p>
          </li>
          <li>
            <h3>HyperionDev Bootcamp</h3>
            <p>Full Stack Web Development</p>
            <p>2023 - Current</p>
          </li>
        </ul>
      </div>
    </div>
    <style jsx>{`
      /* CSS styles for the About component */
      .about-content {
        display: flex;
        align-text: center;
        
      }

      .logo img {
  
        width: 200px;
        height: 200px;
        margin-right: 20px;
        margin-top: 20px;
        object-fit: cover;
      }
      .container{
        display: flex
        
      }
      .skills img {        
        
        width: 80px;
        height: 80px;
       
        margin: 20px;
      }

      .bio {
        flex: 1;
      }

      h2 {
        color: #333;
      }

      p {
        margin-bottom: 10px;
      }
    `}</style>
  </Layout>
);

export default About;
