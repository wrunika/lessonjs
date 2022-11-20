const minNumber = 0;
const maxNumber = 100;
const attemptsCount = 10;

const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
};

const randomNumber = getRandomNumber();
console.log(randomNumber);

const getPlayerName = () => {
  const playerName = prompt("Привет! Как тебя зовут?", "Введи имя, дружище :)");
  return playerName;
};

const playerName = getPlayerName();
console.log(playerName);

const bigGame = (min, max, attempts, randomNum, player) => {
  alert(
    `Привет, ${player}! Я загадал число в диапазоне от ${min} до ${max}. У тебя есть ${attempts} попыток, чтобы отгадать его. Если готов, жми на ОК.`
  );
  for (let i = 1; i <= attempts; i++) {
    const answer = prompt(
      `Вводи свой вариант цифры.`,
      `Введи свое число сюда.`
    );
    if (answer < randomNum) {
      alert(
        `Я загадал большее число. У тебя осталось ${attempts - i} попыток.`
      );
    } else if (answer > randomNum) {
      alert(
        `Я загадал меньшее число. У тебя осталось ${attempts - i} попыток.`
      );
    } else {
      alert(`${player}, ты угадал - ты красавчик! Жду тебя дома =)`);
      return;
    }
  }
  alert(
    `О, нет! Ты не справился, ${player}. Тебе не хватило ${attempts} попыток. Но в следующий раз тебе обязательно повезет.`
  );
};

bigGame(minNumber, maxNumber, attemptsCount, randomNumber, playerName);
