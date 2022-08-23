function squareNumber(num) {
  return num * num;
}

console.log(squareNumber(4));

const array = [1, 2, 3, 4, 5, 6];

function sqaure(arr, cb) {
  const result = arr.map((item) => {
    return cb(item);
  });
  console.log(result);
}
sqaure(array, squareNumber); // return [1,4,9,16,25]
