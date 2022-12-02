# Format words into a sentence

[task link](https://www.codewars.com/kata/51689e27fe9a00b126000004/train/javascript)

[solution link](https://www.codewars.com/kata/reviews/516f30297c907a79f2000650/groups/638a01a32e6f410001edbfe9)

Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

Note:

**Empty** string values should be ignored.
**Empty arrays** or **null/nil/None** values being passed into the method should result in an empty string being returned.
Example: (**Input --> output**)

```javascript
['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
```
