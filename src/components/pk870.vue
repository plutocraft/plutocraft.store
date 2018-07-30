<template>
<div :class="loadedb ? 'page' : 'fixed page'" v-images-loaded="loaded"><div :class="loadedb ? 'loader' : 'hidden loader'">loading...</div><div class="top"><div class="returnbutton"><router-link to="/">back</router-link></div>pk87.0</div>
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
<div :class="switched ? 'dark p4' : 'p4'">
  <div class="superheader">8&deg; slant for optimal ergonomics</div>
  <img class="p4photo" src="@/assets/slant.png"/>
  <img class="p4black" src="@/assets/blackslant.png"/>
  <div class="colorbuttons"><div class="switch" @click="switcher" ></div></div>
</div>
<div class="p5">
  <div class="halfbg"></div>
  <div class="superheader">4.5mm integrated plate</div>
  <div class="lolplates">
  <div class="plates">
  <img class="p5photo" src="@/assets/plateblack.png"/>
  </div>
  </div>
  <div class="p5desc">structurally unified design<br/>fixed ANSI layout<br/>switchtop removal</div>
</div>
<div class="p6">
  <div class="superheader">specifications</div>
  <div class="inforows">
    <p><span class="left">layout</span><span class="right">87-key ANSI tenkeyless</span></p>
    <p><span class="left">slant</span><span class="right">8&deg;</span></p>
    <p><span class="left">materials</span><span class="right">aluminum, brass, acrylic</span></p>
    <p><span class="left">case colors</span><span class="right">black, white</span></p>
    <p><span class="left">PCB</span><span class="right">per-key RGB, hot-swap, QMK support</span></p>
    <p><span class="left">dimensions</span><span class="right">38 cm x 14 cm x 5cm at rear</span></p>
  </div>
</div>
<div class="p7">
  <div class="superheader">sign up to hear more about pk87.0 and future plutocraft projects</div>
  <p class="signup"><span class="right"><!-- Begin MailChimp Signup Form -->
<div id="mc_embed_signup">
<form action="https://plutocraft.us18.list-manage.com/subscribe/post?u=374f0bcf3fefd8dcd821e9dbe&amp;id=c55f1c387e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	
<div class="mc-field-group">
	<label for="mce-EMAIL"></label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_374f0bcf3fefd8dcd821e9dbe_c55f1c387e" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>

<!--End mc_embed_signup--> 
</span></p>
</div>
</div>
</template>
<script>
import imagesLoaded from 'vue-images-loaded'
export default {
  name: "pk87-0",
  directives: {
    imagesLoaded
  },
  data: function() {
    return {
      switched: true,
      loadedb: false
    }
  },
  methods: {
    shift: function(color) {
      this.$refs.p1photo.style.filter=`hue-rotate(${color}deg)`
    },
    switcher: function() {
      this.switched = !this.switched
    },
    loaded: function() {
      this.loadedb = true
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
.loader {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: -100vh;
  left: 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-family: Circular;
  font-size: 5vh;
  z-index: 100000;
  transition: 0.3s top ease;
}
.loader.hidden {
  top: 0;
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
.page.fixed {
  overflow: hidden;
  height: 100vh;
  position: fixed;
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
.p5desc {
  display: flex;
  justify-content: flex-start;
  font-size: 2.5vh;
  color: black;
  z-index: 1000;
  padding: 1vh;
  font-family: Circular;
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
  color: black;
  background: white;
  transition: background-color 0.3s ease;
}
.p5 {
  height: 95vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #eeeeee;
  position: relative;
  background-image: url('../assets/cross.svg');
  background-size: 0.51vh;
  background-blend-mode: difference;
}
.p6 {
  height: 95vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
}
.p7 {
  height: 40vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: white;
}
.p7 .superheader {
  font-size: 3vh;
  margin-bottom: 1vh;
}
.p5 .superheader {
  padding: 1vh;
  color: black;
  z-index: 1000;
}
.dark.p4 {
  background: black;
}
.p3photo {
  height: 50vh;
  margin-bottom: 5vh;
}
.p4photo {
  height: 30vh;
  margin-bottom: 5vh;
  transition: opacity 0.3s ease;
  opacity: 0;
}
.p5photo {
  height:40vh;
}
.p5photo:not(:first-child) {
  margin-top: -15vh;
}
.plates {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column nowrap;
}
.lolplates {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  flex-flow: column nowrap;
  margin-bottom: 5vh;
}
.halfbg {
  background: white;
  position: absolute;
  height: 47.78vh;
  width: 100vw;
  top: 0;
  right: 0;
}
.p4black {
  height: 30vh;
  margin-bottom: 5vh;
  margin-top: -2.3vh;
  position: absolute;
  opacity: 1;
  transition: opacity 0.3s ease;
}
.p4.dark .p4black {
  opacity: 0;
}
.p4.dark .p4photo {
  opacity: 1;
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
.p4 .superheader {
  transform:rotate(-7.91deg);
  margin-left: -6vh;
  margin-bottom: -2vh;
  transition: color 0.3s ease;
}
.dark.p4 .superheader {
  color: white;
}
.p1photo {
  height: 40vh;
  margin-bottom: 4vh;
  transition: filter 0.3s ease;
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
  box-shadow: 0 0.3vh 0.6vh rgba(0,0,0,0.16), 0 0.3vh 0.6vh rgba(0,0,0,0.23);
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
  border-width: 1vh;
}
div.switch {
  transition: all 0.3s ease;
  background: white;
  border-color: black;
}
.dark.p4 .colorbuttons .switch {
  background: black;
  border-color: white;
}
a {
  text-decoration: none;
  color: inherit;
}
.brass {
  height: 50vh;
  margin-bottom: 5vh;
  position: absolute;
  margin-top: -2vh;
  animation: shiftinv 60s infinite;
}
.inforows {
  width: 100vw;
  font-family: Circular;
  font-size: 3vh;
  max-width: 70vh;
  padding-left: 2vh;
  padding-right: 2vh;
  box-sizing: border-box;
  margin-top: -3vh;
}
.inforows p {
  display: flex;
  justify-content: space-between;
  border-top: 0.1vh solid white;
  padding-top: 2.7vh;
}
.signup {
  display: flex;
  justify-content: space-between;
  border-top: 0.1vh solid white;
  padding-top: 2.7vh;
  font-family: Circular;
}
.inforows p:first-child {
  border-top: none;
}
input {
  background: black;
  outline: none;
  border: none;
  color: white;
  padding: 1vh;
  font-family: Circular;
}
#mc_embed_signup {
  width: 35vh;
}
#mc_embed_signup_scroll {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-flow: row nowrap;
}
input[type="email"] {
  width: 100%;
  border: 0.1vh solid black;
  border-right: none;
  border-left: none;
  box-sizing: border-box;
}
form {
  display: inline-block;
  width: 100%;
}
.mc-field-group {
  display: inline-block;
  width: 100%;
}
input[type="submit"] {
  background: white;
  color: black;
  border: 0.1vh solid black;
  border-left: none;
  padding-top: 1vh;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
input[type="submit"]:hover {
  color: white;
  background: black;
}
</style>