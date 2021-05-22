<template>
    <canvas
        id="diagram" 
        ref="diagram"
        :width=canvasExtent.width
        :height=canvasExtent.height
    />
</template>

<script>
import * as d3 from "d3-delaunay";

export default {
    data () {
        const defaultExtent = {
            width: 900,
            height: 450,
        }

        const canvasExtent = {
            width: `${defaultExtent.width}` + "px",
            height: `${defaultExtent.height}` + "px",
        }

        return {
            defaultExtent,
            canvasExtent,
            _diagram: null,
            _ctx: null,
        }
    },
    mounted () {
        this._diagram = document.getElementById('diagram');
        this._ctx = this._diagram.getContext('2d');

        const points = this.generatePoints(200);
        
        this.handleInput(points);
        this.update(points);
    },
    methods: {
        handleInput(points) {
            // https://stackoverflow.com/a/10760593/15526907
            // https://stackoverflow.com/a/442474/15526907
            this._ctx.canvas.onmousemove = (event) => {
                event.preventDefault();

                let el = event.target;
                let rect = el.getBoundingClientRect();
                let x = event.clientX - rect.left, y = event.clientY - rect.top;

                x *= el.width / rect.width;
                y *= el.height / rect.height;

                points[0] = [x, y];
                this.update(points);
            }
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
            const w = extent.width;
            const h = extent.height;
            const delaunay = d3.Delaunay.from(pts);
            const voronoi = delaunay.voronoi([0, 0, w, h]);
            return { delaunay, voronoi };
        },
        update(points) {
            this._ctx.clearRect(0, 0, this.defaultExtent.width, this.defaultExtent.height);

            const vor = this.makeVoronoi(points);

            vor.delaunay.render(this._ctx);
            this._ctx.strokeStyle = "#ccc";
            this._ctx.stroke();

            this._ctx.beginPath();
            vor.voronoi.render(this._ctx);
            vor.voronoi.renderBounds(this._ctx);
            this._ctx.strokeStyle = "#000";
            this._ctx.stroke();

            this._ctx.beginPath();
            vor.delaunay.renderPoints(this._ctx);
            this._ctx.fill();
        }
    }
}
</script>

<style lang="scss" scoped>
#diagram {
    margin-top: 20px;
}
</style>
