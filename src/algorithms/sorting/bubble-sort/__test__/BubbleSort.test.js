import BubbleSort from "../BubbleSort";
import { SortTester } from "../../helpers/SortTester";

describe("BubbleSort", () => {
  it("should sort array", () => {
    SortTester.testSort(BubbleSort);
  });
});
