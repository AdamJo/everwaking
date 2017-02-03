import { h, Component } from 'preact';
import { hobbiesStyle, header, details } from './style.sass';
export default class Hobbies extends Component {
  render() {
    return (
      <div className={`${hobbiesStyle} light`}>
        <div className={header}>Hobbies</div>
        <div className={details}>Photography, Travel, Reading</div>
      </div>
    );
  }
}
