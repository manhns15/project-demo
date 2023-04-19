<template>
  <div class="wrapper">
    <Header />
    <Home />
    <Login />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

export default {
  name: "App",
  components: { Header, Home, Login },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
@import "./assets/css/app.css";
</style>
