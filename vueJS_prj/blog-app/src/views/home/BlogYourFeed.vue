<template>
  <div class="">
    <section class="post">
      <div class="container">
        <div class="post-container">
          <div class="post-sidebar">
            <div class="post-sidebar--content">
              <h4>Tags</h4>
              <ul class="post-sidebar--tag tag--list">
                <li class="post-sidebar--item">
                  <span class="tag-item">Tag</span>
                </li>
                <li class="post-sidebar--item">
                  <span class="tag-item">Tag</span>
                </li>
                <li class="post-sidebar--item">
                  <span class="tag-item">Tag</span>
                </li>
                <li class="post-sidebar--item">
                  <span class="tag-item">Tag</span>
                </li>
                <li class="post-sidebar--item">
                  <span class="tag-item">Tag</span>
                </li>
              </ul>
            </div>

            <div class="post-contact">
              <h4>Join our list</h4>
              <p>
                Signup to be the first to hear about exclusive deals, special
                offers, recepies from our masters and others.
              </p>
              <form action="" class="post-form">
                <input
                  type="text"
                  class="post-input"
                  placeholder="Your email address"
                />
                <button class="post-button">Subscribe</button>
              </form>
            </div>
          </div>

          <div class="post-lists">
            <div class="posts-not" v-if="!articleByUser.length">
              <span><i class="fa-solid fa-newspaper"></i></span>
              <p>You don't have any posts yet ...</p>
            </div>

            <div class="post-card" v-for="item of articleByUser" :key="item">
              <div class="post-image">
                <img srcset="../../assets/img/img-post.png 2x" alt="" />
              </div>
              <div class="post-content">
                <div class="post-tags tag--list">
                  <span
                    class="post-tag tag-item"
                    v-for="tag of item.tagList"
                    :key="tag"
                    >Tag</span
                  >
                </div>
                <div class="post-title">
                  <router-link
                    class="post-name"
                    :to="{
                      name: 'articles-detail',
                      params: { slug: item.slug },
                    }"
                    >{{ item.title }}</router-link
                  >
                </div>
                <div class="post-desc">
                  <p class="post-desc--item">{{ item.description }}</p>
                  <p class="post-desc--date">{{ dateTime(item.createdAt) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pagination">
      <div class="container">
        <div class="pagination-container">
          <div class="pagination-content">
            <span>Page:</span>
            <a href="#" class="link-active pagination-item">1</a>
            <a href="#" class="pagination-item">2</a>
            <a href="#" class="pagination-item">3</a>
            <a href="#" class="pagination-item">4</a>
          </div>
          <div class="pagination-button">
            <button>Next page ></button>
          </div>

          <!-- <div class="pagination-info">
            <span class="pagination-count">{{
              articleByUser.articlesCount
            }}</span>
            <span class="link-active">articles</span>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ArticleService from "../../service/article.service";
import moment from "moment";

export default {
  name: "BlogYourFeed",
  data() {
    return {
      articleByUser: [],
      author: "",
    };
  },

  methods: {
    getAllArticleFeed(author) {
      ArticleService.getArticleFeed(author).then((res) => {
        this.articleByUser = res.data.articles;
        console.log("yourfeed", this.articleByUser);
      });
    },

    dateTime(value) {
      return moment(value).format("YYYY-MM-DD");
    },
  },
  mounted() {
    console.log("local", localStorage.getItem("user"));
    const userLocal = JSON.parse(localStorage.getItem("user"));

    this.getAllArticleFeed(userLocal.user.username);
  },
};
</script>
<style scoped>
.posts-not {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  justify-content: center;
  align-items: center;
}
.posts-not span i {
  font-weight: 100;
  font-size: 80px;
}
.posts-not p {
  font-size: 32px;
  font-weight: 400;
}
</style>