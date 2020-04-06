import { h, Component } from "preact";
import styles from "./style.css";

export default class currentProject extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render({ project, projectLink, projectImage }) {
    return (
      <div className={`${styles.currentProject} light on-light`}>
        <h3>Project {this.props}</h3>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener"
          class="on-light-link content"
        >
          <div className={styles.project}>
            <p className={styles.projectName}>{project}</p>
            {projectImage}
          </div>
        </a>
      </div>
    );
  }
}
