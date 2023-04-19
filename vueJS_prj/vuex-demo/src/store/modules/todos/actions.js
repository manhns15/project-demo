import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";
const http = axios.create({ baseURL: API_URL });
export default {
  async fetchTodos({ commit }) {
    const { data } = await http.get("/");

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
      commit("setTodos", data);
      console.log("data", data);
    });
  },
  async addTodo({ commit }, title) {
    const { data } = await http.post("/", { title, completed: false });

    commit("addTodo", data);
  },
  deleteTodo({ commit }, id) {
    http.delete(`/${id}`);
    commit("removeTodo", id);
  },
  updateTodo({ commit }, todo) {
    http.put(`/${todo.id}`, todo);
    commit("updateTodo", todo);
  },
};
