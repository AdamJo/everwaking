export function onResize(windowWidth, windowHeight) {
  return {
    type: 'ON_RESIZE',
    windowWidth,
		windowHeight
  };
}

export function onMouseMove(mouseX, mouseY) {
  return {
    type: 'ON_MOUSE_MOVE',
    mouseX,
		mouseY
  };
}

export function onResetRain() {
  return {
    type: 'ON_RESET_RAIN'
  };
}

export function onCreateRain() {
  return {
    type: 'ON_CREATE_RAIN'
  };
}

export function onResetWalker() {
  return {
    type: 'ON_RESET_WALKER'
  };
}

export function onCreateRandomWalker() {
  return {
    type: 'ON_CREATE_RANDOM_WALKER'
  };
}
