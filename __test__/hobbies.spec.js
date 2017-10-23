import { h, Component } from 'preact';
import render from 'preact-render-to-string';
import Hobbies from '../src/components/hobbies';

describe('Hobbies', () => {
  it('exports `Hobbies`', () => {
    expect(typeof Hobbies).toBe('function');
  });
});

test('snapshot is working!', () => {
  const hobbies = render(Hobbies);
  expect(hobbies).toMatchSnapshot();
});
