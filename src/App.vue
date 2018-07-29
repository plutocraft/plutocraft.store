<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  margin: 0;
  background: black;
  box-sizing: border-box;
}
#app {
  font-size: 12px;
  text-rendering: geometricPrecision;
  color: white;
}
@font-face {
  font-family: Circular;
  src: url("assets/lineto-circular-black.woff");
  font-weight: bolder;
}
.flex {
  display: flex;
}
.flex.center {
  justify-content: center;
  align-items: center;
}
</style>
