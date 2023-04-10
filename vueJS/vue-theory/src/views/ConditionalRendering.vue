<template>
  <div>
    <button @click="icon = !icon">Toggle</button>
    <h1 v-if="icon">Vue is icon!</h1>
    <h1 v-else>Oh no 😢</h1>
  </div>
</template>
<script>
export default {
  name: "ConditionalRendering",
  data() {
    return {
      icon: true,
    };
  },
};
</script>