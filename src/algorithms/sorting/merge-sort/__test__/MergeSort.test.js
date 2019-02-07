import MergeSort from "../MergeSort";
import { SortTester } from "../../helpers/SortTester";

describe("MergeSort", () => {
  it("should sort an array", () => {
    SortTester.testSort(MergeSort);
  });
});
