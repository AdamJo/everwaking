/**
 *  Creates a random number between the given min and max
 *
 * @param  {number} min - minimum value of random number
 * @param  {number} max - maximum value of random number
 * @return {number}       random number between the two param numbers
 */
export const _random = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

/**
 * normalizes a given value to a new set of min/max.
 * convert processing map to javascript
 * http://stackoverflow.com/questions/20910091/recreating-the-processing-map-function-in-javascript
 * 
 * @param  {number} value  - initial number to be normalized
 * @param  {number} start1 - initial min param size of value given
 * @param  {number} stop1  - initial max param size of value given
 * @param  {number} start2 - min size for normalized value
 * @param  {number} stop2  - max size for normalized value
 * @return {number}        - normalized number
 * @example this._mapConvert(this.z, 0, 20, 1, 3); --> number between 1 and 3
 */
export const _mapConvert = (value, start1, stop1, start2, stop2) =>
  start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
