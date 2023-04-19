export default {
  setGlobalFeed(state, dataGlobal) {
    state.articles = dataGlobal;
  },
  setYourFeed(state, dataYourFeed) {
    state.articleByUser = dataYourFeed;
  },
  setTag(state, dataTag) {
    state.tags = dataTag;
  },
  setArticleLimit(state, articleLimit) {
    state.articleLimit = articleLimit;
  },
  setActiveTab(state, tabActive) {
    state.activeTab = Number(tabActive);
  },
};
