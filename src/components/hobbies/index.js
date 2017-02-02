import { h, Component } from 'preact';
import styles from './style.css';
export default class Hobbies extends Component {
  render() {
    return (
      <div className={`${styles.cardStyle} light`}>
        <div className={styles.header}>Hobbies</div>
        <div className={styles.details}>Photography, Travel, Reading</div>
      </div>
    );
  }
}
