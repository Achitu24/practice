export const detectSums = (array) => {
  const errorMessage = (message) => {
    return { message: message };
  };

  if (!array) {
    throw errorMessage("Array is empty");
  }

  //getting rid of spaces and converting to array of numebers
  const arrayOfNumbers = array
    .split(" ")
    .join("")
    .split(",")
    .map(Number)
    .map((elem) => Math.round(elem));

  if (arrayOfNumbers.length === 1)
    throw errorMessage("Please input more than one number!");

  if (arrayOfNumbers.includes(NaN))
    throw errorMessage("Please input only numbers!");

  let result = [];
  let hashMap = {};

  //HashMap implementation
  //Complexity: O(n^2 - n)

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (hashMap[arrayOfNumbers[i]]) {
      hashMap[arrayOfNumbers[i]].push(i);
    } else {
      hashMap[arrayOfNumbers[i]] = [i];
    }
  }

  for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
    for (let j = i + 1; j <= arrayOfNumbers.length - 1; j++) {
      if (hashMap[arrayOfNumbers[i] + arrayOfNumbers[j]]) {
        hashMap[arrayOfNumbers[i] + arrayOfNumbers[j]].forEach((value) => {
          let tempObject = { pA: i, pB: j, sum: value };
          result.push(tempObject);
        });
      }
    }
  }

  return JSON.stringify(result);
};

export function calculateResult(input) {
  const parsedInput = input.split(",").map((i) => parseInt(i.trim(), 10));
  let error = null;
  let result = "";
  try {
    result = detectSums(input);
  } catch (e) {
    error = e.message;
  }
  return { input: parsedInput, result, error };
}
