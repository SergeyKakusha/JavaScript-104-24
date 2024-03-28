// ===============================     Розгалуження

// Інструкція if
// Інструкція if..else
// Блок else...if
// Тернарний оператор

// ---------------------------------------------------------------------

// Якщо умова відпрацює в if (num >= 100) буде результат true,

// то ми заходимо в тіло конструкції if, якщо false то відпрацює код else

// const num = 10;

// console.log("befor");

// if (num >= 100) {
//   console.log("big chocolate");
// } else {
//   console.log("small chocolate");
// }
// console.log("after");

// Lesson2-script.js:16 befor
// Lesson2-script.js:21 small chocolate
// Lesson2-script.js:23 after

// ---------------------------------------------------------------------

// ========   if else if else

// const points = 500;

// if (points >= 500) {
//   console.log("lvl 1");
// } else if (points > 500) {
//   console.log("lvl 2");
// } else if (points > 1500) {
//   console.log("lvl 3");
// } else {
//   console.log("lvl 4");
// }

// -------------------------------------------- воронка від більшого до меншого
// -------------------------------------------- не суворе порівняння

// const points = 1500;

// if (points > 500) {
//   console.log("lvl 1");
// } else if (points > 500) {
//   console.log("lvl 2");
// } else if (points === 1500) {
//   console.log("lvl 3");
// } else {
//   console.log("lvl 4");
// }

// ============================================= тернарний оператор

// const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = "Positive";
// } else {
//   mssage = "Negative";
// }

// console.log(message);

// Lesson2-script.js:70 Positive

// ---------------------------------------- другий варіант (одна умова)

// const balance = -1000;
// const message = balance >= 0 ? "Positive" : "Negative";

// console.log(message);

// Lesson2-script.js:80 Negative

// --------------------------------------------------------   (багато умов)

// const balance = 1000;
// const message = balance >= 0 ? "Positive" : "Negative";

// console.log(message);

// Lesson2-script.js:89 Positive

// ---------------------------------------------------------

// const balance = 0;
// const message = balance > 0 ? "Positive" : balance === 0 ? "Null" : "Negative";

// console.log(message);

// ========================================== Блокова область видимості  змінних

// const a = 5;

// if (true) {
//   const b = 10;
// }

// if (true) {
// }

// if (true) {
//   const c = 15;
//   console.log(c);
// }

// ------------------------------------------------------------- Задача

// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
// рядка формату "14г, 26хв." . Якщо значення змінної minutes дорівнює 0,
// то виводь рядок "14г.", без хв.

// const hours = 14;
// const minutes = 20;
// let message;

// if (minutes > 0) {
//   message = `${hours}г. ${minutes} хв.`;
// } else {
//   message = `${hours}г.`;
// }
// console.log(message);

// Lesson2-script.js:131 14г. 20 хв.

// ----------------------------------------- другий варіант

// const hours = 14;
// const minutes = 20;

// const message = minutes > 0 ? `${hours}г. ${minutes} хв.` : `${hours} г.`;
// console.log(message);

// Lesson2-script.js:141 14г. 20 хв.

// ------------------------------------------------- Задача 2

// Напиши скрипт для відображення часу дедлайну здачі проєкту.
// Використовуй if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Today"
// Якщо до дедлайну 1 день -виведи рядок "Tomorrow"
// Якщо до дедлайну 2 дні -виведи рядок "Overmorrow"
// Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"

// const deadline = 2;

// if (deadline === 0) {
//   console.log("Today");
// } else if (deadline === 1) {
//   console.log("Tomorrow");
// } else if (deadline === 2) {
//   console.log("Overmorrow");
// } else {
//   console.log("Date in the future");
// }

// ================================================== Оператор switch case
// --------------------------------------------------- розгалуження

// const userName = "Alice";

// switch (userName) {
//   case "Kate":
//     console.log("case 1");
//     break;

//   case "Alice":
//     console.log("case 2");
//     break;
//   case "Petya":
//     console.log("case 3");
//     break;
//   default:
//     console.log("default");
// }

// ----------------           відпрацьовує зверху в низ -----
// ключове слово -- break --- припиняє виконання нашої конструкції switch case

// -------------------------------- Задача

// Напиши скрипт для відображення часу дедлайну здачі проєкту.
// Використовуй if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Today"
// Якщо до дедлайну 1 день -виведи рядок "Tomorrow"
// Якщо до дедлайну 2 дні -виведи рядок "Overmorrow"
// Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"

// const deadline = 2;

// switch (deadline) {
//   case 0:
//     msg = "Today";
//     break;

//   case 1:
//     msg = "Tomorrow";

//     break;

//   case 2:
//     msg = "Overmorrow";
//     break;
//   default:
//     msg = "Date in the future";
// }
// console.log(msg);

// -------------------------------- Задача
// Напиши скрипт вибора опції доставки товару.
// Опція  зберігається у змінній option :
// 1- самовивіз,
// 2- курьер,
// 3- пошта.

