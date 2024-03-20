// // const sem=10
// // console.log(sem)


// // const sem=20
// // console.log(sem)

// const sem=20

// console.log(sem)

// ==========================================
// Перетворення типів: числа

// Явне перетворення типів
// Неявне перетворення типів



// ============================================ Змінні та типи данних


// ======================================= Літерал-форма простого запису

// let num={}; літерал обєкта
// let num=[]; літерал масиву

// -----------------------
// const age =20;
// let totalPrice =100.42;
// // перевизначити
// totalPrice =50.21;


// console. log(age)
// console. log(totalPrice)

// -----------------------



// =========================================== Типи даних ===========
// const age = 20;
// let totalPrice =100.42;
// // Рядок                         string
// const userName ="Alice"; 
// // Булевий                       boolean
// const isOpen = true; 
// // const isOpen = false;
// // нема даних                    object
// let user =null;
// // undefined не визначено
// let product;


// console.log(product); 

// // Як перевірити тип даних       typeof

// console. log(typeof user);

// =========================================== Типові помилки =========

// const userName = "Kate";

// console. log(user);

// --------------------------

// console. log(age);
// const age = 20;


// --------------------------

// const age = 20;
// age = 50;

// console. log (age);
// --------------------------


// ============================================ Арифметичні операції=====

// Оператори +  - / % *  (**)

// const x = 10;
// const y = 5;


// console. log (x+y);
// console. log (x-y);
// console. log (x*y);
// console. log (x/y);

// -------------------------------------

// console. log (x % y);   
// 10 5 5 відповідь 0 (хвостик) скільки в 10

// --------------------------------------


// const x = 10;
// const y =4;

// console. log (x % y);

// 10 4 4 відповідь 2 (хвостик)


// ---------------------------------------
// Піднесення до степеня 10*10*10

// const x = 10;
// const y = 3;

// console. log (x ** y);


// ---------------------------------------- Задача



// Виведи на екран загальну кількість яблук та винограду.

// Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;

// const total = apples + grapes;
// const diff  = apples -grapes;

// console. log (diff);


// ========================================= Комбіновіний оператор

// Заміни вираз перевизначення комбінованим оператором


// let students = 100;
// students =students +50;

// console. log (students);


// ------------------------

// let students = 100;
// students += 50;

// console. log (students);


// ==================================================================

// Розбери пріоритет операторів в інструкції привласнення значення змінної
//  Пріоритет операторів (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

// const result = 100 +50 -2 *5;

// console. log (result)

// =========================================== Рядки (Конкатенація)

            //  Конкатенація - операція склеювання обєктів

// const firstName = "Alice";
// const lastName ="Franko";

// const fullName = firstName + " " + lastName;


// console. log (fullName);


// --------------------------------- шаблоні рядки

// const firstName = "Alice";
// const lastName ="Franko";

// const sayHello = `Hello ${firstName}`;


// console. log (sayHello);


// /------------------------------------- Довжина рядка (length)

// const firstName = "Alice";
// const lastName ="Franko";


// // //               Індекси с 0
// //             012345678910
// let message = "Hello world";


// console. log (message. length);
// ----------------------------------------

// const firstName = "Alice";
// const lastName ="Franko";


// // //               Індекси с 0
// //             012345678910
// let message = "Hello world";


// console. log (message[6]);

// ---------------------------------------
// Не можливо

// const firstName = "Alice";
// const lastName ="Franko";


// // //          Індекси с 0 (а довжина рядка -1)
// //             012345678910
// let message = "Hello world";


// // Не можливо
// // message[0]="F"


// console. log (message);

// -------------------------------------- Довжина рядка (-1)

// const firstName = "Alice";
// const lastName ="Franko";


// // // //          Індекси с 0 (а довжина рядка -1)
// // //          012345678910
// let message = "Hello world";

// console. log (message[message.length -1]);


// -----------------------------------------


// Склади фразу за допомогою шаблонних рядків

// A has B bots in stock , де A, B - змінні вставленні в рядок.


// const companyName ="Boston Dynamic";
// const repairBots = 150;
// const defenceBots = 50;

// const total = repairBots + defenceBots;

// const message = `${companyName} has ${total} bots in stock `;

// console.log (message);


// -------------------------------------------
// 2 варіант 

// Склади фразу за допомогою шаблонних рядків

// A has B bots in stock , де A, B - змінні вставленні в рядок.


// const companyName ="Boston Dynamic";
// const repairBots = 150;
// const defenceBots = 50;



// const message = `${companyName} has ${repairBots + defenceBots} bots in stock `;

// console.log (message);
// ========================================= Перетворення типів даних (рядки)


// console.log (String(5));
// console.log (typeof String(true));
// console.log (String (null));
// console.log (typeof String (null));
// console.log (undefined);
// console.log (typeof undefined);
// console.log (String (undefined));
// console.log (typeof String (undefined));



// ========================================== Конкатенація - операція склеювання обєктів

// Неявне перетворення

// console.log("5"+3);

// //          102+"3"   відповідь 1023
// console.log(100+2+"3");
//                           відповідь 53
// console.log(5+"3");
                            //  відповідь 5true 
console.log("5"+true); 

                            //   відповідь 5null
console.log("5"+null); 
                            //  відповідь 5undefined
console.log("5"+undefined); 
                            //   відповідь 523
console.log("5"+2+3); 




//  відповідь 6 
console.log(5+true); 









































































