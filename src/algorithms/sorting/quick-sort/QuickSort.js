export default class QuickSort {
  sort(originalArray) {
    if (originalArray.length <= 1) {
      return originalArray;
    }

    // Clone original array to prevent it from modification
    const array = [...originalArray];

    const leftArray = [];
    const rightArray = [];

    const pivotElement = array.shift();
    const centerArray = [pivotElement];

    while (array.length) {
      const currentElement = array.shift();
      if (currentElement === pivotElement) {
        centerArray.push(currentElement);
      } else if (currentElement < pivotElement) {
        leftArray.push(currentElement);
      } else {
        rightArray.push(currentElement);
      }
    }

    const leftArraySorted = this.sort(leftArray);
    const rightArraySorted = this.sort(rightArray);

    return leftArraySorted.concat(centerArray, rightArraySorted);
  }
}
