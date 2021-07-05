import { sortService } from "./sortService";
import {
  loginsObjectArr,
  sortedStateByTypeUp,
  sortedStateByTypeDown,
  sortedStateByLoginDown,
  sortedStateByLoginUp,
} from "../config/testData.const";

describe("Must return currect sort of items", () => {
  test("sortedStateByTypeUp", () => {
    expect(sortService(loginsObjectArr, "type", true)).toEqual(
      sortedStateByTypeUp
    );
  });
  test("sortedStateByTypeDown", () => {
    expect(sortService(loginsObjectArr, "type", false)).toEqual(
      sortedStateByTypeDown
    );
  });
  test("sortedStateByLoginDown", () => {
    expect(sortService(loginsObjectArr, "login", false)).toEqual(
      sortedStateByLoginDown
    );
  });
  test("sortedStateByLoginUp", () => {
    expect(sortService(loginsObjectArr, "login", true)).toEqual(
      sortedStateByLoginUp
    );
  });
});
