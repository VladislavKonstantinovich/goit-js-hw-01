let credits = 23580;
const pricePerDroid = 3000;
const droidNumber = prompt('Яку кількість дронів ви хочете придбати?');

if (droidNumber === null) {
    console.log('Скасовано користувачем!');
} else {
    var totalPrice = droidNumber * pricePerDroid;
}

if (droidNumber !== null && totalPrice >= credits) {
    console.log('Недостатньо коштів на рахунку!');
} else if (droidNumber !== null) {
    credits = credits - totalPrice;
    alert('Ви купили ' + droidNumber + ' дроїдів, на рахунку залишилося ' + credits + ' кредитів.');
}