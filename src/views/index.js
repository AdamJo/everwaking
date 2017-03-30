import { h, Component } from "preact";

import { connect } from "preact-redux";
import { bindActions } from "../redux/util";
import * as actions from "../redux/action";
import reduce from "../redux/reducers";

import Card from "./containers/card";
import Background from "./containers/background";

import debounce from "lodash.debounce";

@connect(reduce, bindActions(actions))
export default class App extends Component {
  componentWillMount() {
    let onResize = () => {
      this.props.onResize(window.innerWidth, window.innerHeight);
      this.props.onResetRain();
      this.props.onCreateRain();
    };
    window.addEventListener("resize", debounce(onResize, 300));
    document.addEventListener("mousemove", ({ clientX, clientY }) => {
      this.props.onMouseMove(clientX, clientY);
    });
  }

  render() {
    return (
      <div id="app">
        <Background create={this.props.onCreateRain} />
        <Card {...this.props} />
      </div>
    );
  }
}