// У змінну message записати повідомлення залежно від опції.
// "Ви зможете забрати товар завтра з 12:00 у нашому офісі"
// "Курьер доставить замовлення завтра з 9:00 до 18:00"
// "Посилка буде вілправленна сьогодні"
// "Вам передзвонить менеджер"

// const option = 1;
// let message = "";
// switch (option) {
//   case 1:
//     message = "Ви зможете забрати товар завтра з 12:00 у нашому офісі";
//     break;
//   case 2:
//     message = "Курьер доставить замовлення завтра з 9:00 до 18:00";
//     break;
//   case 3:
//     message = "Посилка буде вілправленна сьогодні";
//     break;

//   default:
//     message = "Вам передзвонить менеджер";
// }
// console.log(message);

// =================================================== Логічні оператори
//                                                     Перетворення типів: логічне
//                                                     Оператор && (оператор і)
//                                                     Оператор || (оператор або)
//                                                     Оператор ! (оператор заперечення)
// ---   В булевому вираженні завжди поверне false

// console.log(Boolean(false));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(""));

// Lesson2-script.js:258 false
// Lesson2-script.js:259 false
// Lesson2-script.js:260 false
// Lesson2-script.js:261 false
// Lesson2-script.js:262 false

// У всіх інших випадках ми отримаємо true

// 02:03

// console.log(Boolean(" "));
// console.log(Boolean(true));
// console.log(Boolean("Hello"));
// console.log(Boolean(3));
// console.log(Boolean(2.14));

// Lesson2-script.js:274 true
// Lesson2-script.js:275 true
// Lesson2-script.js:276 true
// Lesson2-script.js:277 true
// Lesson2-script.js:278 true
// ====================================================== Оператор &&
// Якщо дві умови повертають true

// оператор && повертає останнє значення true

// console.log(5 && 4);
// console.log(null && 4);
// console.log(4 && null);

// // Lesson2-script.js:288 4
// // Lesson2-script.js:289 null
// // Lesson2-script.js:290 null

// console.log(4 && "Hello");

// Lesson2-script.js:298 Hello

// ====================================================== Оператор ||
// Оператор || перевіряє два операнти,
// якщо хоча б один повертає true то оператор || його поверне

// console.log(false || 5);
// console.log(15 || 5);
// console.log("Hello" || 5);
// console.log(0 || null);

//
// Lesson2-script.js:305 5
// Lesson2-script.js:306 15
// Lesson2-script.js:307 Hello
// Lesson2-script.js:308 null

// ====================================================== Оператор !
// повертає протилежне значення Boolen

// console.log(!false);
// console.log(!2);

// Lesson2-script.js:320 true
// Lesson2-script.js:321 false

// ----------------------------------------------------- Приклади
// console.log(true && 4 && "Hello");
// console.log(true && 0 && "Hello");
// // повертає хибне значення 0 (не false)
// console.log(true || 4);
// console.log(true || 4 || 3);
// console.log(true || false || 3);
// console.log(null || 3 || underfined);
// console.log(null || (2 && 3) || 4);
// console.log(null || (2 && 3) || 4);

// Lesson2-script.js:327 Hello
// Lesson2-script.js:328 0
// Lesson2-script.js:330 true
// Lesson2-script.js:331 true
// Lesson2-script.js:332 true
// Lesson2-script.js:333 3
// Lesson2-script.js:334 3
// Lesson2-script.js:335 3

// -------------------------------------------- Задача

// Напиши скрипт перевірки підписки користувача при доступі до контента
// Є три підписки: frameElement. pro i vip.
// Отриматидоступ можуть тільки користувачі pro i vip

// const sub = "pro";
// const canConnect = sub === "pro" || sub === "vip";
// console.log("дозволено доступ?", canConnect);

// const sub = "free";
// const canConnect = sub === "pro" || sub === "vip";
// console.log("дозволено доступ?", canConnect);

// const sub = "vip";
// const canConnect = sub === "pro" || sub === "vip";
// console.log("дозволено доступ?", canConnect);

// Lesson2-script.js:354 дозволено доступ? true
// Lesson2-script.js:358 дозволено доступ? false
// Lesson2-script.js:362 дозволено доступ? true

// -----------------------------------------------------------------------------
// Напиши скрипт, який буде перевіряє можливість відкрити чат користувачем.
// Для цього, користувач має бути:
// -другом
// -онлайн
// -без режима не турбувати

// const isOnline = true;
// const isFriend = true;
// const isDnd = true;

// const canChat = isFriend && isOnline && !isDnd;
// console.log("canChat?", canChat);

// Lesson2-script.js:380 canChat? false

// -----------------------------------------------------------------------------
function checkPass(password) {
  const curPass = "jqueryismyjam";
  return password === cupPass
    ? "Access granted"
    : "Access denied, wrong password!";
}
console.log(checkPassword("angul4r1sl1f3"));
