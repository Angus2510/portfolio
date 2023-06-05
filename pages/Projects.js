import Layout from "../components/MyLayout";
// Component for projects
const Projects = () => (
  <Layout>
    <h1>Projects</h1>
    <ul>
      <li>
        <span className="link">
          <a href="https://github.com/Angus2510/task-8-num2">
            working with mongo
          </a>
        </span>
      </li>
      <li>
        <span className="link">
          <a href="https://github.com/Angus2510/hangman">
            Hangman
          </a>
        </span>
      </li>
      <li>
        <span className="link">
          <a href="https://github.com/Angus2510/my-first-project">
           My first project
          </a>
        </span>
      </li>
    </ul>

    <style jsx>{`
      h1 {
        color: #333;
      }
      ul {
        list-style-type: none;
        padding-left: 0;
      }
      li {
        margin-bottom: 10px;
      }
      .link a {
        color: #007bff;
        text-decoration: none;
      }
    `}</style>
  </Layout>
);

export default Projects;
