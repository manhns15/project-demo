<template>
  <div class="" style="padding: 0; margin: 0">
    <div class="setting">
      <div class="container">
        <div class="setting-container">
          <div class="setting-heading">
            <!-- <h1>Articles</h1> -->
          </div>
          <div class="setting-layout">
            <ul class="setting-list">
              <li class="setting-item">
                <router-link :to="{ name: 'new-article' }" class="btn-add">
                  <i class="fa-solid fa-plus"></i> New Article
                </router-link>
              </li>
              <li
                class="setting-item"
                @click="activeTab = 1"
                :class="[activeTab === 1 ? 'text-active' : '']"
              >
                <i class="bi bi-globe-americas"></i><span>Global Feed</span>
              </li>
              <li
                class="setting-item"
                @click="activeTab = 2"
                :class="[activeTab === 2 ? 'text-active' : '']"
                v-if="this.currentUser()"
              >
                <i class="bi bi-person-rolodex"></i><span>Your Feed</span>
              </li>
              <!-- <li class="setting-item">
                <span class="setting-tag">{{ articles.articlesCount }}</span
                ><span>Articles</span>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="path">
      <div class="container">
        <div class="path-container">
          <p class="path-item">Homepage</p>
          <span>/</span>
          <p class="path-item text-active">Articles title</p>
        </div>
      </div>
    </div>
    <main>
      <section class="blogs">
        <div class="container">
          <div class="blogs-container">
            <div
              class="blogs-item"
              v-for="itemLimit of articleLimit.articles"
              :key="itemLimit"
            >
              <div class="tag--list blogs-tag-list">
                <span
                  class="blogs-tag"
                  v-for="itemTag of itemLimit.tagList"
                  :key="itemTag"
                  >{{ itemTag }}</span
                >
              </div>
              <div class="blogs-content">
                <div class="blogs-heading">
                  <h3 class="">
                    {{ itemLimit.title }}
                  </h3>
                </div>
                <div class="blogs-info">
                  <span class="blogs-name">
                    <img src="../../assets/img/avt.png" alt="" />
                    <p>{{ itemLimit.author.username }}</p>
                  </span>
                  <span class="blogs-date">{{
                    dateTime(itemLimit.createdAt)
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogGlobalFeed v-if="activeTab === 1" />
      <BlogYourFeed v-if="activeTab === 2" />
    </main>
  </div>
</template>
<script>
import ArticleService from "../../service/article.service";
import BlogGlobalFeed from "./BlogGlobalFeed.vue";
import BlogYourFeed from "./BlogYourFeed.vue";
import moment from "moment";
export default {
  name: "BlogHome",
  components: {
    BlogGlobalFeed,
    BlogYourFeed,
  },
  data() {
    return {
      articleLimit: [],
      activeTab: 1,
    };
  },
  methods: {
    currentUser() {
      const userToken = JSON.parse(localStorage.getItem("user"));
      console.log("userToken", userToken);
      if (userToken) {
        return userToken.user.username;
      }
    },
    getLimit() {
      ArticleService.getArticleLimit().then((res) => {
        this.articleLimit = res.data;
        console.log("limit", this.articleLimit);
      });
    },
    dateTime(value) {
      return moment(value).format("YYYY-MM-DD");
    },
  },
  mounted() {
    this.getLimit();
  },
};
</script>
<style scoped>
</style>