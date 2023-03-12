export function limit(num, min, max) {
    return Math.max(Math.min(num, max), min);
  }
  
  export function interpolate(x, x1, y1, x2, y2) {
    // x-x1/x2-x1 = y-y1/y2-y1
    return limit(y1 + ((x - x1) / (x2 - x1)) * (y2 - y1), y1, y2);
  }
  
  export const MIN_PROGRESS = 0;
  export const MAX_PROGRESS = 100;
  
  export function interpolateToProgress(v, min, max) {
    return interpolate(v, min, MIN_PROGRESS, max, MAX_PROGRESS);
  }
  
  export function interpolateProgress(v, min, max) {
    return interpolate(v, MIN_PROGRESS, min, MAX_PROGRESS, max);
  }
  
  export function half(n) {
    return n / 2;
  }
  
  export function setLeftOffset(el, offset) {
    el.dataset.offset = offset;
  }
  
  export function getLeftOffset(el) {
    const offset = el?.dataset?.offset ?? "0";
    return parseFloat(offset, 10);
  }
  