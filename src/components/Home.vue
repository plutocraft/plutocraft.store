<template>
  <div class="flex center hero">
    <img @click="home" class="wordmark" src="@/assets/logo-dark.svg"/>
    <div class="title">(store)</div>
    <div class="products">
      <div class="product">
        <div class="name">
          <span>pk87.0
            <div class="description">custom TKL
            </div>
          </span>
        <router-link to="/pk87.0"><div class="morebutton">view interest check</div></router-link>
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
.hero {
  padding: 100px;
  box-sizing: border-box;
  min-height: 100vh;
  background-size: 4vh;
  background: black;
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
  min-height: 300px;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: space-between;
  border-radius: 10px;
  position: relative;
  padding: 40px;
  background: white;
}
.product .name {
  font-family: Circular;
  font-size: 5em;
  display: flex;
  flex-flow: column nowrap;
  font-weight: bold;
  justify-content: space-between;
}
.description {
  font-size: 0.35em;
  margin-top: 10px;
  line-height: 1.4;
  font-weight: normal;
  max-width: 300px;
}
.morebutton {
  font-size: 0.3em;
  border: 2px solid black;
  padding: 10px;
  border-radius: 5px;
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
  height: 160px;
  animation: shift 25s infinite;
  margin-left: 50px;
}
.photowrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
