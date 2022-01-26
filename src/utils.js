export const detectSums = (array) => {
  const errorMessage = (message) => {
    return { message: message };
  };

  let result = [];

  if (!array || array.length === 0) throw errorMessage("Input is empty");

  //getting rid of spaces and converting to array of numebers
  let numberArray = array
    .split(" ")
    .join("")
    .split(",")
    .map(Number)
    .map((elem) => Math.round(elem));

  //sorting the numbers so that I can loop through the array and make sure I am not getting the same sum indexes twice
  numberArray = numberArray.sort((a, b) => a - b);

  console.log(numberArray);

  if (numberArray.length === 1)
    throw errorMessage("Input more than one number!");

  if (numberArray.includes(NaN)) throw errorMessage("Input only numbers!");

  //looping through the array and checking if the sum of the current index and the next index is in the array
  //the algorithm is O(n^2), it's not very time efficient but it can be memory effiecient
  for (let i = 0; i < numberArray.length - 1; i++) {
    for (let j = i + 1; j <= numberArray.length - 1; j++) {
      for (let x = j; x <= numberArray.length - 1; x++) {
        if (numberArray[i] + numberArray[j] === numberArray[x]) {
          result.push({ pA: i, pB: j, sum: x });
        } else if (numberArray[i] + numberArray[j] < numberArray[x]) {
          break;
        }
      }
    }
  }

  console.log(result);

  if (result.length === 0) throw errorMessage("No sums found!");

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
