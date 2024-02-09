var isPalindrome = function (s) {
  const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";

  let str = "";
  let revStr = "";

  for (const char of s) {
    if (alphanumeric.includes(char.toLowerCase())) {
      str += char.toLowerCase();
      revStr = char.toLowerCase() + revStr;
    }
  }

  return str === revStr;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
