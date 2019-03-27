const generateSuccessors = function (threshold) {
  const successors = [];
  for (let index = 1; index <= threshold; index++) {
    successors.push(index);
  };
  return successors;
}

const cartesianProduct = function (firstList, products, secondList) {
  const combinations = firstList.map(element => secondList.concat(element));
  return products.concat(combinations);
}

const getCombinations = function (noOfFaces, noOfObjects) {
  const successors = generateSuccessors(noOfFaces);
  let listOfCombinations = [[]];
  for (let index = 0; index < noOfObjects; index++) {
    const generateNextCombinations = cartesianProduct.bind(null, successors);
    listOfCombinations = listOfCombinations.reduce(generateNextCombinations,[]);
  };
  return listOfCombinations;
}

const getCoinsCombinations = function (noOfCoins) {
  const faces = { 1: "H", 2: "T" };
  const combinations = getCombinations(2, noOfCoins);
  return combinations.map(combination => {
    return combination.map(face => faces[face])
  });
}

console.log(getCoinsCombinations(2));
console.log(getCombinations(6,2));