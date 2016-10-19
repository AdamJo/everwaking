import '../stylesheets/main.scss';
import '../container/index.ts';

// adds an 13kb to initial size
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/fromEvent';

// const docStyle = document.documentElement.style;
// console.log(yeup)

// const mouseMove$ = Observable
//   .fromEvent(window, 'mousemove');

// mouseMove$.subscribe(({x, y}) => {
//   docStyle.setProperty('--space', y+'px');
// });

const docStyle = document.documentElement.style;
const el = document.getElementById("nope");
el.addEventListener("mousemove", function({x, y}) {
  docStyle.setProperty('--space', y+'px');
});

document.write('main ts file');

