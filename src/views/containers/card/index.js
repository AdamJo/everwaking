import { h, Component } from 'preact';

import Contact from '../../components/contact';
import CurrentProject from '../../components/current-project';
// import Hobbies from '../../components/hobbies';
import { cardStyle, cardInfo, card, wrapper } from './style.sass';

export default class Card extends Component {

  componentDidMount() {
    let card = document.querySelector('.card');
    document.addEventListener('mousemove', ({clientX, clientY, pageY, pageX}) => {
      let calcX = (window.innerHeight / 2 - clientY) / 50;
      let calcY = (window.innerWidth / 2 - clientX) / 100;

      if (isNaN(calcX) || isNaN(calcY)) {
        calcX = 0;
        calcY = 0;
      }

      card.style.transform = `rotateX(${calcX}deg) rotateY(${-calcY}deg)`;
    });
  }

  render() {
    return (
      <div className={wrapper}>
      <div id="move-shadow" class="card" className={`${cardStyle} card`} style='will-change: transform; transform-style: preserve-3d;'>
        <div className={cardInfo}>
          <Contact />
          <hr/>
          <CurrentProject />
        </div>
      </div>
      </div>
    )
  }
}