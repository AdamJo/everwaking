import { h, Component } from 'preact';
import render from 'preact-render-to-string';
import Card from '../src/views/containers/card';

describe('Card', () => {

  it('exports `Card`', () => {
    expect(typeof Card).toBe('function');
  });

  describe('calculateShadowPosition finds correct coordiantes of svg', () => {
    function calculateShadowPosition(clientX, clientY, width, height, coord=true) {
        // use svg element so I can animate it via `transform: translate(x,y)` and not `box-shadow`
        // ✔ transform: translate(x,y) =  compositor thread only
        // X box-shadow: x y size color = layout, painted, compositor thread
        let calcX = (19 + width / clientX) / (width / clientX);
        let calcY = (19 + height / clientY) / (height / clientY);

        if (calcX > 10.5) {
          calcX = calcX * (-1) + 10;
        } else {
          calcX = (calcX - 11) * (-1);
        }

        if (calcY > 10.5) {
          calcY = calcY * (-1) + 10;
        } else {
          calcY = (calcY - 11) * (-1);
        }

        if (isNaN(calcX) || isNaN(calcY)) {
          calcX = 0;
          calcY = 0;
        }

        return coord ? calcX : calcY;
    }

    it('exports `Card`', () => {
      expect(typeof Card).toBe('function');
    });

    it('calculates X transform translate <= 10', () => {
      expect(calculateShadowPosition(1, 1, 1000, 1000)).toBeLessThanOrEqual(10);
    })

    it('calculates X transform translate to equal 10', () => {
      expect(calculateShadowPosition(1000, 1000, 1000, 1000)).toBe(-10);
    })
    it('calculates X transform translate to equal .5', () => {
      expect(calculateShadowPosition(500, 500, 1000, 1000)).toBe(.5);
    })

    it('calculates Y transform translate <= 10', () => {
      expect(calculateShadowPosition(1, 1, 1000, 1000, false)).toBeLessThanOrEqual(10);
    })

    it('calculates Y transform translate to equal 10', () => {
      expect(calculateShadowPosition(1000, 1000, 1000, 1000, false)).toBe(-10);
    })
    it('calculates Y transform translate to equal .5', () => {
      expect(calculateShadowPosition(500, 500, 1000, 1000, false)).toBe(.5);
    })
  });
});

test('snapshot is working!', () => {
  const card = render(Card);
  expect(card).toMatchSnapshot();
});
