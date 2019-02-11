import MergeSort from "../../algorithms/sorting/merge-sort/MergeSort";

export default function isUnique(string) {
  //128 characters uniques in ASCII
  if (string.length > 128) {
    return false;
  }

  let hash = new Map();

  for (let i = 0; i < string.length; i++) {
    if (hash.has(string[i])) {
      return false;
    }
    hash.set(string[i], true);
  }
  return true;
}

export const isUniqueBySorting = string => {
  //128 characters uniques in ASCII
  if (string.length > 128) {
    return false;
  }

  const array = new MergeSort().sort(string.split(""));

  for (let i = 0; i < string.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      return false;
    }
  }

  return true;
};
