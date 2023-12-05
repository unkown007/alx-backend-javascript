export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const cnt = weakMap.get(endpoint) || 0;
  if (cnt >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, cnt + 1);
}
