export const detectSums = (array) => {
  const errorMessage = (message) => {
    return { message: message };
  };

  if (!array || array.length === 0) {
    throw errorMessage("Array is empty");
  }

  //getting rid of spaces and converting to array of numbers
  const numberArray = array
    .split(" ")
    .join("")
    .split(",")
    .map(Number)
    .map((elem) => Math.round(elem));

  //no need to sort the array anymore

  if (numberArray.length === 1)
    throw errorMessage("Please input more than one number!");

  if (numberArray.includes(NaN))
    throw errorMessage("Please input only numbers!");

  let result = [];
  let hashMap = {};

  //HashMap implementation======================

  //Complexity: O(n^2 - n)
  //This algorithm is x4-5 more time effcient than the iterative one, I tested it myself
  //Hashmap implementation allows array not to be sorted,because if the sum is found in the hashmap keys
  //then we get the value of the key, which is the index of the array where the sum is found
  //may not be very memory efficient

  //creating the hashmap with the sums as keys and the indexes of the array as values

  // numberArray.forEach((number, index) => {
  //   if (hashMap[number]) {
  //     hashMap[number].push(index);
  //   } else {
  //     hashMap[number] = [index];
  //   }
  // });

  // for (let i = 0; i < numberArray.length - 1; i++) {
  //   for (let j = i + 1; j <= numberArray.length - 1; j++) {
  //     if (hashMap[numberArray[i] + numberArray[j]]) {
  //       hashMap[numberArray[i] + numberArray[j]].forEach((value) => {
  //         let tempObject = { pA: i, pB: j, sum: value };
  //         result.push(tempObject);
  //       });
  //     }
  //   }
  // }
  //============================================

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
