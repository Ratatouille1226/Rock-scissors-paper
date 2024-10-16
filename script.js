
function random(min, max) {
    return min + Math.random() * (max - min);
}

const variants = ['Камень', 'Ножницы', 'Бумага'];
const userChoise = prompt('Введите свой выбор');

function playGame(userChoise) {
    const computerIndexChoise = random(0, 2).toFixed(0);
    const computerChoise = variants[computerIndexChoise];
    const resultText = getResult(userChoise, computerChoise);
        
    const result = `Ваш выбор "${userChoise}", компьютер выбрал ${computerChoise}, результат: ${resultText}`;
    return result;
}

function getResult(userChoise, computerChoise) {
    if (userChoise === computerChoise) {
        return 'Ничья!';
    }

    if (
        userChoise === "Камень" && computerChoise === "Ножницы" || 
        userChoise === "Ножницы" && computerChoise === "Бумага" || 
        userChoise === "Бумага" && computerChoise === "Камень"
    ) {
        return 'Вы победили!';
    } else {
        return 'Компьютер победил!';
    }
}

alert(playGame(userChoise));