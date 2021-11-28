let count = 0;

const Count = () => {
    const countTag = document.getElementById('count');
    countTag.innerText = count;
}

Count()

const plusCount = () => {
    count++;
    Count();
}
plusCount()

const minusCount = () => {
    count--;
    Count();
}
minusCount();
