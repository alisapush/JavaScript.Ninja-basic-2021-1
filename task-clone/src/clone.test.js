import clone from "./clone";

describe("функция clone", () => {
  it("корректно клонирует простой объект", () => {
    const simpleObj = { a: 1, b: 2 };
    expect(simpleObj).toStrictEqual(clone(simpleObj));
  });
});
