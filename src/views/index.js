import { h, Component } from 'preact';

import { connect } from 'preact-redux';
import { bindActions } from 'Redux/util';
import * as actions from 'Redux/action';
import reduce from 'Redux/reducers';

import Card from './containers/card';
import Background from './containers/background';

// need extra abstraction work with hot modules reloading in /src/index.js
@connect(reduce, bindActions(actions))
export default class App extends Component {
  constructor() {
    super();
    // this.calculateShadowPosition = this.calculateShadowPosition.bind(this);
  }

  componentWillMount() {
    let onResize = () => {
      this.props.onResize(window.innerWidth, window.innerHeight);
    }
    onResize();
    window.addEventListener('resize', onResize);
    // window.addEventListener('mousemove', this.calculateShadowPosition);
  }

  // calculateShadowPosition({ clientX, clientY }) {
  //   // use svg element so I can animate it via `transform: translate(x,y)` and not `box-shadow`
  //   // ✔ transform: translate(x,y) =  compositor thread only
  //   // X box-shadow: x y size color = layout, painted, compositor thread
  //   let calcX = (8 + this.props.windowSize.width / clientX) / (this.props.windowSize.width / clientX);
  //   let calcY = (8 + this.props.windowSize.height / clientY) / (this.props.windowSize.height / clientY);

  //   if (calcX > 5.5) {
  //     calcX = (calcX * -1) + 5;
  //   } else {
  //     calcX = (calcX - 5) * (-1);
  //   }

  //   if (calcY > 5.5) {
  //     calcY = (calcY * -1) + 5;
  //   } else {
  //     calcY = (calcY - 5) * (-1);
  //   }

  //   if (isNaN(calcX) || isNaN(calcY)) {
  //     calcX = 0;
  //     calcY = 0;
  //   }
  //   this.setState({calcX})
  //   this.setState({calcY})
  //   this.props.onMouseMove(calcX, calcY);
  // }

  render() {
    return (
      <div id="app">
        <Background windowSize={this.props.windowSize}/>
        <Card style="position: absolute"/>
      </div>
    )
  }
}
//