<template>
<div class="page"><div class="top"><div class="returnbutton"><router-link to="/">🠜 back</router-link></div>pk87.0</div>
<div class="p1">
  <div class="superheader">design without compromise</div>
  <img ref="p1photo" class="p1photo" src="@/assets/pk87.png"/>
  <div class="colorbuttons"><div class="red" @mouseover="shift('65')" @mouseout="shift('0')"></div><div class="green" @mouseover="shift('-180')" @mouseout="shift('0')"></div><div class="blue" @mouseover="shift('-50')" @mouseout="shift('0')"></div></div>
</div>
<div class="p2">
  <div class="superheader">premium materials</div>
  <img ref="p2photo" class="p2photo" src="@/assets/pk87_2.png"/>
  <div class="p2desc">precision machined aerospace-grade aluminum<br/>bead blasted, hand-polished, and PVD coated to a perfect finish<br/>brass weight for ultimate acoustics and stability</div>
</div>
<div class="p3">
  <div class="superheader">painstakingly engineered illumination</div>
  <img class="brass" src="@/assets/pk87_3_2.png"/>
  <img class="p3photo" src="@/assets/pk87_3.png"/>
  <div class="p3desc">three programmable gradient diffusers<br/>per key individually addressable fast-refresh lighting<br/>more than 16m colors per point</div>
</div>
<div class="p4">
  <div class="superheader">8&deg; slant for optimal ergonomics</div>
  <img class="p3photo" src="@/assets/slant.png"/>
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
@keyframes shift {
  0% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(-360deg);
  }
}
@keyframes shiftinv {
  0% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(360deg);
  }
}
.top {
  position: fixed;
  top: 0;
  z-index: 10000;
  width: 100%;
  background: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  box-sizing: border-box;
  padding-right: 5vh;
  padding-left: 5vh;
  font-family: Circular;
  font-weight: bolder;
  font-size: 2.5vh;
}
.returnbutton {
  user-select: none;
  cursor: pointer;
  padding: 1vh;
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
.p2desc {
  background-color: black;
  display: flex;
  justify-content: flex-start;
  font-size: 2.5vh;
  font-family: Circular;
  padding: 1vh;
  line-height: 1.4;
}
.p3desc {
  background: white;
  display: flex;
  color: black;
  justify-content: flex-start;
  font-size: 2.5vh;
  font-family: Circular;
  padding: 1vh;
  line-height: 1.4;
}
.p2 {
  height: 95vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-image: url('../assets/cross.svg');
  background-size: 1vh;
  background-color: white;
  background-blend-mode: difference;
}
.p3 {
  height: 95vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-image: url('../assets/pk3wall.svg');
  background-size: 100% auto;
  animation: 60s shift infinite;
}
.p4 {
  height: 95vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: white;
}
.p3photo {
  height: 50vh;
  margin-bottom: 5vh;
}
.p2 .superheader {
  background: black;
  padding: 0.5vh;
}
.p3 .superheader {
  background:  white;
  color: black;
  padding: 0.5vh;
}
.p1photo {
  height: 40vh;
  margin-bottom: 4vh;
  transition: filter 2s ease;
}
.p2photo {
  height: 40vh;
  margin-bottom: 5vh;
  transition: filter 2s ease;
}
.superheader {
  font-family: Circular;
  font-size: 6vh;
  margin-bottom: 5vh;
}
.colorbuttons {
  display: flex;
  flex-flow: row nowrap;
}
.colorbuttons > div {
  width: 5vh;
  box-shadow: 0 1vh 2vh rgba(0,0,0,0.19), 0 0.6vh 0.6vh rgba(0,0,0,0.23);
  height: 5vh;
  border-radius: 5vh;
  margin-right: 3vh;
  border: 0.5vh solid white;
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
  border: 1vh solid white;
}
a {
  text-decoration: none;
  color: inherit;
}
.brass {
  height: 50vh;
  margin-bottom: 5vh;
  position: absolute;
  margin-top: -1.9vh;
  animation: shiftinv 60s infinite;
}
</style>