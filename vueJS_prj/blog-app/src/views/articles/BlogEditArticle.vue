<template>
  <section class="editor">
    <div class="container">
      <div class="editor-container">
        <div class="editor-content">
          <h4 class="editor-heading">Editor Blog</h4>
          <p class="editor-text">Please enter your billing info</p>
          <div class="editor-form">
            <form action="">
              <div class="editor-group">
                <div class="editor-control">
                  <p class="editor-label">Title</p>
                  <input
                    type="text"
                    class="editor-input"
                    placeholder="Title"
                    name="title"
                    v-model="editData.title"
                  />
                </div>
                <div class="editor-control">
                  <p class="editor-label">Description</p>
                  <input
                    type="text"
                    class="editor-input"
                    placeholder="Description"
                    name="description"
                    v-model="editData.description"
                  />
                </div>
                <div class="editor-control">
                  <p class="editor-label">Body</p>
                  <textarea
                    name="body"
                    class="editor-textarea"
                    id=""
                    cols="20"
                    placeholder="Body"
                    rows="10"
                    v-model="editData.body"
                  ></textarea>
                </div>
                <div class="editor-control">
                  <p class="editor-label">Tags</p>
                  <input
                    type="text"
                    class="editor-input"
                    placeholder="Tags"
                    name="tagList"
                    v-model="editData.tagList"
                    @keyup.enter="onAddTag"
                  />
                  <div class="editor-tags">
                    <span
                      class="editor-tags-item tag-item"
                      v-for="tag of tags"
                      :key="tag"
                      >{{ tag }}
                      <i class="fa-solid fa-xmark" @click="removeTag(tag)"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="edit-button">
                <button type="button" class="danger editor-btn">Cancle</button
                >&nbsp;
                <button type="button" @click="editArticle" class="editor-btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ArticleService from "../../service/article.service";
import Swal from "sweetalert2";

export default {
  name: "BlogEditArticle",
  data() {
    return {
      tags: [],
      editData: {},
      slug: "",
    };
  },
  create() {},
  methods: {
    getDataArticle(slug) {
      ArticleService.getArticle(slug)
        .then((res) => {
          this.editData = res.data.article;
          this.tags = res.data.article.tagList;
          console.log(this.editData);
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
    editArticle() {
      let obj = {
        article: {
          title: this.editData.title,
          description: this.editData.description,
          body: this.editData.body,
          tagList: this.tags,
        },
      };
      ArticleService.updateArticle(this.editData.slug, obj)
        .then((res) => {
          console.log(res);
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
            title: "Successfully edit the post!",
          });
          this.editData = "";
          this.$router.push("/");
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
    onAddTag() {
      if (this.editData.tagList) {
        if (this.tags.indexOf(this.editData.tagList) < 0) {
          this.tags.push(this.editData.tagList);
        }
        this.editData.tagList = "";
      }
    },
    removeTag(tagItem) {
      this.tags = this.tags.filter((tag) => {
        tag !== tagItem;
        console.log(tag !== tagItem);
      });
    },
  },
  mounted() {
    console.log(this.$router.currentRoute._rawValue.params.slug);
    this.getDataArticle(this.$router.currentRoute._rawValue.params.slug);
  },
};
</script>
<style scoped>
.editor-tags-item {
  display: flex;
  align-items: center;
  gap: 0 8px;
}
.editor-tags-item i {
  cursor: pointer;
}
</style>