import { h, Component } from 'preact';

import { connect } from 'preact-redux';
import { bindActions } from 'Redux/util';
import * as actions from 'Redux/action';
import reduce from 'Redux/reducers';

import Card from './containers/card';
import Background from './containers/background';

import debounce from 'lodash.debounce';

@connect(reduce, bindActions(actions))
export default class App extends Component {

  componentWillMount() {
    let onResize = () => {
      this.props.onResize(window.innerWidth, window.innerHeight);
      this.props.onReset();
      this.props.onCreate();
    }
    window.addEventListener('resize', debounce(onResize,300));
  }

  render() {
    return (
      <div id="app">
        <Background create={this.props.onCreate}/>
        <Card style="position: absolute"/>
      </div>
    )
  }
}
//