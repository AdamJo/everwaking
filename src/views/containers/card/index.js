import { h, Component } from 'preact';

import Contact from '../../components/contact';
import CurrentProject from '../../components/current-project';
import Hobbies from '../../components/hobbies';
import { cardStyle, cardInfo, mySvg } from './style.sass';

import { connect } from 'preact-redux';
import store from 'Redux/store';
import { bindActions } from 'Redux/util';
import * as actions from 'Redux/action';
import reduce from 'Redux/reducers';

@connect(reduce, bindActions(actions))
export default class Card extends Component {
  constructor() {
    super();
    this.calculateShadowPosition = this.calculateShadowPosition.bind(this);
  }

  componentDidMount() {
    const el = document.getElementById('move-shadow');
    const svgElement = document.getElementById('svgElement');
    el.addEventListener('mousemove', this.calculateShadowPosition);
  }

  calculateShadowPosition({ clientX, clientY }) {
    // use svg element so I can animate it via `transform: translate(x,y)` and not `box-shadow`
    // ✔ transform: translate(x,y) =  compositor thread only
    // X box-shadow: x y size color = layout, painted, compositor thread
    let calcX = (8 + this.props.windowWidth / clientX) / (this.props.windowWidth / clientX);
    let calcY = (8 + this.props.windowHeight / clientY) / (this.props.windowHeight / clientY);

    if (calcX > 5.5) {
      calcX = calcX * (-1) + 5;
    } else {
      calcX = (calcX - 5) * (-1);
    }

    if (calcY > 5.5) {
      calcY = calcY * (-1) + 5;
    } else {
      calcY = (calcY - 5) * (-1);
    }

    if (isNaN(calcX) || isNaN(calcY)) {
      calcX = 0;
      calcY = 0;
    }

    svgElement.style.transform = `translate(${calcX}px, ${calcY}px)`;
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
              fill="rgba(100, 100, 100, .4)"
              fill-rule="evenodd"
              x="5"
              y="5"
              width="400"
              height="468"
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
