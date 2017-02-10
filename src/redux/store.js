import { createStore } from 'redux';

let ACTIONS = {
	ON_RESIZE: ({ windowSize, ...state }, action) => {
		return ({
		windowWidth: action.width,
		windowHeight: action.height
	})}
};

const INITIAL = {
	windowSize: []
};

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, window.devToolsExtension && window.devToolsExtension());