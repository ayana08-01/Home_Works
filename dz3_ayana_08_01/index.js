const func = (n1, n2) => {
    if (n1 > n2){
        console.log('Второе число меньше')
    }
    else if (n2 > n1){
        console.log('Первое число меньше')
    }
    else {
        console.log('Числа равны')
    }
}

let number1 = prompt ('Введите первое число');
let n1 = Number (number1);

let number2 = prompt ('Введите второе число');
let n2 = Number (number2);

func(n1, n2)
