import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import json from "./data.json" assert {type: "json"};
const d3ChartContainer = document.querySelector(".d3-chart");
const dataArr = Array.from(json);
console.log(dataArr)

d3.select(d3ChartContainer)
.selectAll("svg")
.data(dataArr)
.enter()
.append("svg")
.style("background-color", "hsl(10, 79%, 65%)")
.attr("class", "bar")
.attr("height", (d) => {
    return `${(d.amount*3)}px`
})
