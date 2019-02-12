export default function PalindromePermutation(string) {
  let letters = new Map();
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    letters.set(letter, letters.has(letter) ? letters[letter]++ : 0);
  }
  let justOneImpair = false;
  for (let countOfLetters of letters.values()) {
    if (countOfLetters % 2 !== 0) {
      if (justOneImpair === false) {
        justOneImpair = true;
      } else {
        return false;
      }
    }
  }
  return true;
}
