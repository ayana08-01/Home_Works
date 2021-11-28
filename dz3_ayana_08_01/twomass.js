const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const arr2 = [1, 2, 3, 4, 5, 6, 7];

let a = arr1.length
let b = arr2.length


function twoMass(a,b) {
    if (a > b){
        console.log('Второй массив меньше первого')
    }
    else if (a < b){
        console.log('Второй массив больше первого')
    }
    else {
        console.log('Они равны')
    }
}

twoMass(a, b);