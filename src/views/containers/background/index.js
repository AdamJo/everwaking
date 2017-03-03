import { h, Component } from "preact";

export default class Background extends Component {
  componentDidMount() {
    this.props.create();
  }

  render() {
    return <canvas id="background" style="position: absolute" />;
  }
}
