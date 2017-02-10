import { h, Component } from 'preact';

import { connect } from 'preact-redux';
import { bindActions } from 'Redux/util';
import * as actions from 'Redux/action';
import reduce from 'Redux/reducers';

@connect(reduce, bindActions(actions))
export default class Background extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
