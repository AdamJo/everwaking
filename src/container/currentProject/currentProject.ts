import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';

export function moveShadow() {
  const docStyleRx = document.documentElement.style;

  const mouseMove$ = Observable
    .fromEvent(window, 'mousemove');

  mouseMove$.subscribe(({x, y}) => {

    let height = window.innerHeight;
    let width = window.innerWidth;

    let calcX = (19 + (width / x)) / (width / x)
    let calcY = (19 + (height / y)) / (height / y)

    if (calcX > 10.5) {
      calcX = ((calcX) * -1 + 10);
    } else {
      calcX = (calcX - 10) * -1;
    }

    if (calcY > 10.5) {
      calcY = ((calcY) * -1 + 10);
    } else {
      calcY = (calcY - 10) * -1;
    }

    if (isNaN(calcX) || isNaN(calcY)) {
      calcX = 0;
      calcY = 0;
    }

    docStyleRx.setProperty('--x', calcX*3+'px');
    docStyleRx.setProperty('--y', calcY*3+'px');
  });
}

moveShadow();