function fibs(n) {
  // Initialize an array with the first two Fibonacci numbers
  let result = [0, 1];

  // If n is 0, return an empty array
  if (n <=0) return "Please enter a valid number of elements to be given an answer.";

  // If n is 1, return the array with only the first Fibonacci number
  if (n === 1) return [0];

  // Generate the Fibonacci sequence iteratively
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

// Example usage
console.log(fibs(8));

// Testing iterative version
console.log(fibs(5));
console.log(fibs(10));

