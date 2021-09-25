const fs = require("fs");
const path = require("path");

const solution = fs.readFileSync(
  path.resolve(__dirname, "../src/solution.js"),
  "utf8"
);
window.eval(solution);

describe("Функция groupWeeks", () => {
  it("возвращает корректный результат", () => {
    const input = [
      { date: "2019-04-08", count: 10 },
      { date: "2019-04-10", count: 23 },
      { date: "2019-04-22", count: 5 },
    ];

    const output = groupWeeks(input);
    const sortedOutput = output.sort(
      (a, b) => new Date(a.weekStart) - new Date(b.weekStart)
    );

    const expectedOutput = [
      { weekStart: "2019-04-08", count: "16.50" },
      { weekStart: "2019-04-22", count: "5.00" },
    ];

    expect(expectedOutput).toEqual(sortedOutput);

    const isEqual =
      JSON.stringify(sortedOutput) === JSON.stringify(expectedOutput);
    expect(isEqual).toEqual(true);
  });
});
