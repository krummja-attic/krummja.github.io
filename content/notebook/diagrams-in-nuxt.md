---
title: Making Diagrams in Nuxt
description: An important want for my website is the ability to make interactive diagrams using D3.js. After struggling with figuring out how to make Nuxt's static generation play nice with input events, I finally have some working content to play with.
createdAt: 2021-05-20
growth: evergreen
tags: Programming, Javascript, Visualization
---

When I decided to redesign my website, I hummed and hawed for quite a while about what framework I wanted to write it in. Previously I had been using [Jekyll](https://jekyllrb.com/), which worked okay, but I wanted something a bit more modern and a bit more flexible than what Jekyll could offer me. I already had rudimentary knowledge of [Vue](https://vuejs.org/), and so you can imagine my delight when I came across [Nuxt](https://nuxtjs.org/). For the uninitiated, Nuxt is a Vue framework that allows for easy generation of static websites. You can write your site in Vue and then deploy it as a static site to, say, GitHub Pages.

The Nuxt framework is wonderful for, say, a blog where articles and posts can be written in Markdown. One desire I had for my new site, however, was the ability to make interactive and beautiful diagrams and figures, much in the style of [Amit Patel's fantastic blog](https://www.redblobgames.com/).[^1] Thankfully, Nuxt allows Vue components to be dropped directly into Markdown, which it will then render on the page. Initially I had some hang-ups with getting animations and mouse coordinates to work correctly, but in the end I got things working the way I like. In what follows, I will walk through the steps of setting up a simple page with an interactive component.

## Setting Up

To display simple graphics to the page, we can make a component (let's call it `MyDiagram.vue` for the sake of exposition) and place it in our `@/components` directory.[^2] We'll start with just a basic `<template>`, inside of which is our `<canvas>` object. I've initialized it with static width and height properties, but we'll change that in a moment.

```html
<template>
    <canvas id="canvas" width="200px" height="200px"/>
</template>
```

In your Markdown document, we can immediately drop our in component. One nice thing about using components in Markdown using Nuxt is that we don't have to import them from anywhere. We can just immediately reference them (with a couple of [important caveats](https://content.nuxtjs.org/writing/#vue-components)).

```markdown
---
title: Some Blog Post
---

<my-diagram></my-diagram>
```

The page should immediately update (assuming you're running in dev mode). Tada! It's absolutely nothing! Well, that's not completely true. You might notice the bottom of the page moved if you have some footer content, and if you inspect you will see that the canvas is now present in the DOM. Great! Let's make it interesting.

Head back over to the component, and just beneath your `<template>`, make your `<script>` with the following:

```javascript
export default {
    data () {
        const defaultExtent = { 
            width: 200, 
            height: 200 
        }
        const canvasExtent = { 
            width: `${defaultExtent.width}` + "px",
            height: `${defaultExtent.height}` + "px",
        }
        export { 
            defaultExtent, 
            canvasExtent,
        }
    }
}
```

We want to set up some basic data that we'll use frequently in the visualizations. First, we'll make a `defaultExtent` object that has `width` and `height` properties for use in the code. For our `<template>`, we can take this information and make a new `canvasExtent` object that has string representations of our dimension properties with pixel units. Export both of these so that we can access them.

Back in the `template`, update the `width` and `height` properties to reference our new `canvasExtent` object. Where before you had `width="200px"`, replace with `:width=canvasExtent.width` (note the `:` before the property name). Now, we can just update the `defaultExtent` object, and the diagram's dimensions will propagate throughout the rest of the component. Slick!

## Displaying Content

To get stuff actually displaying on the canvas, we'll have to grab a reference to our canvas somehow. There are a few different ways to do this, but I'll outline my preferred method.

First, add a couple of variables to the exported object in our `data()` hook:

```javascript
    props: {
        // ...
    },
    data() {
        // ...
        export { 
            defaultExtent, 
            canvasExtent,
            _canvas: null,
            _context: null,
        }
    }
```

Then, just beneath your `data()` hook, add a `mounted()` hook.

```javascript
    data() {
        // ...
    },
    mounted() {
        this._canvas = document.getElementById("canvas");
        this._context = this.diagram.getContext("2d");
    }
```

The `mounted` function is [one of Vue's lifecycle hooks](https://v3.vuejs.org/api/options-lifecycle-hooks.html#mounted). This function allows us to set up some data right as the element is actually created in Vue's virtual DOM. We can now refer to the canvas and its [rendering context](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) to make it display cool stuff.

To make sure everything works, let's try rendering something to the canvas. Just below the `mounted()` hook, add a `methods` field with an empty object. Then, make an `update()` function and call it inside `mounted()`. Finally, we'll add our rendering code by accessing the drawing functions of the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

```javascript
    mounted() {
        // ...
        this.update();
    },
    methods: {
        update() {
            this._ctx(0, 0, this.defaultExtent.width, this.defaultExtent.height);
            this._ctx.stroke();

            this._ctx.font = '50pt Arial';
            this._ctx.fillStyle = 'gray';
            this._ctx.strokeStyle = 'black';
            
            var x = 18
            var y = 70
            var text = 'Hello World!';
            this._ctx.fillText(text , x, y);
            this._ctx.strokeText(text, x, y);
        }
    }
```

Reload, and you should be greeted by something that looks like the following:

<diagrams-in-nuxt-1></diagrams-in-nuxt-1>

Slick! This is pretty cool in itself, and you can do a ton of neat stuff just playing around with the canvas. However, what I'm aiming for is *interactivity*, not just nice diagrams. So with that, let's move on to getting some user input and updating the canvas.

## Making it Interactive

For this portion of the tutorial, we're going to set up an interactive voronoi diagram. We'll use the `d3.js` library to do some of the heavy lifting for us, but we'll have to make some additional helper methods to seed the diagram with points.

To begin, we'll want to install `d3` and then import `d3-delaunay` at the top of our script.

```html
<script>
import * as d3 from "d3-delaunay";

export default {
    // ...
}
```

Next, we'll generate our points. Above the `update()` method, add a new method:

```js
    methods: {
        generatePoints(n) {
            var pts = [];
            for (let i = 0; i < n; i++) {
                pts.push([
                    Math.random() * this.defaultExtent.width,
                    Math.random() * this.defaultExtent.height,
                ]);
            }
            return pts;
        },
        update() {
            // ...
        }
    }
```

We'll call this function in the `mounted()` hook. Then, we'll want to modify `update()` so that we can pass the result into it. Finally, we'll make another method to actually generate the voronoi diagram inside `update()` using this points array:

```js
    mounted() {
        // ...
        const points = this.generatePoints(200);
        this.update(points);
    },
    methods: {
        generatePoints(n) {
            // ...
        },
        makeDiagram(points) {
            const width = this.defaultExtent.width;
            const height = this.defaultExtent.height;

            const delaunay = d3.Delaunay.from(points);
            const voronoi = delaunay.voronoi([0, 0, width, height]);

            return { delaunay, voronoi };
        },
        update(points) {
            // ...
            const diagram = this.makeDiagram(points);
            // ...
        }
    }
```

This passes our point array to the `Delaunay` object provided by `d3-delaunay`. It will do all the hard number crunching and hand back a usable structure. We'll then set up a voronoi diagram from this structure by passing in an array of coordinates, corresponding to the `x`, `y`, `width`, and `height` of the canvas. Rendering the diagram is now straightforward. Inside the the `update()` method, add the following:

```javascript
    methods: {
        // ...
        update(points) {
            // ...
            const diagram = this.makeDiagram(points);
            
            diagram.delaunay.render(this._context);
            this._context.strokeStyle = "#ccc";
            this._context.stroke();

            this._context.beginPath();
            diagram.voronoi.render(this._context);
            diagram.voronoi.renderBounds(this._context);
            this._context.strokeStyle = "#000";
            this._context.stroke();

            this._context.beginPath();
            diagram.delaunay.renderPoints(this._context);
            this._context.fill();
        }
    }
```

Save and reload, and you should now see something like the diagram below:

<diagrams-in-nuxt-2></diagrams-in-nuxt-2>

The last step is to add in the interactivity. For this, we'll make a simple event listener to detect when the mouse pointer enters the canvas. When this event is detected, we'll push a new point into our point array that tracks the mouse position. Finally, we'll run our `update()` method passing in the new point array. 

```javascript
    mounted() {
        // ...
        this.handleInput(points);
        this.update(points);
    },
    methods: {
        handleInput(points) {
            this._context.canvas.onmousemove = (event) => {
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
        // ...
    }
```

Note that when we grab the event coordinates, we have to do a bit of sorcery to get the correct values due to the way different browsers handle mouseover events. 

If you run this now, the diagram will work like we expect, except a bunch of weird lines will appear wherever the mouse moves. This is because we're manipulating our point array, but we're not actually making the canvas clear and re-draw with the modified array. To do this, we'll make one final small change to our `update()` method:

```javascript
    methods: {
        // ...
        update(points) {
            const width = this.defaultExtent.width;
            const height = this.defaultExtent.height;
            this._context.clearRect(0, 0, width, height);
            // ...
        }
    }
```

This will clear the entire canvas rect on each call of `update()`, essentially drawing a frame of our new animation. Save and reload, and then try moving the mouse around over the diagram.


<diagrams-in-nuxt-0></diagrams-in-nuxt-0>


[^1]: In fact, he has an [interactive tutorial on making interactive tutorials](https://www.redblobgames.com/making-of/line-drawing/) that I highly recommend.

[^2]: You may prefer to compartmentalize by placing these components in `@/components/global` instead.
