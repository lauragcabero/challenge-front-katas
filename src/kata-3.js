export function kata3(n, m) {
  const result = [];

  for (let i = n; i <= m; i++) {
    let accumulator = 0;
    
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        accumulator += j * j;
      }
    }

    if (Number.isInteger(Math.sqrt(accumulator))) {
      result.push([i, accumulator]);
    }
  }

  return result;
}
