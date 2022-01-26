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

  for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
    for (let j = i + 1; j <= arrayOfNumbers.length - 1; j++) {
      for (let x = j; x <= arrayOfNumbers.length - 1; x++) {
        if (arrayOfNumbers[i] + arrayOfNumbers[j] === arrayOfNumbers[x]) {
          result.push({ pA: i, pB: j, sum: x });
        } else if (arrayOfNumbers[i] + arrayOfNumbers[j] < arrayOfNumbers[x]) {
          break;
        }
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
