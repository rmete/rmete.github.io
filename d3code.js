// var margin = {top: 20, right: 20, bottom: 30, left: 50},
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

// var parseDate = d3.timeParse("%Y-%m-%d");

// var x = d3.scaleTime().range([0, width]);

// var y = d3.scaleLinear().range([height, 0]);

// var xAxis = d3.axisBottom(x);

// var yAxis = d3.axisLeft(y);

// var line = d3.line()
//     .x(function(d) { return x(d.date); })
//     .y(function(d) { return y(d.value); });

// var svg = d3.select("#chart").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// function drawChart(dataFile) {
//   svg.selectAll('*').remove();

//   d3.csv(dataFile).then(function(data) {
//     data.forEach(function(d) {
//       d.date = parseDate(d.date);
//       d.value = +d.value;
//     });

//     x.domain(d3.extent(data, function(d) { return d.date; }));
//     y.domain(d3.extent(data, function(d) { return d.value; }));

//     svg.append("g")
//         .attr("class", "x axis")
//         .attr("transform", "translate(0," + height + ")")
//         .call(xAxis);

//     svg.append("g")
//         .attr("class", "y axis")
//         .call(yAxis)
//       .append("text")
//         .attr("transform", "rotate(-90)")
//         .attr("y", 6)
//         .attr("dy", ".71em")
//         .style("text-anchor", "end")
//         .text("Close");

//     svg.append("path")
//         .datum(data)
//         .attr("class", "line")
//         .attr("d", line);
//   }).catch(function(error){
//     console.log(error);
//   });
// }

// document.getElementById('load-data-1987').addEventListener('click', function() {
//   drawChart("SP500_1987.csv");
// });

// document.getElementById('load-data-1929').addEventListener('click', function() {
//   drawChart("DOW_1929.csv");
// });

// // Load the 1929 data by default
// drawChart("DOW_1929.csv");


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

var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

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

    var overlay = svg.append("rect")
      .attr("class", "overlay")
      .attr("width", width)
      .attr("height", height)
      .style("fill", "none")
      .style("pointer-events", "all");

    var focus = svg.append("g")
      .style("display", "none");

    focus.append("circle")
      .attr("r", 4.5);

    overlay
      .on("mouseover", function() { focus.style("display", null); tooltip.style("opacity", .9); })
      .on("mouseout", function() { focus.style("display", "none"); tooltip.style("opacity", 0); })
      .on("mousemove", function() {
          var mouse = d3.mouse(this);
          var x0 = x.invert(mouse[0]);
          var y0 = y.invert(mouse[1]);
          focus.attr("transform", "translate(" + x(mouse[0]) + "," + y(mouse[1]) + ")");

          tooltip.html("x: " + x0 + "<br/>y: " + y0)
              .style("left", (d3.event.pageX + 5) + "px")
              .style("top", (d3.event.pageY - 28) + "px");
      });

  }).catch(function(error){
    console.log(error);
  });
}

document.getElementById('load-data-1987').addEventListener('click', function() {
  drawChart("SP500_1987_2.csv");
});

document.getElementById('load-data-1929').addEventListener('click', function() {
  drawChart("DOW_1929.csv");
});

// Load the 1929 data by default
drawChart("DOW_1929.csv");
