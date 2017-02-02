import { h, Component } from 'preact';
import styles from './style.scss';

export default class Contact extends Component {
  render() {
    return (
      <div className={`${styles.contacts} light`}>
        <ul class="on-light content">
          <li>
            <b>adam.johannesmeyer@gmail.com</b>
          </li>
          <li>
            Front End Developer
          </li>
          <li>
            <a class="on-light-link" href="https://github.com/adamjo">Github</a>
          </li>
        </ul>
      </div>
    );
  }
}
