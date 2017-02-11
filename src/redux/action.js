export function onResize(width, height) {
	return {
		type: 'ON_RESIZE',
		width: width,
		height: height
	};
}

export function onMouseMove(x, y) {
	return {
		type: 'ON_MOUSE_MOVE',
		x,
		y
	};
}

