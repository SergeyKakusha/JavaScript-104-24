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
// console.log("5"+true); 

//                             //   відповідь 5null
// console.log("5"+null); 
//                             //  відповідь 5undefined
// console.log("5"+undefined); 
//                             //   відповідь 523
// console.log("5"+2+3); 


// ============================================== Перетворення типів: числа

// Явне перетворення типів
// Неявне перетворення типів


// console.log("5");
// console.log(Number("5"));
// console.log(typeof Number("5"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number("25px"));
// console.log(Number("Kate"));
// console.log(typeof Number("Kate"));

// Lesson1-script.js:323 55
// Lesson1-script.js:324 5
// Lesson1-script.js:325 number
// Lesson1-script.js:326 1
// Lesson1-script.js:327 0
// Lesson1-script.js:328 0
// Lesson1-script.js:329 NaN
// Lesson1-script.js:330 NaN
// Lesson1-script.js:331 NaN
// Lesson1-script.js:332 number


// console.log("5"+2);
// console.log("5"*2);
// console.log("10"-3);
// console.log(5+true);
// console.log(5-true);

// Lesson1-script.js:346 52
// Lesson1-script.js:347 10
// Lesson1-script.js:348 7
// Lesson1-script.js:349 6
// Lesson1-script.js:350 4


// ===============================================   Оператори 
// ---------- Приведення типов операндов

// ----------  Оператори порівняння



// console.log(5>4);
// console.log(5 >= "4");
// //   Unicode    2  < 1 по першому чиcлу
// console.log("2" <"12");


// Lesson1-script.js:365 true
// Lesson1-script.js:366 true
// Lesson1-script.js:368 false



// ---------  Оператори рівності
            //4==4 несуворе порівняння
// console.log("4"==4);
//             // ! оператор не дорівнює
// console.log("4"!=4);

//            // оператор суворого порівняння
//          // 1==="1" false строге порівняння ми порівнюємо чило та рядок вони не рівні
// console.log(1==="1");
//             //  рядок===boolean false
// console.log("false" === false);


// console.log(1 ==true);

// Lesson1-script.js:379 true
// Lesson1-script.js:381 false
// Lesson1-script.js:385 false
// Lesson1-script.js:387 false
// Lesson1-script.js:390 true


// 43:55
            // 1==1 true значення переиворюється в число (true=1)
// console.log(1 ===true);
// console.log(1===true);
// console.log("0"==false);
// console.log("0"===false);
//                               //  Значеняя по Unicod K < k
// console.log("Kate"<"kate");
//                               //  коли різні типи данних false
// console.log(undefined===null);
// console.log(undefined==null);

// Lesson1-script.js:401 false
// Lesson1-script.js:402 false
// Lesson1-script.js:403 true
// Lesson1-script.js:404 false
// Lesson1-script.js:406 true
// Lesson1-script.js:408 false
// Lesson1-script.js:409 true
 

// ================================     Арифметичні функції




//-----------  Number. parseInt

// const width ="25px";
// console.log(Number(width));
// console.log(Number.parseInt(width));

// // Є метод perseInt, при перетворені на чило доходе до (р) і повертається до числа

// Lesson1-script.js:429 NaN
// Lesson1-script.js:430 25


//  перетвореня до крапки
// const width ="25.5px";

// console.log(Number.parseInt(width));

// Lesson1-script.js:441 25

// ------------  Number .parceFloat

// const height ="200.42px";
// console.log(Number.parseFloat(height));

// // коли зустрічає символ (р), яке він не може перетворити на число 
// // то тоді повертається до числа (а крапку проходе)
// // Lesson1-script.js:448 200.42



//--------------  Match (методи можна в браузер - math js)

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
// значення змінної value . Використовуй методи MatchFloor(), Matchceil(), та
// Matchround(). Перевір що буде в консолі при значеннях 27.3 та 27.9


// const value=27.5;
// console.log(Math.floor(value));
// округлення до цілога числа 27


// const value=27.6;
// console.log(Math.ceil(value));
// округлення до цілого числа в більшу сторону до 28
// / Lesson1-script.js:469 28

// const value=27.68;
// console.log(Math.round(value));
// // округлення до найближчого цілого числа
// Lesson1-script.js:475 28




// ===========================================   Функції
// Оголошення та виклик функції
// Параметри та аргументи 
// Повернення значення



// Визвати функцію
// function add(tototo, lalala) {
//  console.log("Hello");
//  console.log(tototo, lalala);

// }
// add(5,6);

// Lesson1-script.js:490 Hello
// Lesson1-script.js:491 5 6


