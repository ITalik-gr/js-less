// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//       data[i] = `${data[i]} - done`;
//     }
// }

  // console.log(data);

  // const data = [5, 10, 'Shopping', 20, 'Homework'];
  // const result = [];

  // // Пишем решение вот тут
  // for (let i = 1; i <= data.length; i++) {
  //   result[i - 1] = data[data.length - i]
  // }

  // console.log(result);
//! Практична
  // const numberOfFilms = +prompt('Скільки фільмів ви вже глянули?', '');

  // const personalMovieDB = {
  //   count: numberOfFilms,
  //   movies: {},
  //   actors: {},
  //   genres: [],
  //   privat: false,
  // };

  // for (let i = 0; i < 2; i++) {
  //   const a = prompt('Останній фільм', ''),
  //         b = prompt('Оцінка фільму', '');

  //   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
  //     personalMovieDB.movies[a] = b;
  //     console.log('Ок все');
  //   } else {
  //     console.log('Что то не так');
  //     i--;
  //   }
  // }

  // if (personalMovieDB.count < 10) {
  //   console.log('Мало, меньше 10');
  // } else if (personalMovieDB.count <= 30) {
  //   console.log('Норм, меньше (=) 30');
  // } else if (personalMovieDB.count > 30) {
  //   console.log('Ок, больше 30');
  // } else {
  //   console.log('Русня сосать');
  // }

  // console.log(personalMovieDB);
  //?

//   function calc(a, b) {
//     return (a + b);
//   }

//   console.log(calc(1, 4));
// // 
//   let search = (a, b) => {
//     return(a - b);
//   };

//   console.log(search(5, 6));

//* Конвертор валют
// let usdCurr = 41,
//     eurCurr = 45,
//     amount = 1472;

// function convertor(amount, curr) {
//   return(amount * curr);
// }

// console.log(convertor(amount, eurCurr));

// function sayHello(name) {
//   return (console.log(`Привет ${name}`));
// }

// sayHello('Антон');

// function returnNeighboringNumbers(num) {
//   return (num - 1, num, num + 1);
// }


// 2
// function returnNeighboringNumbers(num) {
//   return [num - 1, num, num + 1];
// }
// console.log(returnNeighboringNumbers(2));

//? Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

//? Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.

// function getMathResult(num1, num2) {

//   if(typeof(num2) !== 'number' || num2 <= 0) {
//     return num1;
//   }

//   let str = '';

//   for(let i = 1; i <= num2; i++) {
//     if(i === num2) {
//       str += `${num1 * i}`;
//     } else {
//       str += `${num1 * i}---`;
//     }
//   }

//   return str;
// }

// console.log(getMathResult(5, 3));

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('Скільки фільмів ви вже глянули?', '');

//   while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms) ) {
//     numberOfFilms = +prompt('Скільки фільмів ви вже глянули?', '');
//   }
// }
// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };


// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Останній фільм', ''),
//           b = prompt('Оцінка фільму', '');
  
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('Ок все');
//     } else {
//       console.log('Что то не так');
//       i--;
//     }
//   }
// }
// // rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log('Мало, меньше 10');
//   } else if (personalMovieDB.count <= 30) {
//     console.log('Норм, меньше (=) 30');
//   } else if (personalMovieDB.count > 30) {
//     console.log('Ок, больше 30');
//   } else {
//     console.log('Русня сосать');
//   }
// }

// // detectPersonalLevel();

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     let j = prompt(`Ваш любимый жанр под номером ${i}`);
//     personalMovieDB.genres[i - 1] = j;
//   }
// }

// writeYourGenres();

// function showMyDB() {
//   if (personalMovieDB.privat === false) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB();

// let awnsw = +prompt('Вкажіть число', '');

// function calculateVolumeAndArea(length) {

//   let volume = Math.pow(length, 3);
//   let area = 6 * Math.pow(length, 2);

//   if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//     console.log('Упс, щось пішло не так');
//   } else {
//     console.log(`Обʼєм - ${volume}, площа - ${area}`);
//   }
// }

// calculateVolumeAndArea(awnsw);

// function myTic(num) {
//   if (num === )
// }

// myTic(32);



// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// function getTimeFromMinutes(minutesTotal) {
//   if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//       return "Ошибка, проверьте данные";
//   }

//   const hours = Math.floor(minutesTotal / 60);
//   const minutes = minutesTotal % 60;

//   let hoursStr = '';

//   switch (hours) {
//       case 0: 
//           hoursStr = 'часов';
//           break;
//       case 1:
//           hoursStr = 'час';
//           break;
//       case 2:
//       case 3:
//       case 4:
//           hoursStr = 'часа';
//           break;
//       default:
//           hoursStr = 'часов';
//   }

//   return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }



  // let userLogin = prompt('Логін', '');

  // if (userLogin == 'Адмін') {
  //   let userPassword = prompt('Password?', '');
  //   if (userPassword == 'батя') {
  //     console.log('Hello, BOSS')
  //   } else if(userPassword === null) {
  //     console.log('Не')
  //   } else {
  //     console.log('Хз хто тии')
  //   }
  // } else if(userLogin === null) {
  //   console.log('Пустота')
  // } else {
  //   console.log('Хз хто ти')
  // }

