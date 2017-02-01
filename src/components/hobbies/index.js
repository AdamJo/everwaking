import { h, Component } from 'preact';

export default class Hobbies extends Component {
  cardStyle = { display: 'flex', flexDirection: 'column', height: '95px' };

  header = { 'margin-top': 20, 'font-weight': 'bold' };

  details = { 'font-size': '.9rem', 'margin-top': 10 };

  render() {
    return (
      <div class="light" style={this.cardStyle}>
        <div style={this.header}>Hobbies</div>
        <div style={this.details}>Photography, Travel, Reading</div>
      </div>
    );
  }
}
