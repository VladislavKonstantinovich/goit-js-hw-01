let message;
const ADMIN_PASSWORD = 'admin';
const answer = prompt('Запишіть пароль');
// console.log(answer);

if (answer === null) {
    message = 'Скасовано користувачем!';
} else if (answer === ADMIN_PASSWORD) {
    message = 'Ласкаво просимо!';
} else {
    message = 'Доступ заборонений, невірний пароль!';
}

alert(message);