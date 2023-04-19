import ArticleService from "@/service/article.service";

export default {
  getGlobalFeed() {
    ArticleService.getAll()
      .then((res) => {
        const { articles } = res.data.articles;
        commit("setGlobalFeed", articles);
        console.log("articles", articles);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
