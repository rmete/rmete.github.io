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

  var title, summary;
  if(dataFile === "SP500_1987_2.csv") {
    title = "S&P 500 - 1987";
    summary = "This chart represents the S&P 500 index for the year 1987...";
  } else if(dataFile === "DOW_1929.csv") {
    title = "DOW - 1929";
    summary = "This chart represents the DOW index for the year 1929...";
  }

  svg.append("text") 
    .attr("x", (width / 2))             
    .attr("y", 0 - (margin.top / 2))
    .attr("text-anchor", "middle")  
    .style("font-size", "20px") 
    .style("font-weight", "bold")  
    .text(title);

  // Create a tooltip dot but set its opacity to 0
  var tooltipDot = svg.append("circle")
    .attr("r", 5)
    .attr("opacity", 0);

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
    svg.append("text")
    .attr("x", 0)             
    .attr("y", height + margin.bottom)
    .style("font-size", "16px")   
    .text(summary);

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

document.getElementById('load-data-2008').addEventListener('click', function() {
  drawChart("SP500_2008_2.csv");
});

document.getElementById('load-data-2020').addEventListener('click', function() {
  drawChart("SP500_2020_2.csv");
});

// Load the 1929 data by default
drawChart("DOW_1929.csv");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


