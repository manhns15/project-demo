import { useStore } from "vuex";
import { computed } from "vue";

export default () => {
  const store = useStore();
  const articleGlobal = computed(
    () => store.getters["articlesGlobal/articlesGlobal"]
  );
  store.dispatch("articles/getGlobalFeed");
  return {
    articleGlobal,
  };
};
