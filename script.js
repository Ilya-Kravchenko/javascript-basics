// let a = 2+2 
// switch (a){
//     case 3:
//         alert ('нет')
//         break;
//         case 4:
//             alert ('Хорошо')
//             break;
//             case 5:
//                 alert ('много')
//                 break;
//                 defult:
//                 alert('Нет такого значений')
// }

// let a ='1'
// let b = 0

// switch (+a){
//     case b+1: 
//     alert ('Выполниться, т.к. значением +а будет 1, что в точности равно B+1')
//     break;

//     defult:
//     alert ('Это не выполниться ')
// }

// let a = 2+2
// switch (a){
//     case 4:
//         alert('правильно')
//         break;
//         case 3:
//             case 5 :
//                 alert ('неправлиьно')
//                 alert ('посети урок матетматики')
//                 break;

//                 defult:
//                 alert ('Результат выглядит странновато. Честно.')
// }

// let age = prompt ('ведите значение')
// switch (age){
//     case '0':
//     case '9':
//     case '7':
//         alert ('правильно')
//         break;

//         case '222':
//         case '100':
//             alert ('Не правильное ')
//             break;

//             case 3: 
//         default:
//             alert ('Не известное значение ')
// }


//  switch & if




//  if (browser == 'Edge'){
//      alert ("You've got the Edge!")
//   }else if (browser == 'Chrome'
//   || browser == 'Firefox'
//   || browser == 'safari'
//   || browser == 'Opera'){
//       alert ('Okay we support these browser too')
//   } else {
//       alert ('We hope that this page looks ok!')
//   }

// if & switch 

// const number =+prompt ('Введите число между 0 и 3',"")
// if (number === 0){
//     alert ('Ведите число 0')
// }

// if (number === 1){
//     alert ('Вы ввидете число 1')
// }

// if (number === 2 || number === 3 ){
//     alert ('Вы вели 2, а может и 3 ')
// }


// const number =+ prompt ('Введите число между 0 и 3',"")

// switch (number){
//     case 0:
//         alert ('Вы ввели число 0')
//         break;

//         case 1:
//             alert ('вы ввели число 1')
//             break;

//             case 2:
//             case 3:
//                 alert ('Вы ввели число 2, а может и 3')
//                 break;
//                 default:
//                     alert ('Неизвестное число')
    
// }


//  let userName ='Вася'
 
//  function showMessage (){
//      let message = 'Привет' + userName
//      alert ('message')
//  }
//  showMassage ()


// let userName ='Вася'

// function showMassage (){
//     let userName ='Петя'
//     let mesaage ='Привет'
//     alert (message)
// }
//     alert (userName)
//     showMassage ()

//     alert (userName)



// let userName = 'Вася'

// function showmassage (){
//     let userName = 'Петя'

//     let message = 'Привет '  + userName
//     alert (message)
// }

// showmessage ();

// alert (userName)


// function showMassage (from , text){
//     alert (from,':',text)
// }

// showMassage ('Привет' , 'Аня!')
// showMassage ('Как дела ?', 'Аня')\



// function showMassage (from, text){
//     from = '+' = from = '+';
//     alert ( from + ':' + text)
// }

// let from ='Аня'

// showMassage (from, 'привет')

// alert (from)
//  let from = 10
// function showMessage (from, text){
//     if (text === undefined){
//         text = 'текст не добавлен';
//     }
//     alert (from + ":" + text)
// }


// function sum (a,b) {
//     return a+b
// }

// let result = sum (1,2)
// alert (result)

// function checkAge (age){
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm ('А, родители разрешили ?')
//     }
// }

// let age = prompt ('Сколько вам лет ?' , 18)

// if (checkAge (age)) {
//     alert ('Доступ получен');
// } else {
//     alert ('Доступ закрыт')
// }




// function checkAge (age) {
//     if (age > 18) {
//         return true
//     } else{
//         return confirm ('А, родители ращрешили ?')
//     }
// }
//     let age = prompt ('Сколько вам лет ?', 18)

