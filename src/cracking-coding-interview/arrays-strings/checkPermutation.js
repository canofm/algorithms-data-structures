import MergeSort from "../../algorithms/sorting/merge-sort/MergeSort";

const mergeSort = new MergeSort();
export default function checkPermutation(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  const sortedString1 = mergeSort.sort(string1.split(""));
  const sortedString2 = mergeSort.sort(string2.split(""));

  for (let i = 0; i < sortedString1.length; i++) {
    if (sortedString1[i] !== sortedString2[i]) return false;
  }
  return true;
}

export const checkPermutation2 = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  const map = new Map();
  for (let i = 0; i < string1.length; i++) {
    const value = map.has(string1[i]) ? map[i]++ : 1;
    map.set(string1[i], value);
  }

  for (let i = 0; i < string2.length; i++) {
    map.set(string2[i], map[i]--);
    if (map.get(string2[i]) < 0) {
      return false;
    }
  }
  return true;
};
