<template>
  <router-link to="/">Home</router-link>
  <div v-for="todo in todos" :key="todo.id">{{ todo.title }}</div>
</template>

<script>
import useListData from "@/composables/useListData";

export default {
  setup() {
    const { todos } = useListData();
    return {
      todos,
    };
  },
};
</script>

<style>
</style>
