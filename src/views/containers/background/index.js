import { h, Component } from 'preact';
import styles from './style.sass';
import Sketch from 'Utils/rain';

export default class Background extends Component {
  constructor() {
    super()
    this.state = { sketch: new Sketch() }
  }

  componentDidMount() {
    this.state.sketch.setup(this.props.windowSize.width, this.props.windowSize.height);
    this.state.sketch.draw();

    setTimeout(() => {
      this.state.sketch.reset();
    }, 10000)
  }

  render() {
    return (
        <canvas id="background" width={this.props.windowSize.width} height={this.props.windowSize.height} style="position: absolute"/>
    );
  }
}
