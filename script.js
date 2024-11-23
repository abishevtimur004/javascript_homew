let firstName = "Тимур";
let lastName = "Абишев";
let age = 20;
console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} лет`);

let city = "Шымкент";
console.log("Я родом из города " + city);

let password = "mypassword123";
let hasAccess = password !== ""; 
console.log("Password:", password);
console.log("Has Access:", hasAccess);

let isMember = false;
let isMemberString = isMember.toString();
console.log("Is Member as string:", isMemberString);
console.log("Type of isMemberString:", typeof isMemberString);

let cartItems = 0;
let isCartEmpty = Boolean(cartItems);
console.log("Is Cart Empty:", isCartEmpty);
// Пояснение: 0 преобразуется в `false`, поэтому корзина считается пустой.

let averageScore = 89.75695;
averageScore = parseFloat(averageScore.toFixed(1));  
console.log("Rounded Average Score:", averageScore);

let greetingMessage = "      Приветствуем вас в мире программирования!        ";

let trimmedMessage = greetingMessage.trim();
console.log("Trimmed Message:", trimmedMessage);

let upperCaseMessage = trimmedMessage.toUpperCase();
console.log("Uppercase Message:", upperCaseMessage);

let containsProgramming = trimmedMessage.includes("программирования");
console.log("Contains 'программирования':", containsProgramming);

console.log(object);
