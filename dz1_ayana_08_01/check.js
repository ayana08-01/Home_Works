const array1= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let a = array1.length;

let b = array2.length;

if (a < b) {
    console.log("Первый массив меньше второго")
}
else if(b < a) {
    console.log("Второй массив меньше первого")
}
else {
    console.log("Массивы равны")
}