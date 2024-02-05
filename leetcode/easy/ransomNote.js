function ransomNote(ransomNote, magazine) {
  const magazineTotal = {};
  const ransomNoteTotal = {};
  for (const letter of magazine) {
    magazineTotal[letter] = (magazineTotal[letter] ?? 0) + 1;
  }
  for (const letter of ransomNote) {
    ransomNoteTotal[letter] = (ransomNoteTotal[letter] ?? 0) + 1;
  }

  for (const key in ransomNoteTotal) {
    if (
      ransomNoteTotal[key] > magazineTotal[key] ||
      magazineTotal[key] === undefined
    )
      return false;
  }

  return true;
}

console.log(ransomNote("лето", "тело"));
