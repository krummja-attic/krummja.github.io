<template>
    <canvas class="diagram-component" ref="diagram" :id="'diagram-'+id" /> 
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            default: 0
        },
        canvas: {
            type: Object,
            default: null,
        },
        context: {
            type: Object,
            default: null,
        },
    },
    data () {
        return {
            _canvas: this.canvas,
            _context: this.context,
        }
    },
    mounted () {
        console.log(this.$refs);
        this._canvas = document.getElementById('diagram-'+this.id);
        this._context = this._canvas.getContext('2d');
        // additional setup
    },
    methods: {
        // ...
    }
}
</script>
