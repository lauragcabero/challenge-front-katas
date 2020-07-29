export function kata1(number) {

  return number.toString()
    .split('')
    .sort((a, b) => b - a)
    .map(Number)
    .join('');
}