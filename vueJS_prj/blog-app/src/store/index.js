import { createStore } from "vuex";
import { auth } from "@/store/auth.module";
import modules from "@/store/modules";
const store = createStore({
  modules: {
    auth,
    modules,
  },
});
export default store;
