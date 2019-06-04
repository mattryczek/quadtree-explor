var color = d3.scaleLinear()
    .domain([0, 8])  // max depth of quadtree
    .range(["#efe", "#060"]);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var rect = svg.selectAll(".node")
    .data(nodes.nodes)
    .enter().append("rect")
    .attr("id", function(d) { return "node_"+d.c; })
    .attr("class", "node")
    .attr("x", function(d) { return d.x1; })
    .attr("y", function(d) { return d.y1; })
    .attr("width", function(d) { return d.x2 - d.x1; })
    .attr("height", function(d) { return d.y2 - d.y1; })
    .style("opacity",0);

var count=0;

var point = svg.selectAll(".point")
    .data(nodes.leaves)
    .enter().append("circle")
    .attr("class", function(d) { return "point "+d.classes; })
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", 3);

// PDS Collect a list of nodes to draw rectangles, adding extent and depth data
