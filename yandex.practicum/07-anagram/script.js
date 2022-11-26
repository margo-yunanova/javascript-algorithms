// @ts-check


/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */

 const anagram = (str1, str2) => str1.toLowerCase() !== str2.toLowerCase() && str1.toLowerCase().split('').sort().join() === str2.toLowerCase().split('').sort().join();


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
