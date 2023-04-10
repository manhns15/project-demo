<template>
  <div class="">
    <section class="image">
      <div class="container">
        <div class="image-container">
          <div class="image-content">
            <div class="image-info">
              <div class="image-left">
                <div class="image-title">
                  <span>Date:</span>
                  <span>{{ dateTime(article.createdAt) }}</span>
                </div>
                <div class="image-category">
                  <span>Category:</span>
                  <span>Dinner</span>
                </div>
                <div class="image-author">
                  <span>Author:</span>
                  <span>{{ userAr }}</span>
                </div>
              </div>
              <div class="image-right">
                <h1 class="image-heading">
                  {{ article.title }}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="detail">
      <div class="container">
        <div class="detail-container">
          <div class="detail-sidebar">
            <div class="detail-tags">
              <h4>Tags</h4>
              <div class="tags tags-custom">
                <div class="tag-list detail-item">
                  <span
                    class="tag-item"
                    v-for="tag of article.tagList"
                    :key="tag"
                    >{{ tag }}</span
                  >
                </div>
              </div>
            </div>
            <div class="detail-back">
              <img src="../../assets/img/back-icon.svg" alt="" />
              <router-link :to="{ name: 'home' }">Back to Blog</router-link>
            </div>
          </div>
          <div class="detail-content">
            <div class="detail-desc">
              <div class="detail-setting">
                <h4 class="detail-title">{{ article.description }}</h4>
                <div class="drop-setting">
                  <span class="three-dot"
                    ><i class="fa-solid fa-ellipsis"></i
                  ></span>
                  <ul class="detail-setting_item">
                    <li>
                      <router-link
                        :to="{
                          name: 'edit-article',
                          params: { slug: article.slug },
                        }"
                        ><i class="fa-solid fa-pen-to-square"></i> Edit
                        post</router-link
                      >
                    </li>
                    <li>
                      <a @click="deleteArticle(article.slug)"
                        ><i class="fa-solid fa-trash-can"></i> Delete post</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <p class="detail-body">
                {{ article.body }}
              </p>
            </div>
            <div class="detail-shares">
              <div class="detail-favorite">
                <h4>
                  <i class="fa-solid fa-heart"></i>
                </h4>

                <span class="detail-favorite--count">{{
                  article.favoritesCount
                }}</span>
              </div>
              <div class="detail-icon">
                <button type="button">
                  <i class="fa-brands fa-facebook-square"></i> Facebook
                </button>
                <button href="#">
                  <i class="fa-brands fa-pinterest-square"></i> Pinterest
                </button>
                <button href="#">
                  <i class="fa-brands fa-twitter-square"></i> Twitter
                </button>
                <button href="#">
                  <i class="fa-brands fa-linkedin"></i> Linkedin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="comment">
      <div class="container">
        <div class="comment-container">
          <div class="comment-content">
            <div class="comment-form">
              <div class="comment-title">
                <h4 class="comment-heading">Leave a reply</h4>
                <p class="comment-text">
                  Allrady have an account? Sign in to leave a reply.
                </p>
              </div>
              <form action="">
                <div class="comment-group">
                  <div class="comment-control">
                    <p class="comment-label">Name</p>
                    <input type="text" name="" id="" placeholder="Name" />
                  </div>
                  <div class="comment-control">
                    <p class="comment-label">Email Address</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div class="comment-control">
                  <p class="comment-label">Comment</p>
                  <textarea
                    name="body"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Space for your comments"
                    v-model="dataComment.body"
                  ></textarea>
                </div>
                <button type="button" @click="saveComment" class="comment-btn">
                  Send a comment
                </button>
              </form>
            </div>
            <div class="comment-desc">
              <h4 class="comment-heading">Comments</h4>
              <div
                class="comment-body"
                v-for="item of comments.comments"
                :key="item"
              >
                <div class="comment-er">
                  <div class="comment-author">
                    <div class="comment-avt">
                      <img :src="item.author.image" alt="" class="" />
                    </div>
                    <div class="comment-info">
                      <div class="comment-user">
                        <span>{{ item.author.username }}</span>
                      </div>
                      <p>{{ dateTime(item.createdAt) }}</p>
                    </div>
                  </div>
                  <div class="comment-delete">
                    <span @click="deleteComment(item.id)"
                      ><i class="fa-solid fa-trash-can"></i
                    ></span>
                  </div>
                </div>
                <p class="comment-item">
                  {{ item.body }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ArticleService from "../../service/article.service";
import CommentService from "../../service/comment.service";
import favoriteService from "../../service/favorite.service";
import Swal from "sweetalert2";

import moment from "moment";
export default {
  name: "ArticleDetail",
  data() {
    return {
      article: "",
      userAr: "",
      comments: [],
      slug: "",
      dataComment: {
        body: "",
      },
      status: false,
    };
  },
  // computed: {
  //   currentUser() {
  //     const userCheck = JSON.parse(localStorage.getItem("user"));
  //     console.log("checkuser", userCheck);
  //     if (userCheck.user.username) {

  //     }
  //   },
  // },
  methods: {
    getArticle(slug) {
      ArticleService.getArticle(slug)
        .then((res) => {
          this.article = res.data.article;
          console.log(this.article);
          this.userAr = this.article.author.username;
        })
        .catch((e) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: "Unexpected Error From Server!",
          });
        });
    },
    deleteArticle() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
        .then((result) => {
          if (result.isConfirmed) {
            ArticleService.delete(this.article.slug).then((res) => {
              console.log("delete", res);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            });
            this.$router.push("/");
          }
        })
        .catch((e) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: "Unexpected Error From Server!",
          });
        });
    },
    getComment(slug) {
      CommentService.getComment(slug)
        .then((res) => {
          this.comments = res.data;
          console.log("comment", this.comments);
        })
        .catch((e) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: "Unexpected Error From Server!",
          });
        });
    },
    saveComment() {
      let obj = {
        comment: {
          body: this.dataComment.body,
        },
      };
      CommentService.createComment(this.article.slug, obj)
        .then(() => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Comment successfully!",
          });
          this.dataComment = "";
          this.getComment(this.article.slug);
        })
        .catch((e) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: "Unexpected Error From Server!",
          });
        });
    },
    deleteComment(id) {
      CommentService.deleteComment(this.article.slug, id)
        .then(() => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "success",
            title: "Successfully delete the comment!",
          });
          this.getComment(this.$route.params.slug);
        })
        .catch((e) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: "Unexpected Error From Server!",
          });
        });
    },
    // like() {
    //   this.status = false;
    //   console.log("favorite", this.article.slug);
    //   favoriteService.favorite(this.article.slug).then((res) => {
    //     console.log(res.article);
    //   });
    // },
    // disLike() {
    //   this.status = true;
    //   favoriteService.favorite(this.article.slug).then((res) => {
    //     console.log(res.article);
    //   });
    // },
    dateTime(value) {
      return moment(value).format("YYYY-MM-DD");
    },
  },

  mounted() {
    console.log("params", this.$route.params);
    this.getArticle(this.$route.params.slug);
    this.getComment(this.$route.params.slug);
  },
};
</script>
<style scoped>
.detail-shares {
  justify-content: space-between;
}
.detail-favorite i {
  color: #b4b4b4;
}
.detail-favorite {
  display: flex;
  align-items: center;
  gap: 0 10px;
  cursor: pointer;
}
.comment-author {
  display: flex;
  align-items: center;
  gap: 0 12px;
}
.comment-delete span {
  color: #cf3636;
  cursor: pointer;
}
.detail-setting {
  display: flex;
  justify-content: space-between;
}
.drop-setting {
  position: relative;
  cursor: pointer;
}
.detail-setting_item {
  font-size: 16px;
  z-index: 1;
  position: absolute;
  padding: 0;
  background-color: white;
  list-style-type: none;
  width: 154px;
  border-radius: 2px;
  box-shadow: 0 0 3px #ccc;
  transform-origin: calc(100% - 20px) top;
  -webkit-animation: growth ease 0.2s;
  animation: growth ease 0.2s;
  will-change: opacity, transform;
  display: none;
}
.detail-setting_item li {
  padding: 15px 10px;
}
.detail-setting_item li:hover {
  background: #f8f8f8;
  color: #6a983c;
}
.detail-setting_item li a {
  font-size: 14px;
  color: #151515;
}

.drop-setting:hover .detail-setting_item {
  display: block;
}
.drop-setting::before {
  content: " ";
  width: 40px;
  position: absolute;
  top: 8px;
  height: 13px;
}
</style>