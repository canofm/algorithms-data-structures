export default class BubbleSort {
  sort(originalArray) {
    // Clone original to prevent its modification
    const array = [...originalArray];

    for (let i = 1; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j + 1] < array[j]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  }
}
