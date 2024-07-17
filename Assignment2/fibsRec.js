function fibsRec(n) {
  // Base cases
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  // Recursively build the sequence
  const fibsArray = fibsRec(n - 1);
  fibsArray.push(
    fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2],
  );
  return fibsArray;
}

// Example usage
console.log(fibsRec(8));

// Example usage
console.log(fibsRec(8));

// Testing recursive version
console.log(fibsRec(5));
console.log(fibsRec(10));
