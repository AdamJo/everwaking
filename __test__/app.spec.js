import { h, Component } from 'preact';
import render from 'preact-render-to-string';
import App from '../src/views/';

describe('preact-layout', () => {
  it('exports `App`', () => {
    expect(typeof App).toBe('object');
  });
});

test('test is working!', () => {
  const app = render(App);
  // let tree = app.toJSON();
  expect(app).toMatchSnapshot();
});
