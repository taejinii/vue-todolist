import * as d3 from "d3";

export default function generateDonutChart(calculatedTodoCount, elementId) {
  const svgWidth = 200;
  const svgHeight = 150;
  const radius = Math.min(svgWidth, svgHeight) / 2;
  const colorRange = ["#ef4444", "#eab308", "#069668"];

  const colorDomain = calculatedTodoCount.map((todo) => todo.status_value);
  const color = d3.scaleOrdinal(colorRange).domain(colorDomain);

  const svg = d3
    .select(elementId)
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  const g = svg
    .append("g")
    .attr("transform", "translate(" + svgWidth / 2 + "," + svgHeight / 2 + ")");

  const pie = d3.pie().value((d) => d.count);
  const arc = d3
    .arc()
    .innerRadius(radius * 0.67)
    .outerRadius(radius);

  const part = g
    .selectAll(".part")
    .data(pie(calculatedTodoCount))
    .enter()
    .append("g");

  part
    .append("path")
    .attr("d", arc)
    .attr("fill", (_, i) => color(i));
}
