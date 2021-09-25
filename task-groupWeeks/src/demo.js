/* global google */
// Можете править этот массив входных данных
const data = [
  { date: "2019-04-05", count: 570 },
  { date: "2019-04-08", count: 378 },
  { date: "2019-04-09", count: 695 },
  { date: "2019-04-12", count: 188 },
  { date: "2019-04-13", count: 176 },
  { date: "2019-04-14", count: 136 },
  { date: "2019-04-16", count: 123 },
  { date: "2019-04-17", count: 292 },
  { date: "2019-04-18", count: 429 },
  { date: "2019-04-21", count: 309 },
  { date: "2019-04-23", count: 79 },
  { date: "2019-04-29", count: 840 },
  { date: "2019-04-30", count: 63 },
];

function drawChart() {
  const entry = new google.visualization.DataTable();
  entry.addColumn("date", "Дата");
  entry.addColumn("number", "Исходный");
  entry.addColumn("number", "Усредненный по неделям");

  const result = window.groupWeeks(data);
  const sortedDates = data.sort((a, b) => new Date(a.date) - new Date(b.date));
  const firstDate = new Date(sortedDates[0].date);
  const lastDate = new Date(sortedDates[sortedDates.length - 1].date);
  let currentDate = new Date(firstDate);
  while (currentDate < lastDate) {
    const day = currentDate.toISOString().substr(0, 10);
    const original = data.find((n) => n.date === day) || { count: null };
    const aggregated = result.find((n) => n.weekStart === day) || {
      count: null,
    };
    entry.addRow([
      currentDate,
      original.count === null ? null : Number(original.count),
      aggregated.count === null ? null : Number(aggregated.count),
    ]);
    currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
  }

  const options = {
    title: "Посещаемость сайта",
    interpolateNulls: true,
    width: 900,
    height: 500,
  };

  const chart = new google.visualization.LineChart(
    document.querySelector("#chart")
  );

  chart.draw(entry, options);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
