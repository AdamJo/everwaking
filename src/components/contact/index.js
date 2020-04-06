import { h, Component } from "preact";
import styles from "./style.css";
import pdfFile from "../../assets/Adam_Johannesmeyer_Resume.pdf";

export default class currentProject extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render({ jobTitle, email }) {
    return (
      <div className={`${styles.contacts} light`}>
        <ul className={`${styles.contact} on-light content`}>
          <li>
            <b>{email}</b>
          </li>
          <li>
            {jobTitle}
          </li>
          <li>
            <a className="on-light-link" href={pdfFile}>Resume</a>{" - "}
            <a
              className="on-light-link"
              href="https://github.com/adamjo"
              rel="noopener"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
