import { h } from 'preact';
import styles from './style.sass';

export default () => {
  return (
    <div className={`${styles.contacts} light`}>
      <ul className={`${styles.contact} on-light content`}>
        <li>
          <b>adam.johannesmeyer@gmail.com</b>
        </li>
        <li>
          Full Stack Developer
        </li>
        <li>
          <a
            className="on-light-link"
            href="https://github.com/adamjo"
            rel="noopener">
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}
