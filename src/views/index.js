import { h, Component } from 'preact';

import { Provider } from 'preact-redux';
import { connect } from 'preact-redux';
import store from 'Redux/store';
import { bindActions } from 'Redux/util';
import * as actions from 'Redux/action';
import reduce from 'Redux/reducers';

import Card from './containers/card';
import Background from './containers/background';

// need extra abstraction work with hot modules reloading in /src/index.js
@connect(reduce, bindActions(actions))
class MainApp extends Component {
  componentWillMount() {
    let onResize = () => {
      this.props.onResize(window.innerWidth, window.innerHeight);
    }

    onResize();
    window.addEventListener('resize', onResize);
  }
  render() {
    return (
      <div id="app">
        <Background/>
        <Card/>
      </div>
    )
  }
}

export default (
  <Provider store={store}>
    <MainApp/>
   </Provider>
);
