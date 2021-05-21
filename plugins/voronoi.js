import * as del from "d3-delaunay";
import Vue from 'vue';

Vue.mixin({
    // data () {
    //     const defaultExtent = {
    //         width: 900,
    //         height: 450,
    //     }
    //     return {
    //         defaultExtent
    //     }
    // },
    methods: {
    //     runif(lo, hi) 
    //     {
    //         return lo + Math.random() * (hi - lo);
    //     },
    //     rnorm() 
    //     {
    //         var x1 = 0;
    //         var x2 = 0;
    //         var w = 2.0;
    //         while (w >= 1) {
    //             x1 = this.runif(-1, 1);
    //             x2 = this.runif(-1, 1);
    //             w = x1 * x1 + x2 * x2;
    //         }
    //         w = Math.sqrt((-2 * Math.log(w)) / w);
    //         return x1 * w;
    //     },
    //     generatePoints(n, extent) 
    //     {
    //         extent = extent || this.defaultExtent;
    //         var pts = [];
    //         for (let i = 0; i < n; i++) {
    //             pts.push([
    //                 (Math.random()) * extent.width,
    //                 (Math.random()) * extent.height
    //             ]);
    //         }
    //         return pts;
    //     },
    //     makeVoronoi(pts, extent) 
    //     {
    //         extent = extent || this.defaultExtent;
    //         var w = extent.width;
    //         var h = extent.height;
    //         var delaunay = del.Delaunay.from(pts);
    //         var voronoi = delaunay.voronoi([0, 0, w, h]);
    //         return { delaunay, voronoi };
    //     }
    }
})
