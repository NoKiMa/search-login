import { creatPagesService } from "./creatPagesService";

describe("Must return the correct number of pages", () => {
  test("if pagesCount < 10", () => {
    let current_page = 1;
    let pagesCount = 10;
    expect(creatPagesService([], pagesCount, current_page).length).toEqual(
      pagesCount
    );
  });

  test("if pagesCount >== 10 and current_page > 5", () => {
    let current_page = 8;
    let pagesCount = 11;
    expect(creatPagesService([], pagesCount, current_page).length).toEqual(8);
  });
  test("if pagesCount >== 10 and current_page <== 5", () => {
    let current_page = 4;
    let pagesCount = 11;
    expect(creatPagesService([], pagesCount, current_page).length).toEqual(10);
  });
});

describe("Wrong params", () => {
  test("if current_page is 0", () => {
    let current_page = 0;
    let pagesCount = 10;
    expect(
      creatPagesService([], pagesCount, current_page).length
    ).not.toBeFalsy();
  });

  test("if pagesCount is 0", () => {
    let current_page = 1;
    let pagesCount = 0;
    expect(creatPagesService([], pagesCount, current_page).length).toBeFalsy();
  });
});
