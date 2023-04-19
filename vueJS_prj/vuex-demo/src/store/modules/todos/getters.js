export default {
  limit(state) {
    return state.limit;
  },
  todos(state) {
    return state.todos.filter((_, index) => index < state.limit);
  },
};
