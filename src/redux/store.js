import { createStore } from "redux";
import Rain from "../utils/rain";

import { h } from "preact";

let RAIN = new Rain();

const svgImage = (
  <svg height="132" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 132">
    <path
      fill="#222"
      d="M62.7 2.2L3.3 23.3l9.3 78.3 50 28 49.9-28 9.1-78.3L62.7 2.2zm25.8 23.4l6 4.5L92.4 44l-17-13.9 13.1-4.5zM33.7 92.4l-7.9-7.1 7.4-16.2 18.5 19.3-18 4zm62.7-1H84.9L23.2 25.6l11.1-.9L102.2 72l-5.8 19.4z"
    />
  </svg>
);

let ACTIONS = {
  ON_RESIZE: (state = {}, { windowWidth, windowHeight }) => {
    return {
      ...state,
      windowWidth,
      windowHeight,
    };
  },
  ON_MOUSE_MOVE: (state = {}, { mouseX, mouseY }) => {
    return {
      ...state,
      mouseX,
      mouseY,
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
};

const INITIAL = {
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
  mouseX: 0,
  mouseY: 0,
  project: "MiniDota.watch",
  projectLink: "https://minidota.watch",
  projectImage: svgImage,
  jobTitle: "Full Stack Developer",
  email: "adam.johannesmeyer@gmail.com",
};

export default createStore(
  (state, action) =>
    action && ACTIONS[action.type]
      ? ACTIONS[action.type](state, action)
      : state,
  INITIAL,
  window.devToolsExtension && window.devToolsExtension()
);
