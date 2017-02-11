import { h, Component } from 'preact';
import styles from './style.sass';

import { connect } from 'preact-redux';
import { bindActions } from 'Redux/util';
import * as actions from 'Redux/action';
import reduce from 'Redux/reducers';

@connect(reduce, bindActions(actions))
export default class Background extends Component {
  
  componentDidMount() {
  }

  render() {
    return (
        <canvas width={this.props.windowWidth} height={this.props.windowHeight} style="position: absolute"/>
    );
  }
}
