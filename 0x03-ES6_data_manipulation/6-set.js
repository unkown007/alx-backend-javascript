export default function setFromArray(array) {
  if (!(array instanceof Array)) {
    return new Set();
  }

  return new Set(array);
}