// параметри функції function add(параметри)
// add(); виклик функції
// дані які ми передаємо під час виклику функції add(аргументи)
// ----------------------------
// function add(x, y) {
//   console.log("Hello");
//   console.log(x, y);
 
//  }
//  add(5,6);

//  Lesson1-script.js:505 Hello
// Lesson1-script.js:506 5 6
// -----------------------------
// function add(x, y) {
//   console.log("Hello");
//   console.log(x+ y);
//  }
//  add(5,6);

//  Lesson1-script.js:515 Hello
//  Lesson1-script.js:516 11

// --------------------------------


// const Petya =20*8*20;
// const Kate=20*8*17;
// const Yura =17*8*21;

// console.log("Petya", Petya);
// console.log("Kate", Kate);
// console.log("Yura", Yura);

// Lesson1-script.js:530 Petya 3200
// Lesson1-script.js:531 Kate 2720
// Lesson1-script.js:532 Yura 2856



// 1:24:54

// ===========================  якщо у функції нема ключового слова -return- поверне значення -undefined-

// ============================         return припиняє виконання функції

                                    // return повертає значення функції
                                    




// function add(x, y) {
//    console.log(x+y);
//    return x+y;
    
// }

// const a=add(5,8);
// const b=add(1,20);

// console.log("a", a);
// console.log("b", b);

// Lesson1-script.js:553 13
// Lesson1-script.js:553 21
// Lesson1-script.js:561 a 13
// Lesson1-script.js:562 b 21






// ------------------------------------------------------------------------------

// function add(x,y) {
//    const dayTotal=x*8*1.2;
//    return dayTotal *y;

// }
// const petya=add(20,20);
// const kate=add(20,17);
// const yura=add(17,21);

// console.log("petya", petya);
// console.log("kate", kate);
// console.log("yura", yura);

// Lesson1-script.js:554 petya 3840
// Lesson1-script.js:555 kate 3264
// Lesson1-script.js:556 yura 3427.2
// ------------------------------------------------

// =======================================================    Області видимості
                                                            //   локальні та глобальні
  
                                                            
//  const str ="hello";                                                           

// function foo() {
//     console.log(str); 
// }

// foo();

// Lesson1-script.js:572 hello


// спочатку шукає str в локальній, якщо нема, то він переходе в глобальну область 
// видимості і знаходе змінної str


// ---------------------------------------------------------------------------------


                                                            
//  const str ="hello";                                                           

// function foo() {
//     const message="world";
//     console.log(message); 
// }

// foo();
// Lesson1-script.js:592 world

// ---------------------------------------------------------------------------------
// const str ="hello";                                                           

// function foo() {
//     const message="world";
//     console.log(message); 
// }

// foo();

// console.log(message); 

// Lesson1-script.js:608 Uncaught ReferenceError: message is not defined
//     at Lesson1-script.js:608:13

//     Немає змінної в глобальній області видимості

// ----------------------------------------------------------------------------------

// const str ="hello";                                                           

// function foo() {
//     const message="world";
//     console.log(str); 
// }

// foo();

// Lesson1-script.js:621 hello

// --------------------------------------------------------------------------------

// const str ="hello";                                                           

// function foo() {
//     const str="world";
//     console.log(str); 
// }

// foo();

// console.log(str);

// Lesson1-script.js:634 world
// Lesson1-script.js:639 hello

// -------------------------------------------------------------------------------- Задача


// Напиши функцію calcBMI(weight,height) яка розраховує та повертає індекс 
// маси тіла людини. Для цього необходно розділити вагу на квадрат висоти.


// Вага та висота будуть спеціально передані як рядки. Це цілі числа можуть 
// бути задані у вигляді 24.7 та 24,7 , тобто може бутияк роздільник дробової 
// частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми.


// function calcBMI(weight,heigh) {
//     let numWeight=weight.replace(",","." );
//     numWeight=Number.parseFloat(numWeight);
//     const numHeigh=Number.parseFloat(heigh);
//     const bmi=numWeight/(numHeigh**2);
//     return bmi.toFixed(1);
    
//     // console.log(nameWeight);
//     // console.log(nameHeigh);
    
// }
// const bmi=calcBMI("88,3", "1.75");
// console.log(bmi);


// 2:20

// ================================================== toFixed(1); метод toFixed одна цифра після коми





// // задача з Д/з 


// function getElementWidth(content, padding, border) {
//     return Number.parseFloat(content)+Number.parseFloat(padding)*2+Number.parseFloat(border)*2
// }


// console.log(getElementWidth("60px", "12px", "8.5px"));



// // Lesson1-script.js:718 101














