var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var parseDate = d3.timeParse("%Y-%m-%d");

var x = d3.scaleTime().range([0, width]);

var y = d3.scaleLinear().range([height, 0]);

var xAxis = d3.axisBottom(x);

var yAxis = d3.axisLeft(y);

var line = d3.line()
    .x(function(d) { return x(d.Date); })
    .y(function(d) { return y(d.Value); });

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

  // Create a tooltip dot but set its opacity to 0
  var tooltipDot = svg.append("circle")
    .attr("r", 5)
    .attr("opacity", 0);

  svg.append("text") 
    .attr("x", (width / 2))             
    .attr("y", 0)
    .attr("text-anchor", "middle")  
    .style("font-size", "20px") 
    .style("font-weight", "bold")  
    .text(title);

  d3.csv(dataFile).then(function(data) {
    data.forEach(function(d) {
      d.Date = parseDate(d.Date);
      d.Value = +d.Value;
    });

    x.domain(d3.extent(data, function(d) { return d.Date; }));
    y.domain(d3.extent(data, function(d) { return d.Value; }));

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

    // Create invisible lines at each data point
    svg.selectAll(".hover-line")
      .data(data)
      .enter().append("line")
      .attr("class", "hover-line")
      .attr("x1", d => x(d.Date))
      .attr("y1", 0)
      .attr("x2", d => x(d.Date))
      .attr("y2", height)
      .style("stroke", "transparent")
      .style("stroke-width", "10px")
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
          tooltip.transition()
                 .duration(200)
                 .style("opacity", .9);
          tooltip.html("Value: " + d.Value + "<br>Date: " + d3.timeFormat("%Y-%m-%d")(d.Date))
                 .style("left", (d3.pointer(event)[0] + 5) + "px")
                 .style("top", (d3.pointer(event)[1] - 28) + "px");
          tooltipDot.attr("opacity", 1)
            .attr("cx", x(d.Date))
            .attr("cy", y(d.Value));
      })
      .on("mouseout", function(d) {
          tooltip.transition()
                 .duration(500)
                 .style("opacity", 0);
          tooltipDot.attr("opacity", 0);
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

document.getElementById('load-data-1870').addEventListener('click', function() {
  drawChart("sp500_1870s.csv");
});

document.getElementById('load-data-1880').addEventListener('click', function() {
  drawChart("sp500_1880s.csv");
});

document.getElementById('load-data-1890').addEventListener('click', function() {
  drawChart("sp500_1890s.csv");
});

document.getElementById('load-data-1900').addEventListener('click', function() {
  drawChart("sp500_1900s.csv");
});
document.getElementById('load-data-1910').addEventListener('click', function() {
  drawChart("sp500_1910s.csv");
});

document.getElementById('load-data-1920').addEventListener('click', function() {
  drawChart("sp500_1920s.csv");
});

document.getElementById('load-data-1930').addEventListener('click', function() {
  drawChart("sp500_1930s.csv");
});

document.getElementById('load-data-1940').addEventListener('click', function() {
  drawChart("sp500_1940s.csv");
});
document.getElementById('load-data-1950').addEventListener('click', function() {
  drawChart("sp500_1950s.csv");
});

document.getElementById('load-data-1960').addEventListener('click', function() {
  drawChart("sp500_1960s.csv");
});

document.getElementById('load-data-1970').addEventListener('click', function() {
  drawChart("sp500_1970s.csv");
});

document.getElementById('load-data-1980').addEventListener('click', function() {
  drawChart("sp500_1980s.csv");
});

document.getElementById('load-data-1990').addEventListener('click', function() {
  drawChart("sp500_1990s.csv");
});

document.getElementById('load-data-2000').addEventListener('click', function() {
  drawChart("sp500_2000s.csv");
});
document.getElementById('load-data-2010').addEventListener('click', function() {
  drawChart("sp500_2010s.csv");
});
document.getElementById('load-data-2020').addEventListener('click', function() {
  drawChart("sp500_2020s.csv");
});

// Load the 1929 data by default
drawChart("sp500_1870s.csv");
