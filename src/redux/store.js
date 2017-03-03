import { createStore } from 'redux';
import Rain from 'Utils/rain';
import RandomWalker from 'Utils/randomWalker';

let RAIN = new Rain();
let RANDOM_WALKER = new RandomWalker();

let ACTIONS = {
  ON_RESIZE: (state = {}, {windowWidth, windowHeight}) => {
    return {
      ...state,
			windowWidth,
			windowHeight,
    };
  },
  ON_MOUSE_MOVE: (state = {}, {mouseX, mouseY}) => {
    return {
      ...state,
			mouseX,
			mouseY
    };
  },
  ON_RESET_RAIN: (state = {}, action) => {
    RAIN.stopAnimation();
    return { ...state };
  },
  ON_CREATE_RAIN: (state = {}, action) => {
    RAIN.stopAnimation();
    RAIN.setup(state.windowWidth, state.windowHeight);
    RAIN.draw();
    return { ...state };
  },
  ON_RESET_RANDOM_WALKER: (state = {}, ction) => {
    RANDOM_WALKER.stopAnimation();
    return { ...state };
  },
  ON_CREATE_RANDOM_WALKER: (state = {}, action) => {
    RANDOM_WALKER.stopAnimation();
    RANDOM_WALKER.setup(state.windowWidth, state.windowHeight);
    RANDOM_WALKER.draw();
    return { ...state };
  }
};

const INITIAL = {
		windowWidth: window.innerWidth,
		windowHeight: window.innerHeight,
		mouseX: 0,
		mouseY: 0
};

export default createStore(
  (state, action) =>
    action && ACTIONS[action.type]
      ? ACTIONS[action.type](state, action)
      : state,
  INITIAL,
  window.devToolsExtension && window.devToolsExtension()
);

