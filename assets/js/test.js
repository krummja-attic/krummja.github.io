const scale = 22;
let root = d3.select("div#js-tests");

root.append("svg")
    .attr('width', 25*scale)
    .attr('height', 10*scale);

for (let x = 0; x < 25; x++) {
    for (let y = 0; y < 10; y++) {
        root.append('rect')
            .attr('transform', `translate(${x*scale}, ${y*scale})`)
            .attr('width', scale)
            .attr('height', scale)
            .attr('fill', "white")
            .attr('stroke', "gray");
    }
}
