d3.csv('DOW_1929.csv').then(data => {
  data.forEach(d => {
    d.date = new Date(d.date);
    d.value = +d.value;
    d.norm = d.value / data[0].value;
  });

  const svgWidth = 500, svgHeight = 300;
  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const width = svgWidth - margin.left - margin.right;
  const height = svgHeight - margin.top - margin.bottom;

  const svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  const g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const x = d3.scaleTime()
    .rangeRound([0, width])
    .domain(d3.extent(data, d => d.date));

  const y = d3.scaleLinear()
    .rangeRound([height, 0])
    .domain([0, d3.max(data, d => d.norm)]);

  const line = d3.line()
    .x(d => x(d.date))
    .y(d => y(d.norm));

  g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  g.append("g")
    .call(d3.axisLeft(y))
    .append("text")
    .attr("fill", "#000")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end")
    .text("Normalized Close Value");

  g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 1.5)
    .attr("d", line);
});