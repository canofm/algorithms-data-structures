export default function stringCompression(string) {
  let compression = "";
  let currentLetter = string[0];
  let currentCount = 1;
  for (let i = 1; i < string.length; i++) {
    if (currentLetter !== string[i]) {
      compression += `${currentLetter}${currentCount}`;
      currentLetter = string[i];
      currentCount = 1;
    } else {
      currentCount++;
    }
  }
  compression += `${currentLetter}${currentCount}`;
  return compression;
}
