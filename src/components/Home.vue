<template>
  <div class="flex center hero">
    <img @click="home" class="wordmark" src="@/assets/logo.svg"/>
    <div class="title">(store)</div>
    <div class="products">
      <!--<div class="product">
        <div class="name">
          <span>pkc.melt
            <div class="description">procedurally modelled artisan keycap
            </div>
          </span>
        <router-link to="/pkc.melt"><div class="morebutton">store page</div></router-link>
        </div>
        <div class="photowrap">
        <img src="@/assets/melt3_lowres.png" class="productphoto"/>
        </div>
      </div>-->
      <div class="product">
        <div class="name">
          <span>pk87.0
            <div class="description">custom TKL
            </div>
          </span>
        <router-link to="/pk87.0"><div class="morebutton">interest check</div></router-link>
        </div>
        <div class="photowrap">
        <img src="@/assets/pk87-small.png" class="productphoto"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Home",
  methods: {
    home: function() {
      window.location.href = "https://plutocraft.io";
    }
  }
};
</script>

<style scoped>
@keyframes shift {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
@media screen and (orientation: portrait) {
  .product {
    flex-flow: column-reverse nowrap !important;
    border: 2px solid black;
    padding: 30px !important;
    margin-bottom: 30px;
  }
  .productphoto {
    height: auto !important;
    width: 100% !important;
    margin-left: 0 !important;
    margin-bottom: 30px;
  }
  .name {
    font-size: 40px !important;
  }
  .description {
    font-size: 20px !important;
    margin-bottom: 20px !important;
  }
  .name span {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-flow: column nowrap;
  }
  .morebutton {
    font-size: 17px !important;
  }
}
.hero {
  padding-top: 100px;
  box-sizing: border-box;
  min-height: 100vh;
  background-size: 4vh;
  color: black;
  flex-flow: column nowrap;
  justify-content: flex-start;
}
.hero .wordmark {
  width: 300px;
  cursor: pointer;
}
.title {
  font-family: Circular;
  margin-top: 15px;
  font-size: 2em;
  font-weight: bold;
}
.products {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column nowrap;
  width: 100vw;
  padding: 50px;
  box-sizing: border-box;
  max-width: 910px;
  color: black;
}
.product {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 46px;
  background: white;
  position: relative;
}
.product .name {
  font-family: Circular;
  font-size: 5em;
  width: 250px;
  max-width: 50vw;
  margin-top: -23px;
  display: flex;
  flex-flow: column nowrap;
  font-weight: bold;
  justify-content: space-between;
}
.description {
  font-size: 0.35em;
  line-height: 1.4;
  font-weight: normal;
  margin-bottom: 40px;
  max-width: 250px;
}
.morebutton {
  font-size: 0.3em;
  border: 2px solid black;
  padding: 10px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.morebutton:hover {
  color: white;
  background: black;
}
.productphoto {
  height: 100%;
  margin-left: 40px;
}
.product .productphoto {
  animation: shift 25s infinite;
  height: auto !important;
  width: 400px;
}
.photowrap {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
