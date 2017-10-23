import { h, Component } from 'preact';
import render from 'preact-render-to-string';
import Contact from '../src/components/contact';

describe('Contact', () => {
  it('exports `Contact`', () => {
    expect(typeof Contact).toBe('function');
  });
});

test('snapshot is working!', () => {
  const contact = render(Contact);
  expect(contact).toMatchSnapshot();
});