//     if (checkAge (age)) {
//         alert ('Доступ открыт')
//     } else {
//         alert ('Доступ закрыт ')
//     }




// function showMassage (from,text) {
//     alert (from + ':' + text)
// }

// showMassage ('Аня ', 'Привет!')
// showMassage ('Аня ', 'Как дела')

// function showMassage (from, text){
//     from = '*' + from + '*';
//     alert (from + ':' + text ) 
// }
// let from ='Аня'

// showMassage (from , 'Привет')



// function showMassage  (from, text ){
//     if ( text === undefined){
//         text = 'не добавлен';
//     }
//     alert (from + ':' + text)
// }


// function sum (a,b){
//     return  a+b
// }
// let result = sum (4,2)
// alert (result)
// function sum (a,b){
//     return a+b
// } 
// let result = sum (10,10)

// alert (result)


// function sum (a,b){
// return (a+b)
// }

// let result = sum (10,10)

// alert (result)


// function cheakAge (age){
//     if (age>18) {

//         return true;
//     } else {
//         return confirm ('А родители разрешили?')
//     }    
// }

// let age = prompt ('Сколько вам лет ?', 18)

// if ( cheakAge (age)) {
//     alert  ('Доступ получен')
// } else {
//     alert ('Доступ закрыт')
// }

// function sum (a,b){
//     return a+b
// }
//     result = sum (10,10)
//     alert (result)



// return (
//     some + long + expression 
//     + or +
//     whatever * f(a) + f(b)
// )



// function showPrimes (n) {
//     nextPrime: for (let i = 2; i < n; i++){
//         for ( let j = 2; j < i; i ++){
//             if ( i % j ==0 ) continue nextPrime ;
//         }
//             alert (i)
//     }
// }




// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
  
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
  
//       alert( i ); // простое
//     }
//   }

// function sayHu (){
//     alert ('Привет')
// }

// 


// function sayHi () {
//     alert ('Привет')
// }

// let func = sayHi 

// func ()
// sayHi ()


  

// function  sayHi () {
//     alert ('Привет')
// }

// let xxx = sayHi
// let ddd = sayHi

// xxx ()
// ddd ()




// function sayHi () {
//     alert ('hello')
// }

// let old = sayHi

// let omg = sayHi


// old ()


// omg ()



// function ask (question,yes,no){
//     if (confirm(question)) yes ()
//     else no ()
// }

// function show0k (){
//     alert ('Вы согласный')
// }

// function showCanel (){
//     alert ('Вы отменили выполнение')
// }

// ask ('Вы согласный ?' , show0k , showcanel)



// function ask (question,yes,no){
//     if (confirm (question)) yes ()
//     else no ()
// }

// ask (
//     "Вы согласный ?",
//     function () { alert ('Вы согласились');},
//     function () { alert ('Вы отменили выполнение');},
// );





// 


// function ask (question,yes,no){
//     if (confirm(question)) yes ()
//     else no ();
// }

// ask (
//     'Вы уверены?',
// function () {alert ('окей');},
// function () {alert ('Отмена');},
// );




// function ask (question,yes,no){
//     if (confirm(question)) yes ()
//         else no ();
// } 

// ask (
//     'Что выбереш?',
// function () {alert ('Правильно');},
// function () {alert ('Не правильно');},

// )

// function ask (question,yes,no){
//     if (confirm(question)) yes ()
//     else no ();
// }

// ask (
//     'Что выберешь?',
// function () {alert ('правильно');},
// function () {alert ('Не Правильно');},
// )


function sayHu (){
    alert ('Привет')
}




function sayHi () {
    alert ('Привет')
}

let func = sayHi 

func ()
sayHi ()


  

function  sayHi () {
    alert ('Привет')
}

let xxx = sayHi
let ddd = sayHi

xxx ()
ddd ()




