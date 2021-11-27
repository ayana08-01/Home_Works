const SIZE = 8;

function isEven(number) {
  return number % 2 === 0;
}

function getCeil(row, column) {
  if (isEven(row) === isEven(column)) return '#';
  return ' ';
}

for (let row = 0; row < SIZE; row += 1) {
  let string = '';
  for (let column = 0; column < SIZE; column += 1) {
    string += getCeil(row, column);
  }
  console.log(string);
}