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
  switch(dataFile) {
    case "SP500_1987_2.csv":
        title = "S&P 500 - 1987";
        summary = "The stock market crash of 1987, often referred to as 'Black Monday,' occurred on October 19, 1987. On this day, stock markets around the world crashed, shedding a huge value in a very short time. The S&P 500 fell by 20.4%, its largest one-day percentage drop in history.";
        break;
    case "DOW_1929.csv":
        title = "S&P 500 - 1929";
        summary = "The stock market crash of 1929, also known as the Great Crash, began on October 24, known as 'Black Thursday.' This was the most devastating stock market crash in the history of the United States, signaling the beginning of the 10-year Great Depression. Over the course of four days, the S&P 500 index fell dramatically.";
        break;
    case "SP500_2008_2.csv":
        title = "S&P 500 - 2008";
        summary = "The 2008 financial crisis, also known as the Global Financial Crisis (GFC), is considered by many economists to have been the most serious financial crisis since the Great Depression of the 1930s. The S&P 500 experienced one of its largest drops in history, falling by more than 8.8% on September 29, 2008.";
        break;
    case "sp500_1870s.csv":
        title = "S&P 500 - 1870s";
        summary = "This decade was marked by the Long Depression, which started with the Panic of 1873 and lasted until 1879. The depression was triggered by the collapse of banking firms in Europe and quickly spread to the U.S. Despite this economic downturn, it was a period of significant industrial growth and expansion of railroads in the U.S., with the transcontinental railroad completed in 1869.";
        break;
    case "sp500_1880s.csv":
        title = "S&P 500 - 1880s";
        summary = "The economy recovered from the Long Depression during this decade, leading to a period of economic growth. However, there were periods of economic instability and minor recessions. The growth of industries such as steel and railroads continued, and the period also saw the rise of new industries such as electrical power.";
        break;
    case "sp500_1890s.csv":
        title = "S&P 500 - 1890s";
        summary = "This decade was marked by the Panic of 1893, which led to a severe economic depression. The panic was triggered by the collapse of railroad overbuilding and shaky railroad financing, which set off a series of bank failures. The economy started to recover towards the end of the decade.";
        break;
    case "sp500_1900s.csv":
        title = "S&P 500 - 1900s";
        summary = "The early part of this decade saw economic growth, but the Panic of 1907 led to a significant economic downturn. The panic was triggered by a failed attempt to corner the market on stock of the United Copper Company. This led to a run on banks and a subsequent liquidity crisis.";
        break;
    case "sp500_1910s.csv":
        title = "S&P 500 - 1910s";
        summary = "This decade was marked by World War I and significant economic volatility. The economy boomed during the war due to increased production for the war effort, but went into a recession after the war ended as the economy adjusted to a peacetime footing.";
        break;
    case "sp500_1920s.csv":
        title = "S&P 500 - 1920s";
        summary = "Known as the Roaring Twenties, this was a period of significant economic growth and stock market activity, driven by factors such as the automobile industry, easy access to credit, and increased consumer spending. However, the decade ended with the stock market crash of 1929, which signaled the start of the Great Depression.";
        break;
    case "sp500_1930s.csv":
        title = "S&P 500 - 1930s";
        summary = "The Great Depression of the 1930s led to a significant downturn in the economy and the stock market. Unemployment rose to 25% and international trade collapsed. The market started to recover in the late 1930s as the economy was stimulated by the increased production for World War II.";
        break;
    case "sp500_1940s.csv":
        title = "S&P 500 - 1940s";
        summary = "World War II in the early part of this decade led to periods of economic volatility. The post-war period saw a recovery in the economy and the stock market, driven by factors such as increased consumer spending and the baby boom.";
        break;
    case "sp500_1950s.csv":
        title = "S&P 500 - 1950s";
        summary = "The post-war period was marked by significant economic growth and a bull market. The economy benefited from factors such as the baby boom, the growth of the suburbs, and increased consumer spending on new products and technologies.";
        break;
    case "sp500_1960s.csv":
        title = "S&P 500 - 1960s";
        summary = "This decade saw continued economic growth, although there were periods of economic instability towards the end of the decade, including a credit crunch and a mild recession. The economy was also affected by increased government spending on the Vietnam War.";
        break;
    case "sp500_1970s.csv":
        title = "S&P 500 - 1970s";
        summary = "This decade was marked by periods of economic stagnation and inflation, leading to relatively poor stock market performance. The economy was affected by factors such as the 1973 oil crisis, high inflation, and high unemployment.";
        break;
    case "sp500_1980s.csv":
        title = "S&P 500 - 1980s";
        summary = "The early 1980s were marked by a significant recession, but the latter part of the decade saw a strong bull market, despite the Black Monday crash in 1987. The economy benefited from factors such as tax cuts, deregulation, and increased consumer spending.";
        break;
    case "sp500_1990s.csv":
        title = "S&P 500 - 1990s";
        summary = "This decade was marked by significant economic growth and a strong bull market, driven in part by the tech boom and the growth of the internet. The economy also benefited from low inflation and low unemployment.";
        break;
    case "sp500_2000s.csv":
        title = "S&P 500 - 2000s";
        summary = "The early 2000s were marked by the dot-com crash and a subsequent recession. The latter part of the decade saw the Global Financial Crisis of 2008, triggered by the collapse of the subprime mortgage market, leading to a significant downturn in the stock market.";
        break;
    case "sp500_2010s.csv":
        title = "S&P 500 - 2010s";
        summary = "The market recovered from the 2008 financial crisis during this decade, with the stock market reaching new highs. This was one of the longest bull markets in history, driven by factors such as low interest rates, technological innovation, and economic recovery.";
        break;
    case "sp500_2020s.csv":
        title = "S&P 500 - 2020s";
        summary = "The start of this decade was marked by the COVID-19 pandemic, which led to a significant but short-lived downturn in the market in early 2020. The market recovered quickly, however, and the stock market reached new highs, driven by factors such as government stimulus measures and the development of COVID-19 vaccines.";
        break;
    default:
        title = "";
        summary = "";
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

    d3.select("#chart-summary").text(summary);

  }).catch(function(error){
    console.log(error);
  });
}

// Create buttons for each decade and crash
document.getElementById('load-data-1929').addEventListener('click', function() {
  drawChart("sp500_1929.csv");
});

document.getElementById('load-data-1987').addEventListener('click', function() {
  drawChart("SP500_1987_2.csv");
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

// Load the 1870s data by default
drawChart("sp500_1870s.csv");
