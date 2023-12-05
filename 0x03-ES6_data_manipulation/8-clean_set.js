export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const parts = [];
  for (const elem of set) {
    if (typeof elem === 'string' && startString.length > 0 && elem.startsWith(startString)) {
      parts.push(elem.substring(startString.length));
    }
  }
  return parts.join('-');
}
