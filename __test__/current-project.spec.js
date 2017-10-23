import { h, Component } from 'preact';
import render from 'preact-render-to-string';
import CurrentProject from '../src/components/current-project';

describe('currentProject', () => {
  it('exports `CurrentProject`', () => {
    expect(typeof CurrentProject).toBe('function');
  });
});

test('snapshot is working!', () => {
  const currentProject = render(CurrentProject);
  expect(currentProject).toMatchSnapshot();
});
