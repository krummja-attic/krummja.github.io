<template>
  <div :id="'gloss-'+idx" class="gloss-block">
    <span class="exno">({{ this.idx }})</span>
    <table :id="'table-'+idx"></table>
    <span id="gla" class="gla"><slot name="gla"></slot></span>
    <span id="glb" class="glb"><slot name="glb"></slot></span>
    <div id="glft" class="glft"><slot name="glft"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    idx: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      _gla: null,
      _glb: null,
      _glft: null,
    }
  },
  mounted () {
    this._gla = document.getElementById("gla");
    this._glb = document.getElementById("glb");
    this._glft = document.getElementById("glft");
    
    gla = this._gla.innerText.split(" ");
    glb = this._glb.innerText.split(" ");
    this.generateTable(gla, glb);
    this.cleanUp();


  },
  methods: {
    generateTable(gla, glb) {
      let table = document.getElementById("table-" + this.idx);
      let rowA = table.insertRow();
      let rowB = table.insertRow();

      for (let i = 0; i < gla.length; i++) {
        let cell = rowA.insertCell();
        let text = document.createTextNode(gla[i]);
        cell.appendChild(text);
        cell.style.paddingRight = "10px";
        cell.style.fontFamily = "'Merriweather', serif";
        cell.style.fontStyle = "italic";
      }

      for (let i = 0; i < glb.length; i++) {
        let cell = rowB.insertCell();
        let text = document.createTextNode(glb[i]);
        cell.appendChild(text);
        cell.style.paddingRight = "10px";
        cell.style.fontFamily = "'Merriweather', serif";
        cell.style.fontStyle = "normal";
      }
    },
    cleanUp() {
      this._gla.remove();
      this._glb.remove();
    }
  }
}
</script>

<style lang="scss" scoped>
#glft {
  &::before {
    content: "'";
  }
  &::after {
    content: "'";
  }
}

.exno {
  position: relative;
  left: -40px;
  top: 25px;
}

.glft {
  margin-top: 12px;
}
</style>
