<template>
  <div>
    <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
      aa
    </div>
  </div>
</template>
<script>
export default {
  name: "StyleBinding",
  data() {
    return {
      isActive: false,
      hasError: true,
    };
  },
};
</script>
<style scoped>
.text-danger {
  color: brown;
}
.active {
  background-color: black;
  color: #fff;
}
</style>
