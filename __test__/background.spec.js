import { h, Component } from 'preact';
import render from 'preact-render-to-string';
import Background from '../src/routes/background';

describe('Background', () => {
  it('exports `Background`', () => {
    expect(typeof Background).toBe('function');
  });
});

test('snapshot is working!', () => {
  const background = render(Background);
  expect(background).toMatchSnapshot();
});
