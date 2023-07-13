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

// // // //////////////////////////////////////////////////////////////////////////////////
// // // var margin = {top: 20, right: 20, bottom: 30, left: 50},
// // //     width = 960 - margin.left - margin.right,
// // //     height = 500 - margin.top - margin.bottom;

// // // var parseDate = d3.timeParse("%Y-%m-%d");

// // // var x = d3.scaleTime().range([0, width]);

// // // var y = d3.scaleLinear().range([height, 0]);

// // // var xAxis = d3.axisBottom(x);

// // // var yAxis = d3.axisLeft(y);

// // // var line = d3.line()
// // //     .x(function(d) { return x(d.date); })
// // //     .y(function(d) { return y(d.value); });

// // // var svg = d3.select("#chart").append("svg")
// // //     .attr("width", width + margin.left + margin.right)
// // //     .attr("height", height + margin.top + margin.bottom)
// // //   .append("g")
// // //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// // // var tooltip = d3.select("body").append("div")
// // //     .attr("class", "tooltip")
// // //     .style("opacity", 0);

// // // function drawChart(dataFile) {
// // //   svg.selectAll('*').remove();

// // //   d3.csv(dataFile).then(function(data) {
// // //     data.forEach(function(d) {
// // //       d.date = parseDate(d.date);
// // //       d.value = +d.value;
// // //     });

// // //     x.domain(d3.extent(data, function(d) { return d.date; }));
// // //     y.domain(d3.extent(data, function(d) { return d.value; }));

// // //     svg.append("g")
// // //         .attr("class", "x axis")
// // //         .attr("transform", "translate(0," + height + ")")
// // //         .call(xAxis);

// // //     svg.append("g")
// // //         .attr("class", "y axis")
// // //         .call(yAxis)
// // //       .append("text")
// // //         .attr("transform", "rotate(-90)")
// // //         .attr("y", 6)
// // //         .attr("dy", ".71em")
// // //         .style("text-anchor", "end")
// // //         .text("Close");

// // //     svg.append("path")
// // //         .datum(data)
// // //         .attr("class", "line")
// // //         .attr("d", line);

// // //     var overlay = svg.append("rect")
// // //       .attr("class", "overlay")
// // //       .attr("width", width)
// // //       .attr("height", height)
// // //       .style("fill", "none")
// // //       .style("pointer-events", "all");

// // //     var focus = svg.append("g")
// // //       .style("display", "none");

// // //     focus.append("circle")
// // //       .attr("r", 4.5);

// // //     overlay
// // //       .on("mouseover", function() { focus.style("display", null); tooltip.style("opacity", .9); })
// // //       .on("mouseout", function() { focus.style("display", "none"); tooltip.style("opacity", 0); })
// // //       .on("mousemove", function() {
// // //           var mouse = d3.mouse(this);
// // //           var x0 = x.invert(mouse[0]);
// // //           var y0 = y.invert(mouse[1]);
// // //           focus.attr("transform", "translate(" + x(mouse[0]) + "," + y(mouse[1]) + ")");

// // //           tooltip.html("x: " + x0 + "<br/>y: " + y0)
// // //               .style("left", (d3.event.pageX + 5) + "px")
// // //               .style("top", (d3.event.pageY - 28) + "px");
// // //       });

// // //   }).catch(function(error){
// // //     console.log(error);
// // //   });
// // // }

// // // document.getElementById('load-data-1987').addEventListener('click', function() {
// // //   drawChart("SP500_1987_2.csv");
// // // });

// // // document.getElementById('load-data-1929').addEventListener('click', function() {
// // //   drawChart("DOW_1929.csv");
// // // });

// // // // Load the 1929 data by default
// // // drawChart("DOW_1929.csv");
// // var margin = {top: 20, right: 20, bottom: 30, left: 50},
// //     width = 960 - margin.left - margin.right,
// //     height = 500 - margin.top - margin.bottom;

// // var parseDate = d3.timeParse("%Y-%m-%d");

// // var x = d3.scaleTime().range([0, width]);
// // var y = d3.scaleLinear().range([height, 0]);

// // var xAxis = d3.axisBottom(x);
// // var yAxis = d3.axisLeft(y);

// // var line = d3.line()
// //     .x(function(d) { return x(d.date); })
// //     .y(function(d) { return y(d.value); });

