<template>
  <div class="home">
    <ul class="">
      <li class="home-item">
        <router-link to="/computed">Computed</router-link>
      </li>
      <li class="home-item">
        <router-link to="/style-binding">Style Binding</router-link>
      </li>
      <li class="home-item">
        <router-link to="/conditional-rendering"
          >Conditional Rendering</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TheHome",
};
</script>
<style scoped>
.home-item {
  list-style: none;
  padding: 10px 0;
}
a {
  text-decoration: none;
  color: black;
}
</style>