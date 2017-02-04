import { h, Component } from 'preact';

import Contact from '../../components/contact';
import CurrentProject from '../../components/current-project';
import Hobbies from '../../components/hobbies';
import { cardStyle, cardInfo, mySvg } from './style.sass';

export default class Card extends Component {
  componentDidMount() {
    // use svg element so I can animate it via `transform: translate(x,y)` and not `box-shadow`
    // ✔ transform: translate(x,y) =  compositor thread only
    // X box-shadow: x y size color = layout, painted, compositor thread
    const el = document.getElementById('move-shadow');
    const svgElement = document.getElementById('svgElement');

    el.addEventListener('mousemove', element => {
      let x = element.clientX;
      let y = element.clientY;

      let height = window.innerHeight;
      let width = window.innerWidth;

      let calcX = (19 + width / x) / (width / x);
      let calcY = (19 + height / y) / (height / y);

      if (calcX > 10.5) {
        calcX = calcX * (-1) + 10;
      } else {
        calcX = (calcX - 10) * (-1);
      }

      if (calcY > 10.5) {
        calcY = calcY * (-1) + 10;
      } else {
        calcY = (calcY - 10) * (-1);
      }

      if (isNaN(calcX) || isNaN(calcY)) {
        calcX = 0;
        calcY = 0;
      }

      svgElement.style.transform = `translate(${calcX}px, ${calcY}px)`;
    });
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