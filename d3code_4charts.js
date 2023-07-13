var margin = {top: 20, right: 20, bottom: 30, left: 50},
    halfWidth = 480 - margin.left - margin.right, 
    quarterWidth = 240 - margin.left - margin.right, 
    height = 500 - margin.top - margin.bottom;

var svg1 = d3.select("#chart1").append("svg")
    .attr("width", halfWidth + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var svg2 = d3.select("#chart2").append("svg")
    .attr("width", halfWidth + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var svg3 = d3.select("#chart3").append("svg")
    .attr("width", quarterWidth + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var svg4 = d3.select("#chart4").append("svg")
    .attr("width", quarterWidth + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Rest of your setup (parseDate, scales, axis, line, etc)
var parseDate = d3.timeParse("%Y-%m-%d");

var x = d3.scaleTime().range([0, width]);

var y = d3.scaleLinear().range([height, 0]);

var xAxis = d3.axisBottom(x);

var yAxis = d3.axisLeft(y);

var line = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.value); });

var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
function drawChart1(dataFile) {
  svg1.selectAll('*').remove();

  // Rest of your drawChart code, replace all svg1 with svg1

  svg1.selectAll('*').remove();

  // Create a tooltip dot but set its opacity to 0
  var tooltipDot = svg1.append("circle")
    .attr("r", 5)
    .attr("opacity", 0);

  d3.csv(dataFile).then(function(data) {
    data.forEach(function(d) {
      d.date = parseDate(d.date);
      d.value = +d.value;
    });

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.value; }));

    svg1.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg1.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Close");

    svg1.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);

    // Invisible circles for tooltips
    svg1.selectAll("dot")
        .data(data)
        .enter().append("circle")
        .attr("r", 5)
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return y(d.value); })
        .style("fill", "none")
        .style("pointer-events", "all")
        .on("mouseover", function(event, d) {
            tooltipDot.attr("opacity", 1)
                      .attr("cx", x(d.date))
                      .attr("cy", y(d.value));
            tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
            tooltip.html("Value: " + d.value)
                    .style("left", (d3.pointer(event)[0] + 5) + "px")
                    .style("top", (d3.pointer(event)[1] - 28) + "px");
        })
        .on("mouseout", function(d) {
            tooltipDot.attr("opacity", 0);
            tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
        });

  }).catch(function(error){
      console.log(error);
    });
  }


function drawChart2(dataFile) {
  svg2.selectAll('*').remove();

  // Rest of your drawChart code, replace all svg2 with svg22

  svg2.selectAll('*').remove();

  // Create a tooltip dot but set its opacity to 0
  var tooltipDot = svg2.append("circle")
    .attr("r", 5)
    .attr("opacity", 0);

  d3.csv(dataFile).then(function(data) {
    data.forEach(function(d) {
      d.date = parseDate(d.date);
      d.value = +d.value;
    });

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.value; }));

    svg2.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg2.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Close");

    svg2.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);

    // Invisible circles for tooltips
    svg2.selectAll("dot")
        .data(data)
        .enter().append("circle")
        .attr("r", 5)
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return y(d.value); })
        .style("fill", "none")
        .style("pointer-events", "all")
        .on("mouseover", function(event, d) {
            tooltipDot.attr("opacity", 1)
                      .attr("cx", x(d.date))
                      .attr("cy", y(d.value));
            tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
            tooltip.html("Value: " + d.value)
                    .style("left", (d3.pointer(event)[0] + 5) + "px")
                    .style("top", (d3.pointer(event)[1] - 28) + "px");
        })
        .on("mouseout", function(d) {
            tooltipDot.attr("opacity", 0);
            tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
        });

  }).catch(function(error){
      console.log(error);
    });
  }


function drawChart3(dataFile) {
  svg3.selectAll('*').remove();

  // Rest of your drawChart code, replace all svg3 with svg33

  svg3.selectAll('*').remove();

  // Create a tooltip dot but set its opacity to 0
  var tooltipDot = svg3.append("circle")
    .attr("r", 5)
    .attr("opacity", 0);

  d3.csv(dataFile).then(function(data) {
    data.forEach(function(d) {
      d.date = parseDate(d.date);
      d.value = +d.value;
    });

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.value; }));

    svg3.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg3.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Close");

    svg3.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);

    // Invisible circles for tooltips
    svg3.selectAll("dot")
        .data(data)
        .enter().append("circle")
        .attr("r", 5)
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return y(d.value); })
        .style("fill", "none")
        .style("pointer-events", "all")
        .on("mouseover", function(event, d) {
            tooltipDot.attr("opacity", 1)
                      .attr("cx", x(d.date))
                      .attr("cy", y(d.value));
            tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
            tooltip.html("Value: " + d.value)
                    .style("left", (d3.pointer(event)[0] + 5) + "px")
                    .style("top", (d3.pointer(event)[1] - 28) + "px");
        })
        .on("mouseout", function(d) {
            tooltipDot.attr("opacity", 0);
            tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
        });

  }).catch(function(error){
      console.log(error);
    });
  }


function drawChart4(dataFile) {
  svg4.selectAll('*').remove();

  // Rest of your drawChart code, replace all svg4 with svg44
  function drawChart(dataFile) {
    svg4.selectAll('*').remove();
  
    // Create a tooltip dot but set its opacity to 0
    var tooltipDot = svg4.append("circle")
      .attr("r", 5)
      .attr("opacity", 0);
  
    d3.csv(dataFile).then(function(data) {
      data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.value = +d.value;
      });
  
      x.domain(d3.extent(data, function(d) { return d.date; }));
      y.domain(d3.extent(data, function(d) { return d.value; }));
  
      svg4.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);
  
      svg4.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Close");
  
      svg4.append("path")
          .datum(data)
          .attr("class", "line")
          .attr("d", line);
  
      // Invisible circles for tooltips
      svg4.selectAll("dot")
          .data(data)
          .enter().append("circle")
          .attr("r", 5)
          .attr("cx", function(d) { return x(d.date); })
          .attr("cy", function(d) { return y(d.value); })
          .style("fill", "none")
          .style("pointer-events", "all")
          .on("mouseover", function(event, d) {
              tooltipDot.attr("opacity", 1)
                        .attr("cx", x(d.date))
                        .attr("cy", y(d.value));
              tooltip.transition()
                     .duration(200)
                     .style("opacity", .9);
              tooltip.html("Value: " + d.value)
                     .style("left", (d3.pointer(event)[0] + 5) + "px")
                     .style("top", (d3.pointer(event)[1] - 28) + "px");
          })
          .on("mouseout", function(d) {
              tooltipDot.attr("opacity", 0);
              tooltip.transition()
                     .duration(500)
                     .style("opacity", 0);
          });
  
    }).catch(function(error){
      console.log(error);
    });
  }
}

document.getElementById('load-data-1987').addEventListener('click', function() {
  drawChart1("SP500_1987_2.csv");
});

document.getElementById('load-data-1929').addEventListener('click', function() {
  drawChart2("DOW_1929.csv");
});

document.getElementById('load-data-2008').addEventListener('click', function() {
  drawChart3("SP500_2008_2.csv");
});

document.getElementById('load-data-2020').addEventListener('click', function() {
  drawChart4("SP500_2020_2.csv");
});

// Load all datasets by default
drawChart1("DOW_1929.csv");
drawChart2("SP500_1987_2.csv");
drawChart3("SP500_2008_2.csv");
drawChart4("SP500_2020_2.csv");
