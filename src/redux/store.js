import { createStore } from 'redux';
import Sketch from 'Utils/rain';

let ACTIONS = {
	ON_RESIZE: ({ windowSize, ...state }, action) => {
		let sketch = new Sketch();
    sketch.setup(action.width, action.height);
    sketch.draw();
		return ({
		windowSize: {width: action.width, height: action.height},...state
	})},
	ON_MOUSE_MOVE: ({ mouseCoords, ...state }, action) => {
		return ({
		mouseCoords: {x: action.x, y: action.y},...state
	})}
};

const INITIAL = {
	windowSize: {width: window.innerWidth, height: window.innerHeight},
	mouseCoords: {}
};

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, window.devToolsExtension && window.devToolsExtension());