import { h, Component } from 'preact';
import style from './style';

import Contact from '../contact';
import CurrentProject from '../current-project';

export default class Card extends Component {
	cardStyle = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		height: '100%'
	}

	cardInfo = {
		boxShadow: "var(--x) var(--y) 5px rgba(100, 100, 100, .4)",

		margin: 'auto',
		minHeight: '250px',
		minWidth: '400px',

		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		flexWrap: 'wrap',

		textAlign: 'center'
	}
	
	componentDidMount() {
		const docStyle = document.documentElement.style;
		const el = document.getElementById("move-shadow");
		el.addEventListener("mousemove", (element) => {
				let x = element.clientX;
				let y = element.clientY;

				let height = window.innerHeight;
				let width = window.innerWidth;

				let calcX = (19 + (width / x)) / (width / x);
				let calcY = (19 + (height / y)) / (height / y);

				if (calcX > 10.5) {
					calcX = ((calcX) * -1 + 10);
				} else {
					calcX = (calcX - 10) * -1;
				}

				if (calcY > 10.5) {
					calcY = ((calcY) * -1 + 10);
				} else {
					calcY = (calcY - 10) * -1;
				}

				if (isNaN(calcX) || isNaN(calcY)) {
					calcX = 0;
					calcY = 0;
				}

				docStyle.setProperty('--x', calcX+'px');
				docStyle.setProperty('--y', calcY+'px');
		})
	}

	render() {
		return (
      <div id="move-shadow" style={this.cardStyle}>
      <div style={this.cardInfo}>
        <Contact/>
        <CurrentProject/>
      </div>
      </div>
		);
	}
}
