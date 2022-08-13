/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 * 
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 * 
*/

function palindrome(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return str.toLowerCase() === reverseStr.toLowerCase(); 
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false
/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 * 
 * palindrome('О, лета тело!'); // true
 * 
*/

function isPunctuationMarks(letter) {
    return letter === ' ' || letter === '!' || letter === ',';
}

function clearPunctuationMarks(string) {
    let onlyLetters = '';
    for (let i = 0; i < string.length; i++) {
        if (isPunctuationMarks(string[i])) continue;
        onlyLetters = onlyLetters + string[i];
    }
    return onlyLetters;
}

function palindromeBonus(strBonus) {
    return palindrome(clearPunctuationMarks(strBonus)); 
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindromeBonus('Лидер бредил')); 
console.log(palindromeBonus('Учуя молоко, я около мяучу'));
console.log(palindromeBonus('Sum summus mus'));
console.log(palindromeBonus('It looks like anything to me'));
