import { h, Component } from 'preact';
import render from 'preact-render-to-string';
import App from '../src/views/';

describe('App', () => {
  it('exports `App`', () => {
    expect(typeof App).toBe('function');
  });
});

test('snapshot is working!', () => {
  const app = render(App);
  expect(app).toMatchSnapshot();
});
