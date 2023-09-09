# Mexican Wave

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

Rules

- The input string will always be lower case but maybe empty.
- If the character in the string is whitespace then pass over it as if it was an empty seat
  Example

```javascript
wave("hello") => {"Hello", "hEllo", "heLlo", "helLo", "hellO"}
```
