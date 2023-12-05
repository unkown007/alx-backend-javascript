export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  function update(value, key, map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  map.forEach(update);
  return map;
}
