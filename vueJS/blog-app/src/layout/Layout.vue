<template>
  <div class="wrapper">
    <Header />
    <!-- <Menu /> -->
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Menu from "../components/Menu.vue";

export default {
  name: "Layout",
  components: {
    Header,
    Menu,
    Footer,
  },
};
</script>