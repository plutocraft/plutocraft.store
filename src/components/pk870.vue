<template>
<div class="page"><div class="top"><div class="returnbutton"><router-link to="/">🠜 back</router-link></div>pk87.0</div>
<div class="p1">
  <div class="superheader">design without compromise</div>
  <img ref="p1photo" class="p1photo" src="@/assets/pk87.png"/>
  <div class="colorbuttons"><div class="red" @mouseover="shift('65')" @mouseout="shift('0')"></div><div class="green" @mouseover="shift('-180')" @mouseout="shift('0')"></div><div class="blue" @mouseover="shift('-50')" @mouseout="shift('0')"></div></div>
</div>
</div>
</template>
<script>
export default {
  name: "pk87-0",
  methods: {
    shift: function(color) {
      this.$refs.p1photo.style.filter=`hue-rotate(${color}deg)`
    }
  }
}
</script>
<style scoped>
.top {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  box-sizing: border-box;
  padding-right: 50px;
  padding-left: 50px;
  font-family: Circular;
  font-weight: bolder;
  font-size: 2em;
}
.returnbutton {
  user-select: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}
.returnbutton:hover{
  background: black;
  color: white;
}
.p1 {
  background-color: white;
  height: 95vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: black;
}
.p1photo {
  height: 40%;
  margin-bottom: 40px;
  transition: filter 2s ease;
}
.superheader {
  font-family: Circular;
  font-size: 5em;
  margin-bottom: 50px;
}
.colorbuttons {
  display: flex;
  flex-flow: row nowrap;
}
.colorbuttons > div {
  width: 50px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  height: 50px;
  border-radius: 50px;
  margin-right: 30px;
  border: 5px solid white;
  box-sizing: border-box;
  transition: all 0.1s ease;
}
.colorbuttons .green {
  background: #7bc043;
}
.colorbuttons .red {
  background: #ee4035;
}
.colorbuttons .blue {
  background: #0392cf;
}
.colorbuttons > div:hover {
  border: 10px solid white;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>