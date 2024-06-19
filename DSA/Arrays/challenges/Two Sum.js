const findTwoSum = (list, target) => {
  const ansArray = [];

  for (let i = 0; i < list.length; i++) {
    for (let j = i; j < list.length; j++) {
      if (i !== j) {
        if (list[i] + list[j] === target) {
          ansArray.push(i, j);
          break;
        }
      }
    }
  }
  return ansArray;
};

console.log(findTwoSum([2, 7, 4, 11, 15, 5], 9));
