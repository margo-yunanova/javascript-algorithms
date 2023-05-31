// function sumStrings(a: string, b: string) {
//   return (BigInt(a) + BigInt(b)).toString();
// }

const cutStartZero = (str: string): string =>
  !str.startsWith("0") ? str : cutStartZero(str.slice(1));

const sumStrings = (string1: string, string2: string) => {
  let carry = 0;
  let sum = "";
  const str1 = cutStartZero(string1).split("").reverse();
  const str2 = cutStartZero(string2).split("").reverse();

  const maxLength = Math.max(str1.length, str2.length);

  for (let i = 0; i < maxLength; i++) {
    const middleSum = +(str1[i] ?? 0) + +(str2[i] ?? 0) + carry;

    carry = middleSum > 9 ? 1 : 0;
    sum += middleSum < 10 ? middleSum : middleSum - 10;
  }

  sum += carry !== 0 ? carry : "";
  return sum.split("").reverse().join("");
};

// console.log(
//   sumStrings("50095301248058391139327916291", "9") //"81055900096023504197206408605")
// );

// console.log(
//   sumStrings("712569312664357328695151392", "8100824045303269669937")
// );

// console.log(sumStrings("800", "9567"));

//console.log(sumStrings("123", "456"));

console.log(sumStrings("00103", "08567")); //8670
