import { h, Component } from 'preact';

import Contact from '../../components/contact';
import CurrentProject from '../../components/current-project';
import Hobbies from '../../components/hobbies';
import { cardStyle, cardInfo, mySvg } from './style.sass';

export default class Card extends Component {

  componentDidMount() {
    // const el = document.getElementById('move-shadow');
    // svgElement.style.transform = `translate(${this.props.mouseX}px, ${this.props.mouseY}px)`;
  }

  componentWillUpdate(nextProps, nextState) {
    // svgElement.style.transform = `translate(${nextProps.mouseX}px, ${nextProps.mouseY}px)`;
  }

  render() {
    return (
      <div id="move-shadow" className={cardStyle}>
        <div className={cardInfo}>
          <svg
            id="svgElement"
            className={mySvg}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <filter id="blur-2">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
              </filter>
            </defs>
            <rect
              filter="url(#blur-2)"
              id="Rectangle"
              stroke="none"
              fill="rgba(204, 173, 0, .2)"
              fill-rule="evenodd"
              x="2"
              y="2"
              width="405"
              height="473"
            />
          </svg>
          <Contact />
          <CurrentProject />
          <Hobbies />
        </div>
      </div>
    );
  }
}
