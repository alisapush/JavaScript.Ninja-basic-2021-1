function groupWeeks(arr) {
  let result = [];
  for (element of arr) {
    element.date = new Date(element.date);
    // console.log(element, "day of week", element.date.getDay());

    let dayNumberOfMonday = element.date.getDay() - 1;
    // console.log("dayNumberOfMonday", dayNumberOfMonday);

    if (dayNumberOfMonday === -1) {
      dayNumberOfMonday = 6;
    }

    let monday = new Date(element.date - dayNumberOfMonday * 86400000);

    let existing = result.find((e) => e.monday.getTime() === monday.getTime());

    if (existing) {
      existing.amount += 1;
      existing.count += element.count;
    } else {
      result.push({
        monday: monday,
        amount: 1,
        count: element.count,
      });
    }
  }
  // console.log("RESULT", result);

  let answer = [];

  for (step of result) {
    step.monday =
      step.monday.getFullYear().toString().padStart(4, "0") +
      "-" +
      (step.monday.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      step.monday.getDate().toString().padStart(2, "0");

    // console.log("result monday: ", step.monday);

    let newCount = (step.count / step.amount).toFixed(2);

    // console.log("result new count: ", newCount);

    answer.push({
      weekStart: step.monday,
      count: newCount,
    });
  }
  return answer;
}

groupWeeks([
  { date: "2019-04-08", count: 10 },
  { date: "2019-04-10", count: 23 },
  { date: "2019-04-22", count: 5 },
]);
