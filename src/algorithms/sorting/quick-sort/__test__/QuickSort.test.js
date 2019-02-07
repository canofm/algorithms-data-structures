import QuickSort from "../QuickSort";
import { SortTester } from "../../helpers/SortTester";

describe("QuickSort", () => {
  it("should sort an array", () => {
    SortTester.testSort(QuickSort);
  });
});
