export default {
  setLimit(state, limit) {
    state.limit = Number(limit);
  },
  setTodos(state, todos) {
    Object.assign(state.todos, todos);
  },
  addTodo(state, todo) {
    state.todos = [todo, ...state.todos];
  },
  removeTodo(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  updateTodo(state, newTodo) {
    state.todos = state.todos.map(
      // eslint-disable-next-line no-confusing-arrow
      (todo) => (todo.id === newTodo.id ? newTodo : todo)
    );
  },
};
