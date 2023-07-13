// d3.csv('DOW_1929.csv').then(data => {
//   data.forEach(d => {
//     d.date = new Date(d.date);
//     d.value = +d.value;
//     d.norm = d.value / data[0].value;
//   });

//   const svgWidth = 500, svgHeight = 300;
//   const margin = { top: 20, right: 20, bottom: 30, left: 50 };
//   const width = svgWidth - margin.left - margin.right;
//   const height = svgHeight - margin.top - margin.bottom;

//   const svg = d3.select('svg')
//     .attr("width", svgWidth)
//     .attr("height", svgHeight);

//   const g = svg.append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//   const x = d3.scaleTime()
//     .rangeRound([0, width])
//     .domain(d3.extent(data, d => d.date));

//   const y = d3.scaleLinear()
//     .rangeRound([height, 0])
//     .domain([0, d3.max(data, d => d.norm)]);

//   const line = d3.line()
//     .x(d => x(d.date))
//     .y(d => y(d.norm));

//   g.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x));

//   g.append("g")
//     .call(d3.axisLeft(y))
//     .append("text")
//     .attr("fill", "#000")
//     .attr("transform", "rotate(-90)")
//     .attr("y", 6)
//     .attr("dy", "0.71em")
//     .attr("text-anchor", "end")
//     .text("Normalized Close Value");

//   g.append("path")
//     .datum(data)
//     .attr("fill", "none")
//     .attr("stroke", "steelblue")
//     .attr("stroke-linejoin", "round")
//     .attr("stroke-linecap", "round")
//     .attr("stroke-width", 1.5)
//     .attr("d", line);
// });

var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var parseDate = d3.timeParse("%Y-%m-%d");

var x = d3.scaleTime().range([0, width]);

var y = d3.scaleLinear().range([height, 0]);

var xAxis = d3.axisBottom(x);

var yAxis = d3.axisLeft(y);

var line = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.value); });

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

function drawChart(dataFile) {
  svg.selectAll('*').remove();

  d3.csv(dataFile).then(function(data) {
    data.forEach(function(d) {
      d.date = parseDate(d.date);
      d.value = +d.value;
    });

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.value; }));

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Close");

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);
  }).catch(function(error){
    console.log(error);
  });
}

function drawChart2(dataFile) {
  svg.selectAll('*').remove();

  d3.csv(dataFile).then(function(data) {
    data.forEach(function(d) {
      d.date = parseDate(d.Date);
      d.value = +d.Close;
    });

    console.log(data);

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.value; }));

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Close");

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);
  }).catch(function(error){
    console.log(error);
  });
}

document.getElementById('load-data-1987').addEventListener('click', function() {
  drawChart2("SP500_1987.csv");
});

document.getElementById('load-data-1929').addEventListener('click', function() {
  drawChart("DOW_1929.csv");
});

// Load the 1929 data by default
drawChart("DOW_1929.csv");
