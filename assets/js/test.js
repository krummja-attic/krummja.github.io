const scale = 22;

let root = d3.select("div#js-tests").attr('display', 'flex');

root.append("svg")
    .attr('width', 25*scale)
    .attr('height', 10*scale);

let svg = d3.select("div#js-tests svg")

for (let x = 0; x < 25; x++) {
    for (let y = 0; y < 10; y++) {
        svg.append('rect')
           .attr('transform', `translate(${x*scale}, ${y*scale})`)
           .attr('width', scale)
           .attr('height', scale)
           .attr('fill', "white")
           .attr('stroke', "gray");
    }
}

let A = {x: 2, y: 2}, B = {x: 20, y: 8};
let gPoints = svg.append('g');

let N = Math.max(Math.abs(A.x - B.x), Math.abs(A.y - B.y));
for (let i = 0; i <= N; i++) {
    let t = i / N;
    let x = Math.round(A.x + (B.x - A.x) * t);
    let y = Math.round(A.y + (B.y - A.y) * t);
    svg.append('rect')
       .attr('transform', `translate(${x*scale}, ${y*scale})`)
       .attr('width', scale-1)
       .attr('height', scale-1)
       .attr('fill', "hsl(0,40%,70%)");
}

function pointsOnLine(P, Q)
{
    let points = [];
    let N = Math.max(Math.abs(P.x-Q.x), Math.abs(P.y-Q.y));
    for (let i = 0; i <= N; i++) {
        let t = i / N;
        let x = Math.round(P.x + (Q.x - P.x) * t);
        let y = Math.round(P.y + (Q.y - P.y) * t);
        points.push({x: x, y: y});
    }
    return points;
}

function redraw()
{
    let rects = gPoints.selectAll('rect').data(pointsOnLine(A, B));
    rects.exit().remove();
    rects.enter().append('rect')
        .attr('width', scale-1)
        .attr('height', scale-1)
        .attr('fill', "hsl(0,40%,70%)")
        .merge(rects)
        .attr('transform', (p) => `translate(${p.x*scale}, ${p.y*scale})`);
}

function makeDraggableCircle(point)
{
    let circle = svg.append('circle')
        .attr('class', "draggable")
        .attr('r', scale*0.75)
        .attr('fill', "hsl(0,50%,50%)")
        .call(d3.drag().on('drag', onDrag));

    function updatePosition()
    {
        circle.attr('transform',
                    `translate(${(point.x+0.5)*scale} ${(point.y+0.5)*scale})`);
    }

    function onDrag()
    {
        point.x = Math.floor(d3.event.x / scale);
        point.y = Math.floor(d3.event.y / scale);
        updatePosition();
        redraw();
    }

    updatePosition();
}

makeDraggableCircle(A);
makeDraggableCircle(B);
redraw();
