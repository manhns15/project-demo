import { useStore } from "vuex";
import { computed } from "vue";

export default () => {
  const store = useStore();
  const todos = computed(() => store.getters["todos/todos"]);
  store.dispatch("todos/fetchTodos");
  return {
    todos,
  };
};
