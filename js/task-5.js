const China = 100;
const Chile = 250;
const Australia = 170;
const India = 80;
const Jamaica = 120;
const countries = ['китай', 'чилі', 'австралія', 'індія', 'ямайка'];
const answer =  prompt('У яку країну доставляти?');
if (answer !== null) {
    var userCountry =  answer.toLowerCase();

    switch (userCountry) {
        case 'китай':
            alert('Доставка в Китай буде коштувати ' + China + ' кредитів');
            break;
        
        case 'чилі':
            alert('Доставка в Чилі буде коштувати ' + Chile + ' кредитів');
            break
        
        case 'австралія':
            alert('Доставка в Австралію буде коштувати ' + Australia + ' кредитів');
            break
    
        case 'індія':
            alert('Доставка в Індію буде коштувати ' + India + ' кредитів');
            break
    
        case 'ямайка':
            alert('Доставка в Ямайку буде коштувати ' + Jamaica + ' кредитів');
            break
    
        default:
            alert('У вашій країні доставка недоступна');
            break;
    }
} else {
    alert('Скасовано користувачем!');
}