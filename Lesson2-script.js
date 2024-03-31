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

// ====================================================== Оператор ! (заперечення)
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
// 2:49
// Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult",
// якщо значення параметра age більше або дорівнює 18.
// Використай у тілі функції інструкцію if для перевірки значення age.

// Оголошена функція checkAge(age)
// Виклик checkAge(20) повертає рядок "You are an adult"
// Виклик checkAge(17) повертає undefined
// Виклик checkAge(10) повертає undefined
// Виклик checkAge(30) повертає рядок "You are an adult"
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function checkPass(password) {
//   const curPass = "454546";
//   return password === curPass
//     ? "Access granted"
//     : "Access denied, wrong password!";
// }
// console.log(checkPass("454546"));

// Lesson2-script.js:403 Access granted

// ============================================================      Методи рядків  ===========================

// - slice
// - tolowerCase / toUpperCasse;
// - includes
// - startsWich/endsWith
// - indexOf
// - trim

// =============================================================  Метод  -slice

// -slice (метод clice вирізає з нашого рядочка якийсь шматочок,
// який потім і повертає цей шматочок).
// slice(индекс аргумента з якого ми хочемо вирізати, другий індекс агументу до якого будемо вирізати не включно)

//

// const userName = "Alica Franko";
// const str = userName.slice(0, 4);

// console.log(str);

// Lesson2-script.js:421 Alic
// -----------------------------------------

// Якщо не задавати другий індекс аргументу

// const userName = "Alica Franko";
// const str = userName.slice(1);

// console.log(str);

// Lesson2-script.js:430 lica Franko

// ----------------------------------------

// Якщо не передавати жодного індекса аргумента

// const userName = "Alica Franko";
// const str = userName.slice();

// console.log(str);

// Lesson2-script.js:447 Alica Franko

// -----------------------------------------
// const userName = "Alica Franko";
// const str = userName.slice(-6);

// console.log(str);

// Lesson2-script.js:455 Franko

// ============================================================== Метод - tolowerCase / toUpperCasse;

//  (Тут агументи не потрібні порожні дужки        const str = userName.toUpperCase(порожні);)

// - tolowerCase (Цей метод приводить всі індекси до нижнього регістру)

// const userName = "Alica Franko";

// const str = userName.toLocaleLowerCase();

// console.log(userName.toLowerCase(str));

// Lesson2-script.js:465 alica franko
//
// --------------------------------------------------------------------
// -toUpperCasse (Цей метод приводить всі індекси до верхнього регістру)

// const userName = "Alica Franko";

// const str = userName.toUpperCase();

// console.log(userName.toUpperCase(str));

// Lesson2-script.js:478 ALICA FRANKO

// ==============================================================  Метод   -includes

// Метод - includes приймає в себе аргумент підрядок і перевіряє чи є в моєму рядку підрядок який він викликає

// Цей метод повертає нам true якщо він знайде, ящо не знайде повертає false

// УВАГА!!!   Він чутливий до регістру (з маленької або великої літери написано)

// const userName = "Alica Franko";

// console.log(userName.includes("Alica"));

// Lesson2-script.js:490 true

// --------------------------------------------

// const userName = "Alica Franko";

// console.log(userName.includes("fra"));

// Lesson2-script.js:502 false

// ========================================================= Метод -startsWich/endsWith

// -startsWich  Цей метод в себе також приймає підрядок  і перевіряє чи починається мій

// рядок на цю послідовність символів

// / УВАГА!!!   Він чутливий до регістру (з маленької або великої літери написано)

// const userName = "Alica Franko";

// console.log(userName.startsWith("Alic"));

// Lesson2-script.js:514 true
// ----------------------------------------
// const userName = "Alica Franko";

// console.log(userName.startsWith("alic"));

// Lesson2-script.js:520 false

// ----------------------------------------

// -endsWith Цей метод в себе також приймає підрядок  і перевіряє чи закінчуэться мій

// рядок на цю послідовність символів.

// / УВАГА!!!   Він чутливий до регістру (з маленької або великої літери написано)

// const userName = "Alica Franko";

// console.log(userName.endsWith("nko"));

// Lesson2-script.js:534 true

// ================================================================= Метод - indexOf

// -indexOf Цей метод приймає в себе якийсь рядок. Це символ який він хоче знайти в моєму рядку,
// якщо він такий символ знаходе,  то він повертає індекс цього символу, а якщо він не знаходить повертає -1.

// / УВАГА!!!   Він чутливий до регістру (з маленької або великої літери написано)

// const userName = "Alica Franko";

// console.log(userName.indexOf("i"));

// Lesson2-script.js:548 2
// ------------------------------------------

// const userName = "Alica Franko";

// console.log(userName.indexOf("x"));

// Lesson2-script.js:555 -1

// ------------------------------------------

// Якщо два однакові символи (a) то поверне перший індекс

// const userName = "alica Franko";

// console.log(userName.indexOf("a"));

// Lesson2-script.js:567 0

// ============================================================ Метод - trim

// -trim Цей метод видаляє пробіли з нашого рядка з початка та з кінця нашого рядка

// const userName = "          Alica Franko        ";

// console.log(userName.trim(""));

// Lesson2-script.js:577 Alica Franko

// --------------------------------------------------------------------------------------------------------------

// =========================================================== Форматування посилання  =========================

//  Форматування посилання
// Напиши скрипт який перевіряє чи закінчуєть значення
// змінної link символом /. Якщо ні , додай до кінця
// значення link цей символ.link

// Використовуй конструкцію if...else.

// let link = "https://my-site.ua/about";

// if (!link.endsWith("/")) {
//   console.log("ok");
//   link += "/";
// }

// console.log(link);

// Lesson2-script.js:594 ok
// Lesson2-script.js:598 https://my-site.ua/about/
// -------------------------------------------------------------

// Форматування посилання
// Напиши скрипт який перевіряє чи закінчуєть значення
// змінної link символом /. Якщо ні , додай до кінця
// значення link цей символ, але тільки в тому випадку,
// якщо в link є підрядок "my-site".
// використовуй конструкцію if...else або тернарний оператор.

// let link = "https://my-site.ua/about";

// if (!link.endsWith("/") && link.includes("my-site")) {
//   console.log("ok");
//   link += "/";
// }
// console.log(link);

// Lesson2-script.js:615 ok
// Lesson2-script.js:618 https://my-site.ua/about/

// --------------------------------------------------------------
// Привіт, я принц Абдул, це не спам, я пропоную вам мільйон
// Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!
// # рекламна кампанія fatlivesmatter

// Пошук у рядку методом includes() включає в себе

// const blacklistedWord1 = "spam";
// const blacklistedWord2 = "sale";

// const string1 = "Hello, I`m Prince Abdul, this not spam, I`m offering you a million ";
// const string2 = "Biggest SALE this week, don`t miss out!";
// const string3 = "#fatlivesmatter advertising campaing";

// const norStr2 = string2.toLowerCase();

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(norStr2.includes(blacklistedWord1));
// console.log(norStr2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));

// Lesson2-script.js:640 true
// Lesson2-script.js:641 false
// Lesson2-script.js:643 false
// Lesson2-script.js:644 true
// Lesson2-script.js:646 false
// Lesson2-script.js:647 false

// ----------------------------------------------------------------------------------------

// =====================================================    Цикли    ======================

// Цикли for
// Відлік від 0 до N
// зворотній відлік від N до 0
// Збільшення / зменшення лічильника на 2+
// Інкримент і декремент
// Цикл while i do ..while

// -------------------------------------------------------------------------------------

// Інкремент -це синтаксис який дозволяє збільшувати значення змінної на один
// Декремент-це синтаксис який дозволяє зменшення значення змінної на один

// Є два формата запису префіксний ++ i, --i,  постфіксний i++, i--

// ===========================  Інкремент

// -------------------------------- префіксний ++ i, --i

// let a = 5;
// const b = ++a;

// console.log("a", a);
// console.log("b", b);

// Lesson2-script.js:676 a 6
// Lesson2-script.js:677 b 6

// --------------------------------- постфіксний i++, i--

// let a = 5;
// const b = a++;

// console.log("a", a);
// console.log("b", b);

// Lesson2-script.js:689 a 6
// Lesson2-script.js:690 b 5

// ==========================  Декремент
// let a = 5;
// const b = --a;

// console.log("a", a);
// console.log("b", b);

// Lesson2-script.js:701 a 4
// Lesson2-script.js:702 b 4

// -------------------------------
// let a = 5;
// const b = a--;

// console.log("a", a);
// console.log("b", b);

// Lesson2-script.js:711 a 4
// Lesson2-script.js:712 b 5

// --------------------------------------------------------------------------------------

// console.log("befor");

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
//
// }

// console.log("after");

//
// Lesson2-script.js:666 befor
// Lesson2-script.js:669 0
// Lesson2-script.js:669 1
// Lesson2-script.js:669 2
// Lesson2-script.js:669 3
// Lesson2-script.js:669 4
// Lesson2-script.js:673 after
// ----------------------------------------

// console.log("befor");

// for (let i = 0; i < 5; i += 2) {
//   console.log(i);

// }

// console.log("after");

// Lesson2-script.js:685 befor
// Lesson2-script.js:688 0
// Lesson2-script.js:688 2
// Lesson2-script.js:688 4
// Lesson2-script.js:692 after

// ----------------------------------------

// console.log("befor");

// for (let i = 3; i < 10; i += 3) {
//   console.log(i);
// }

// console.log("after");

// Lesson2-script.js:702 befor
// Lesson2-script.js:705 3
// Lesson2-script.js:705 6
// Lesson2-script.js:705 9
// Lesson2-script.js:708 after
// --------------------------------------

// for (let i = 10; i > 0; i -= 1) {
//   console.log(i);
// }

// Lesson2-script.js:718 10
// Lesson2-script.js:718 9
// Lesson2-script.js:718 8
// Lesson2-script.js:718 7
// Lesson2-script.js:718 6
// Lesson2-script.js:718 5
// Lesson2-script.js:718 4
// Lesson2-script.js:718 3
// Lesson2-script.js:718 2
// Lesson2-script.js:718 1

// ------------------------------------
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// Lesson2-script.js:787 0
// Lesson2-script.js:787 1
// Lesson2-script.js:787 2
// Lesson2-script.js:787 3
// Lesson2-script.js:787 4

// -------------------------------------

// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }

// Lesson2-script.js:799 5
// Lesson2-script.js:799 4
// Lesson2-script.js:799 3
// Lesson2-script.js:799 2
// Lesson2-script.js:799 1

// ------------------------------------
// let a = 5;
// console.log(10 * a++);
// Lesson2-script.js:810 50
// -------------------------
// let a = 5;
// console.log(10 * ++a);
// Lesson2-script.js:814 60
// ------------------------------------

// ========================================= Цикл while i do ..while ==========
// let counter = 0;

// while (counter < 10) {
//   console.log(counter);
//   counter++;
// }

// Lesson2-script.js:822 0
// Lesson2-script.js:822 1
// Lesson2-script.js:822 2
// Lesson2-script.js:822 3
// Lesson2-script.js:822 4
// Lesson2-script.js:822 5
// Lesson2-script.js:822 6
// Lesson2-script.js:822 7
// Lesson2-script.js:822 8
// Lesson2-script.js:822 9
// --------------------------

//  ========================== На парні

// let total = 0;

// for (let i = 0; i <= 3; i++) {
//   total += i;
// }
// console.log(total);

// Lesson2-script.js:845 6
// ----------------------------------------
// let counter = 0;
// let total = 0;

// while (counter <= 3) {
//   total += counter;
//   counter++;
// }
// console.log(total);

// Lesson2-script.js:856 6

// --------------------------

console.log("befor");
let counter = 0;

while (counter < 3) {
  console.log(counter);
}
console.log(total);
console.log("after");
