import { h, Component } from 'preact';

import Contact from '../../components/contact';
import CurrentProject from '../../components/current-project';
// import Hobbies from '../../components/hobbies';
import { cardStyle, cardInfo, card, wrapper } from './style.sass';

export default class Card extends Component {

  componentWillUpdate() {
    let card = document.querySelector('.card');
    let calcX = (this.props.windowHeight / 2 - this.props.mouseY) / 50;
    let calcY = (this.props.windowWidth / 2 - this.props.mouseX) / 100;

    if (isNaN(calcX) || isNaN(calcY)) {
      calcX = 0;
      calcY = 0;
    }

    card.style.transform = `rotateX(${calcX}deg) rotateY(${-calcY}deg)`;
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