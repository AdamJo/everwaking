import { h, Component } from 'preact';
import styles from './style.sass';

export default class Contact extends Component {
  render() {
    return (
      <div className={`${styles.contacts} light`}>
        <ul className={`${styles.contact} on-light content`}>
          <li>
            <b>adam.johannesmeyer@gmail.com</b>
          </li>
          <li>
            Front End Developer
          </li>
          <li>
            <a className="on-light-link" href="https://github.com/adamjo">
              Github
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
