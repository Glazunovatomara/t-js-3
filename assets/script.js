//1.1 Проверь, содержится ли строка "fun" в строке "JavaScript is fun!";
const str = 'JavaScript is fun!';
console.log(str.includes('fun'))
//1.2 Попробуй написать условие, которое выполняется только в случае, если переменная имеет одно из falsy значений;
const res = [];
if(!res.length) {
    console.log('false')
} 
//1.3 Напиши шаблонную строку, которая включает переменные firstName, lastName и occupation, и выводит сообщение вроде "Hello, my name is John Doe. I am a software developer.";
const firstName = 'John';
const lastName = 'Doe';
const occupation = 'software developer';
console.log(`Hello, my name is ${firstName} ${lastName} . I am a ${occupation}.`)
//1.4 Сравни null и undefined строго (===) и не строго (==), выведи результаты в консоль. Объясни своими словами, почему получились такие результаты 🙂
console.log(null === undefined) // сравнивает еще и типы, тут null-объект, undefined - undefined
console.log(null == undefined) // не сравниает типы, а сравнивает только значения 

//1.5 Выведи в консоль результат выражения 1 + '1'. Да, этот удивительный JS... И снова попрошу тебя объяснить своими словами, что произошло🙂
console.log(1 + '1') // мы к числу присоединили строку получилось 1(число) 1(строка) = 11(строка)
