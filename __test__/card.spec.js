import { h, Component } from 'preact';
import render from 'preact-render-to-string';
import Card from '../src/routes/card';

describe('Card', () => {

  it('exports `Card`', () => {
    expect(typeof Card).toBe('function');
  });

  describe('calculateShadowPosition finds correct coordiantes of svg', () => {
    function calculateShadowPosition(clientX, clientY, width, height, coord=true) {
        // use svg element so I can animate it via `transform: translate(x,y)` and not `box-shadow`
        // ✔ transform: translate(x,y) =  compositor thread only
        // X box-shadow: x y size color = layout, painted, compositor thread
        let calcX = (8 + width / clientX) / (width / clientX);
        let calcY = (8 + height / clientY) / (height / clientY);

        if (calcX > 5.5) {
          calcX = calcX * (-1) + 5;
        } else {
          calcX = (calcX - 5) * (-1);
        }

        if (calcY > 5.5) {
          calcY = calcY * (-1) + 5;
        } else {
          calcY = (calcY - 5) * (-1);
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

    it('calculates X transform translate <= 4', () => {
      expect(calculateShadowPosition(1, 1, 1000, 1000)).toBeLessThanOrEqual(4);
    })

    it('calculates X transform translate to equal -4', () => {
      expect(calculateShadowPosition(1000, 1000, 1000, 1000)).toBe(-4);
    })
    it('calculates X transform translate to equal 0', () => {
      expect(calculateShadowPosition(500, 500, 1000, 1000)).toBe(0);
    })

    it('calculates Y transform translate <= 4', () => {
      expect(calculateShadowPosition(1, 1, 1000, 1000, false)).toBeLessThanOrEqual(4);
    })

    it('calculates Y transform translate to equal -4', () => {
      expect(calculateShadowPosition(1000, 1000, 1000, 1000, false)).toBe(-4);
    })
    it('calculates Y transform translate to equal 0', () => {
      expect(calculateShadowPosition(500, 500, 1000, 1000, false)).toBe(0);
    })
  });
});

test('snapshot is working!', () => {
  const card = render(Card);
  expect(card).toMatchSnapshot();
});