// // var svg = d3.select("#chart").append("svg")
// //     .attr("width", width + margin.left + margin.right)
// //     .attr("height", height + margin.top + margin.bottom)
// //   .append("g")
// //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// // // Tool tip
// // var focus = svg.append('g').style('display', 'none');

// // focus.append('circle')
// //     .attr('r', 4.5);

// // focus.append('text')
// //     .attr('x', 9)
// //     .attr('dy', '.35em');

// // // Overlay for 'mousemove' event
// // var focusRect = svg.append('rect')
// //     .attr('width', width)
// //     .attr('height', height)
// //     .style('fill', 'none')
// //     .style('pointer-events', 'all');

// // function drawChart(dataFile) {
// //   svg.selectAll('*').remove();

// //   d3.csv(dataFile).then(function(data) {
// //     data.forEach(function(d) {
// //       d.date = parseDate(d.date);
// //       d.value = +d.value;
// //     });

// //     x.domain(d3.extent(data, function(d) { return d.date; }));
// //     y.domain(d3.extent(data, function(d) { return d.value; }));

// //     svg.append("g")
// //         .attr("class", "x axis")
// //         .attr("transform", "translate(0," + height + ")")
// //         .call(xAxis);

// //     svg.append("g")
// //         .attr("class", "y axis")
// //         .call(yAxis)
// //       .append("text")
// //         .attr("transform", "rotate(-90)")
// //         .attr("y", 6)
// //         .attr("dy", ".71em")
// //         .style("text-anchor", "end")
// //         .text("Close");

// //     svg.append("path")
// //         .datum(data)
// //         .attr("class", "line")
// //         .attr("d", line);

// //     var bisectDate = d3.bisector(function(d) { return d.date; }).left;

// //     focusRect.on('mouseover', function() { focus.style('display', null); });
// //     focusRect.on('mouseout', function() { focus.style('display', 'none'); });
// //     focusRect.on('mousemove', function(event) {
// //       var coordinates = d3.pointer(event, this);
// //       var x0 = x.invert(coordinates[0]);
// //       var i = bisectDate(data, x0, 1);
// //       var d0 = data[i - 1];
// //       var d1 = data[i];
// //       var d = x0 - d0.date > d1.date - x0 ? d1 : d0;
// //       focus.attr('transform', `translate(${x(d.date)}, ${y(d.value)})`);
// //       focus.select('text').text(`${d.value}`);
// //     });

// //   }).catch(function(error){
// //     console.log(error);
// //   });
// // }

// // document.getElementById('load-data-1987').addEventListener('click', function() {
// //   drawChart("SP500_1987.csv");
// // });

// // document.getElementById('load-data-1929').addEventListener('click', function() {
// //   drawChart("DOW_1929.csv");
// // });

// // // Load the 1929 data by default
// // drawChart("DOW_1929.csv");


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

// var focus = svg.append('g').style('display', 'none');

// focus.append('circle')
//     .attr('r', 4.5);

// var focusText = focus.append('text')
//     .attr('x', 9)
//     .attr('dy', '.35em');

// svg.append('rect')
//     .attr('class', 'overlay')
//     .attr('width', width)
//     .attr('height', height)
//     .style('fill', 'none')
//     .style('pointer-events', 'all');

// function drawChart(dataFile) {

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

//     var bisectDate = d3.bisector(function(d) { return d.date; }).left;

//     svg.select('.overlay').on('mouseover', function() { focus.style('display', null); });
//     svg.select('.overlay').on('mouseout', function() { focus.style('display', 'none'); });
//     svg.select('.overlay').on('mousemove', function(event) {
//       var x0 = x.invert(d3.pointer(event)[0]);
//       var i = bisectDate(data, x0, 1);
//       var d0 = data[i - 1];
//       var d1 = data[i];
//       var d = x0 - d0.date > d1.date - x0 ? d1 : d0;
//       focus.attr('transform', `translate(${x(d.date)}, ${y(d.value)})`);
//       focusText.text(`${d.value}`);
//     });

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

    // Invisible circles for tooltips
    svg.selectAll("dot")
        .data(data)
        .enter().append("circle")
        .attr("r", 5)
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return y(d.value); })
        .style("fill", "none")
        .style("pointer-events", "all")
        .on("mouseover", function(d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html("Date: " + d.date.toDateString() + "<br/>Value: " + d.value)
                .style("left", (d3.event.pageX + 5) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
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