function sayHi () {
    alert ('hello')
}

let old = sayHi

let omg = sayHi


old ()


omg ()



function ask (question,yes,no){
    if (confirm(question)) yes ()
    else no ()
}

function show0k (){
    alert ('Вы согласный')
}

function showCanel (){
    alert ('Вы отменили выполнение')
}

ask ('Вы согласный ?' , show0k , showcanel)



function ask (question,yes,no){
    if (confirm (question)) yes ()
    else no ()
}

ask (
    "Вы согласный ?",
    function () { alert ('Вы согласились');},
    function () { alert ('Вы отменили выполнение');},
);








function ask (question,yes,no){
    if (confirm(question)) yes ()
    else no ();
}

ask (
    'Вы уверены?',
function () {alert ('окей');},
function () {alert ('Отмена');},
);




function ask (question,yes,no){
    if (confirm(question)) yes ()
        else no ();
} 

ask (
    'Что выбереш?',
function () {alert ('Правильно');},
function () {alert ('Не правильно');},

)

function ask (question,yes,no){
    if (confirm(question)) yes ()
    else no ();
}

ask (
    'Что выберешь?',
function () {alert ('правильно');},
function () {alert ('Не Правильно');},
)


// sayHi ('Вася');

// function sayHi (name) {
//     alert (`Привет,${name}`);
// }



// let age = 16 
// if (age < 18) {
//     welcome ();
//     function welcome (){
//         alert ('привет!')
//     } 
//     welcome ()
// } else {
//     function welcome () {
//         alert ('здраствуйте!')
//     }
// }

// welcome ();


// let age = prompt ('Сколько Вам лет ?', 18);
// let welcome;

// if (age < 18) {
//     welcome = function (){
//         alert ('Привет');
//     };
// } else {
//     welcome = function (){
//         alert ('Здраствуйте!');
//     };
// }
// welcome ();






// let age = prompt ('Сколько вам Лет?',18);

// let welcome = (age < 18)?
// function () {alert ('Привет');}:
// function () {alert ('Здраствуйте');};
// welcome ()




// let age = prompt ('Сколько вам лет?')


// let  welcome =  ( age < 18) ?
// function () {alert ('привет');}:
// function () {alert ('Здраствуйте');};

// let age = prompt ('Сколько лет ?', 18);
// let welcome = (age < 18)?
// function () { alert ('Привет');}:
// function () { alert ('Привет');};
  
  // welcome ()
  
//   let func = (arg1, arg2, argN) => expreccion
  


// let sum = (a,b) => a+b;
// alert (sum(1,2))
  
  
  

// let sum = (a,b,y) => a+b*y

// alert (sum(4,2,3))

















// let sum = (a,b,u) => a+b*u 
// alert (sum(1,3,4))


// let age = prompt ('Скольво вам Лет ', 18)
// let welcome = (age < 18)?
// () => alert ('Привет'):
// () => alert ('Здраствуйте');
// welcome ();
// 

// let sum = (a,b) => {
//     let result = a+b;
//     return result;
// };
// alert (sum(1,2))

// let sum = (a,b) => a+b
// alert (sum(1,2))





// let double = n => n * 2;

// alert (double(3))

// 
// let age = prompt ('Сколько вам лет ?',18)

// let welcome = (age < 18)?
// () => alert ('Привет'):
// () => alert ('Привет');
// 
// welcome ()

// let userName = prompt ('Ведите Имя ', 'Алиса');
// let isTeaWanted = confirm ('Вы хотите чаю?');
// 
// alert ('посититель:' + userName);
// alert ('чай:' + isTeaWanted);



// alert (1 + '2')


// let age = prompt ('Сколько вам лет ?') 
// switch (age){
//     case 18:
//     alert ('Добро пожаловать')
//     break;   

//     case 20:
//     alert ('нет')
//     break;   

//     default:
//         alert ('Пока')
//         break;   
//     }
