export default class MergeSort {
  sort(originalArray) {
    if (originalArray.length <= 1) {
      return originalArray;
    }

    const middleIndex = Math.floor(originalArray.length / 2);
    const leftArray = originalArray.slice(0, middleIndex);
    const rightArray = originalArray.slice(middleIndex, originalArray.length);

    const leftSortedArray = this.sort(leftArray);
    const rightSortedArray = this.sort(rightArray);

    return this.mergeSortedArrays(leftSortedArray, rightSortedArray);
  }

  mergeSortedArrays(leftArray, rightArray) {
    let sortedArray = [];

    while (leftArray.length && rightArray.length) {
      const minimunElement = leftArray[0] <= rightArray[0] ? leftArray.shift() : rightArray.shift();
      sortedArray.push(minimunElement);
    }

    if (leftArray.length) {
      sortedArray = sortedArray.concat(leftArray);
    }

    if (rightArray.length) {
      sortedArray = sortedArray.concat(rightArray);
    }

    return sortedArray;
  }
}