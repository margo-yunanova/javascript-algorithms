import { MORSE_CODE } from "./preloaded";

function decodeMorse(morseCode: string): string {
  const decodeWord = (morseWord) =>
    morseWord
      .split(" ")
      .map((letter) => MORSE_CODE[letter])
      .join("");

  return morseCode.trim().split("   ").map(decodeWord).join(" ");
}

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
