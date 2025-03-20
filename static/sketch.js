// sketch.js

document.addEventListener("DOMContentLoaded", function() {
    const width = 600;
    const height = 400;

    const svg = d3.select("#chart")
                  .append("svg")
                  .attr("width", width)
                  .attr("height", height);

    svg.append("circle")
       .attr("cx", width / 2)
       .attr("cy", height / 2)
       .attr("r", 50)
       .style("fill", "blue");
});
