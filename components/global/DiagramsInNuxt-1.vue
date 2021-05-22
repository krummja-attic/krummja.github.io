<template>
    <canvas
        id="diagram-1" 
        :width=canvasExtent.width
        :height=canvasExtent.height
    />
</template>

<script>
export default {
    data () {
        const defaultExtent = {
            width: 400,
            height: 100,
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
        this._diagram = document.getElementById('diagram-1');
        this._ctx = this._diagram.getContext('2d');
        this.update();
    },
    methods: {
        update() {
            // this._ctx.clearRect(0, 0, this.defaultExtent.width, this.defaultExtent.height);
            
            // this._ctx.beginPath();
            this._ctx.rect(0, 0, this.defaultExtent.width, this.defaultExtent.height);
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
}
</script>

<style lang="scss" scoped>
#diagram-1 {
    margin-top: 20px;
}
</style>
