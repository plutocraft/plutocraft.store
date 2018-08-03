<template>
<div ref="root" :class="this.switched ? 'active selectbox' : 'selectbox'" @click="switchstate"><span v-if="value===''">{{placeholder}}</span><span v-else><span ref="value" class="value">{{value}}</span> {{suffix}}</span>&nbsp;&#x21E1;<div class="options">
  <div @click="set('white', $event)" class="white option">white</div>
  <div @click="set('black', $event)" class="black option">black</div>
  <div @click="set('red', $event)" class="red option">red</div>
  <div @click="set('pink', $event)" class="pink option">pink</div>
<div @click="set('purple', $event)" class="purple option">purple</div>
<div @click="set('blue', $event)" class="blue option">blue</div>
<div @click="set('green', $event)" class="green option">green</div>
<div @click="set('orange', $event)" class="orange option">orange</div>
<div @click="set('yellow', $event)" class="yellow option">yellow</div>
</div></div>
</template>
<script>
function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node != null) {
    if (node == parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
export default {
  props: ["placeholder", "suffix"],
  name: "Select",
  data: function() {
    return {
      switched: false,
      value: ""
    };
  },
  methods: {
    switchstate: function(event) {
      if (!this.switched) {
        this.switched = !this.switched;
        console.log("switch");
      }
    },
    set: function(value, event) {
      event.stopPropagation();
      this.value = value;
      setTimeout(
        function() {
          this.$refs.value.className = `${value} value hmm`;
        }.bind(this),
        10
      );
      this.switched = false;
    }
  },
  mounted: function() {
    document.addEventListener(
      "click",
      function(event) {
        if (
          this.switched &&
          !isDescendant(this.$refs.root, event.target) &&
          event.target !== this.$refs.root
        ) {
          console.log("outsideclose");
          this.switched = false;
          this.value = "";
          this.$refs.value.className = "value";
        }
      }.bind(this)
    );
  }
};
</script>
<style scoped>
.selectbox {
  font-size: 1.3em;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  user-select: none;
  width: 162px;
  background: black;
}
.options {
  bottom: 0;
  background: white;
  width: 100%;
  position: absolute;
  right: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.15s ease-in-out;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-flow: column nowrap;
}
.active.selectbox .options {
  height: 315px;
}
.red {
  background: #f3040f;
  color: white;
}
.pink {
  background: #ab2664;
  color: white;
}
.orange {
  background: #f99000;
  color: white;
}
.yellow {
  background: #f8c441;
  color: white;
}
.green {
  background: #365834;
  color: white;
}
.blue {
  background: #4285f0;
  color: white;
}
.purple {
  background: #a52dae;
  color: white;
}
.white {
  background: white;
  color: black;
}
.black {
  background: black;
  color: white;
}
.option {
  width: 100%;
  text-align: center;
  padding: 7.5px;
  box-sizing: border-box;
}
.value.hmm {
  padding: 2px;
}
</style>