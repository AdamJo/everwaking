import { h, Component } from 'preact';

import { connect } from 'preact-redux';
import { bindActions } from 'Redux/util';
import * as actions from 'Redux/action';
import reduce from 'Redux/reducers';

import Card from './containers/card';
import Background from './containers/background';

@connect(reduce, bindActions(actions))
export default class App extends Component {

  componentWillMount() {
    let onResize = () => {
      this.props.onResize(window.innerWidth, window.innerHeight);
    }
  }

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