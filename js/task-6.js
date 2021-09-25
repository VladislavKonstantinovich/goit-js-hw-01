let input;
let total = 0;

while(input !== null){
    input = prompt('Введіть число');
    if(input === null){
        break;
    }
    if(isNaN(Number.parseFloat(input))){
        alert('Помилка, спробуйте знова');
        continue;
    }
    total = total + parseFloat(input);
}

alert('Вийшло число ' + total);





// let input = prompt('Введіть число');
// let number = Number(input);
// let isNumber = isNaN(number);
// let total = 0;
// total = total + number;
// console.log(total);

// while (isNumber === false) {
//     let input = prompt('Введіть число');
//     let number = Number(input);
//     if (isNumber === false) {
//         total = total + number;
//         console.log(total);
//     }
    
// }



// do {
//     isnan = isNaN(input);
//     console.log(isnan);
//     if (isnan === true && input !== null) {
//         input = parseFloat(prompt('Введіть число'));
//         number = parseFloat(input);
//         total = total + number;
//         console.log(total);
//     }
// } while (isnan === true && input !== null);


// do {
//     if (input === number && input !== NaN) {
//         input = prompt('Введіть число');
//         number = parseFloat(input);
//         total = total + number;
//         console.log(total);
//     }
// } while (input === number && input !== NaN);



// do {
//     if (number !== null) {
//         number = parseInt(prompt('Введіть число'));
//         total = total + number;
//         console.log(total);
//     } else
// } while (number !== null);







// while (number !== null) {
//     number = parseFloat(number);
//     total = total + number;
// }