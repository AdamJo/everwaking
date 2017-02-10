export function onResize(width, height) {
	return {
		type: 'ON_RESIZE',
		width: width,
		height: height
	};
}
