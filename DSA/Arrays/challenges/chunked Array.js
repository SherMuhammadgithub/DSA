const chunkedArray = (arr, size) => {
  const chunked = [];
  let index = 0;
  while (index < arr.length) {
    const chunk = arr.slice(index, index + size);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
};

console.log(chunkedArray([1, 2, 3, 4, 5, 6, 7, 8, 10], 2));
