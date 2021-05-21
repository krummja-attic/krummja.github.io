<template>
    <div id="diagram-1">
        <canvas
            id="diagram" 
            ref="diagram"
            width="900px" 
            height="450px"
        />
    </div>
</template>

<script>
import * as d3 from "d3-delaunay";

export default {
    data () {
        const defaultExtent = {
            width: 900,
            height: 450,
        }
        return {
            defaultExtent
        }
    },
    mounted () {
        const diagram = document.getElementById('diagram-1');
        const points = this.generatePoints(200);
        this.handleInput(diagram, points);
        this.update(points);
    },
    methods: {
        handleInput(diagram, points) {
            const canvas = this.$refs.diagram;
            const ctx = canvas.getContext('2d');
            ctx.canvas.ontouchmove = ctx.canvas.onmousemove = event => {
                event.preventDefault();
                points[0] = [event.layerX, event.layerY - diagram.offsetTop];
                this.update(points);
            }
        },
        runif(lo, hi) {
            return lo + Math.random() * (hi - lo);
        },
        rnorm() {
            var x1 = 0;
            var x2 = 0;
            var w = 2.0;
            while (w >= 1) {
                x1 = this.runif(-1, 1);
                x2 = this.runif(-1, 1);
                w = x1 * x1 + x2 * x2;
            }
            w = Math.sqrt((-2 * Math.log(w)) / w);
            return x1 * w;
        },
        generatePoints(n, extent) {
            extent = extent || this.defaultExtent;
            var pts = [];
            for (let i = 0; i < n; i++) {
                pts.push([
                    (Math.random()) * extent.width,
                    (Math.random()) * extent.height
                ]);
            }
            return pts;
        },
        makeVoronoi(pts, extent) {
            extent = extent || this.defaultExtent;
            var w = extent.width;
            var h = extent.height;
            var delaunay = d3.Delaunay.from(pts);
            var voronoi = delaunay.voronoi([0, 0, w, h]);
            return { delaunay, voronoi };
        },
        update(points) {
            const canvas = this.$refs.diagram;
            const ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, this.defaultExtent.width, this.defaultExtent.height);
            ctx.beginPath();

            let vor = this.makeVoronoi(points);

            vor.delaunay.render(ctx);
            ctx.strokeStyle = "#ccc";
            ctx.stroke();

            ctx.beginPath();
            vor.voronoi.render(ctx);
            vor.voronoi.renderBounds(ctx);
            ctx.strokeStyle = "#000";
            ctx.stroke();

            ctx.beginPath();
            vor.delaunay.renderPoints(ctx);
            ctx.fill();
        }
    }
}
</script>

<style lang="scss" scoped>

</style>