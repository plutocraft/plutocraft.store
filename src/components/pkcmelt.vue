<template>
<div :class="loadedb ? 'page' : 'fixed page'" v-images-loaded="loaded"><div :class="loadedb ? 'loader' : 'hidden loader'">loading...</div><div class="top"><div class="returnbutton"><router-link to="/">back</router-link></div>pkc.melt</div>
<div class="p1">
    <div class="photos"><img class="mainphoto" src="@/assets/melt3.png"/><img class="mainphoto" src="@/assets/melt4.png"/><img class="mainphoto" src="@/assets/melt7.png"/></div>
    <div class="info"><div class="infobody"><div class="infoheader">pkc.melt</div><div class="scrollbody"><div class="scrollcontents">
<p>each and every unit produced is unique</p>
<p>this product is designed in an advanced virtual fluid simulation workspace, then each cap is manufactured as a one-off using selective laser sintering technology</p>
<p>SLS, a cutting-edge manufacturing technique, uses a plastic powder that is melted together by a precise high-energy laser beam to produce smooth, accurate, and detailed results</p>
<p>pkc.melt is compatible with MX-style cruciform stems but if sufficient interest is shown we may consider producing variations compatible with Alps or Topre switches</p>
<p><strong>please note:</strong> the colors shown may not be entirely accurate to real life. due to the nature of the SLS process, only certain colors of plastic powder are available and at this time it is impractical to produce stock entirely for the purpose of a short-run hobbyist product. this also means no color-matching is possible with Pantone, etc. swatches or other existing plastics products. however, upon request it may be possible to provide precise pantone swatches for those fixed colors that are in fact available.</p>
</div></div></div><div class="controls"><div class="price">$45</div><span><Select placeholder="select a melt color" suffix="melt"></Select><Select placeholder="select a base color" suffix="base"></Select><div class="buybutton">buy now</div></span></div></div>
</div>
<div class="mobilecontrols"><div class="price">$45</div><span><Select placeholder="melt color" suffix="melt"></Select><Select placeholder="base color" suffix="base"></Select><div class="buybutton">buy now</div></span></div>
</div>
</template>
<script>
import imagesLoaded from "vue-images-loaded";
import Select from "@/components/controls/Select.vue";

export default {
  name: "pk87-0",
  components: { Select },
  directives: {
    imagesLoaded
  },
  data: function() {
    return {
      switched: true,
      loadedb: false
    };
  },
  methods: {
    loaded: function() {
      this.loadedb = true;
    }
  }
};
</script>
<style scoped>
.page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  position: relative;
  box-sizing: border-box;
}
.scrollbody {
  height: calc(100% - 80px);
  overflow-y: auto;
  margin-top: -1em;
  padding-right: 1em;
}
.scrollbody::-webkit-scrollbar {
  width: 2px;
}
.scrollbody::-webkit-scrollbar-thumb {
  background-color: white;
}
.scrollcontents {
  margin-bottom: 1.5em;
}
.mainphoto {
  max-height: 30%;
}
.info {
  background: black;
  font-family: Circular;
  flex-grow: 1;
  height: 100%;
  position: relative;
  padding: 50px;
  margin-left: 50px;
  box-sizing: border-box;
  padding-bottom: 129px;
}
.infoheader {
  font-size: 4em;
  margin-bottom: 20px;
}
.infobody {
  font-size: 1.2em;
  height: 100%;
  line-height: 1.4;
}
.photos {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  flex-flow: column nowrap;
}
.p1 {
  height: 100%;
  max-height: 800px;
  box-sizing: border-box;
  width: 100vw;
  max-width: 1100px;
  margin-right: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 20px;
  padding: 50px;
  overflow: hidden;
  position: relative;
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
.returnbutton:hover {
  background: black;
  color: white;
}
a {
  text-decoration: none;
  color: inherit;
}
.controls {
  padding: 50px;
  padding-right: 0;
  padding-left: 0;
  padding-top: 25px;
  border-top: 2px solid white;
  box-sizing: border-box;
  margin-left: 50px;
  margin-right: 50px;
  width: calc(100% - 100px);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  right: 0;
  position: absolute;
  background: black;
}
.controls span {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.price {
  font-size: 3.5em;
}
.buybutton {
  font-size: 1.5em;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  user-select: none;
  cursor: pointer;
  margin-left: 15px;
  transition: all 0.3s ease;
}
.buybutton:hover {
  background: white;
  color: black;
}
.selectbox {
  margin-right: 15px;
}
.mobilecontrols {
  display: none;
}
@media screen and (max-width: 1020px) {
  .p1 {
    flex-flow: column nowrap;
  }
  .photos {
    flex-flow: row nowrap;
  }
  .mainphoto {
    max-height: none;
    max-width: 30%;
  }
  .info {
    height: auto;
    padding-bottom: 50px;
    margin: 0;
    margin-bottom: 80px;
  }
  .p1 {
    padding: 0;
    margin: 0;
    display: block;
    overflow: visible;
  }
  .photos {
    height: auto;
    margin-bottom: 50px;
    margin-top: 100px;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
  }
  .page {
    display: block;
  }
  .controls {
    display: none;
  }
  .mobilecontrols {
    display: flex;
    position: fixed;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: white;
    font-family: Circular;
    color: black;
    padding: 20px;
    box-sizing: border-box;
  }
  .selectbox {
    background: white !important;
    width: auto !important;
    padding: 0 !important;
    font-size: 1.1em !important;
    margin-right: 2px;
  }
  .mobilecontrols span {
    min-width: 70%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }
  .buybutton {
    border-color: black;
    padding: 10px;
    font-size: 1.1em;
    margin-left: 2.5px;
  }
  .price {
    font-size: 2.2em;
  }
  .buybutton:hover {
    color: white;
    background: black;
  }
  .active.selectbox .options {
    height: 288px !important;
    margin-bottom: -8px !important;
  }
}
</style>