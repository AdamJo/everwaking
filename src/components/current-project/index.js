import { h, Component } from 'preact';
import styles from './style.css';
// import styled from 'styled-components';
// const Div = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   flex-direction: column;
//   height: 256px;
// `;
export default class CurrentProject extends Component {
  project = { 'margin-bottom': '15px' };
  projectName = { 'margin-top': 0 };
  prjectLogo = { width: '124px' };
  render() {
    return (
      <div className={`${styles.CurrentProject} dark on-dark`}>
        <h3>Current Project</h3>
        <a
          href="https://minidota.watch"
          target="_blank"
          class="on-dark-link content"
        >
          <div className={styles.project}>
            <p className={styles.projectName}>MiniDota.watch</p>
            <svg
              height="132"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 124 132"
              className={styles.projectLogo}
            >
              <path
                fill="#FFF"
                d="M62.7 2.2L3.3 23.3l9.3 78.3 50 28 49.9-28 9.1-78.3L62.7 2.2zm25.8 23.4l6 4.5L92.4 44l-17-13.9 13.1-4.5zM33.7 92.4l-7.9-7.1 7.4-16.2 18.5 19.3-18 4zm62.7-1H84.9L23.2 25.6l11.1-.9L102.2 72l-5.8 19.4z"
              />
            </svg>
          </div>
        </a>
      </div>
    );
  }
}
