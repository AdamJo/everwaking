import { createStore } from 'redux';
import Rain from 'Utils/rain';

let sketch = new Rain();
let ACTIONS = {
	ON_RESIZE: ({ windowSize, ...state }, action) => {
		return ({
		windowSize: {width: action.width, height: action.height},...state
	})},
	ON_MOUSE_MOVE: ({ mouseCoords, ...state }, action) => {
		return ({
		mouseCoords: {x: action.x, y: action.y},...state
	})},
	ON_RESET: ({ ...state }, action) => {
		sketch.stopAnimation();
		return ({...state})
	},
	ON_CREATE: ({ windowSize, ...state }, action) => {
		sketch.stopAnimation();
    sketch.setup(windowSize.width, windowSize.height);
    sketch.draw();
		return ({...state})
	}
}

const INITIAL = {
	windowSize: {width: window.innerWidth, height: window.innerHeight},
	mouseCoords: {}
};

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, window.devToolsExtension && window.devToolsExtension());