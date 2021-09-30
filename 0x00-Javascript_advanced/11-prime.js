// 11-prime

function countPrimeNumbers() {
  const isPrime = (n) => {
    // only need to check for primes to √n to cut complexity
    const nsqrt = Math.sqrt(n);
    for (let i = 2; i <= nsqrt; i++) if (n % i === 0) return false;
    return n > 1;
  };

  return [...Array(98).keys()].filter((n) => isPrime(n + 2)).length;
}

let startTime = performance.now();
window.setTimeout(() => {
  const countPrimePromises = [...Array(100).keys()].map(
    () => new Promise((resolve) => resolve(countPrimeNumbers()))
  );
  Promise.all(countPrimePromises).then((values) => {
    console.log(values);
  });
}, 0);
let endTime = performance.now();
console.log(
  `Execution time of printing countPrimeNumbers was ${
    endTime - startTime
  } milliseconds.`
);
