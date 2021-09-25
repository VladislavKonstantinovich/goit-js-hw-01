let input;
let total = 0;

while(input !== null){
    input = prompt('Введіть число');
    if(input === null){
        break;
    } else if(isNaN(parseFloat(input))){
        alert('Помилка, спробуйте знова');
        continue;
    }
    total = total + parseFloat(input);
}

alert('Вийшло число ' + total);