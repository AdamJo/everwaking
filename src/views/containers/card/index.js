import { h, Component } from 'preact';

import Contact from '../../components/contact';
import CurrentProject from '../../components/current-project';
// import Hobbies from '../../components/hobbies';
import { cardStyle, cardInfo } from './style.sass';

export default () => {
  return (
    <div id="move-shadow" className={cardStyle}>
      <div className={cardInfo}>
        <Contact />
        <br/>
        <CurrentProject />
      </div>
    </div>
  );
}