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
                    v-model="dataArticle.title"
                  />
                </div>
                <div class="editor-control">
                  <p class="editor-label">Description</p>
                  <input
                    type="text"
                    class="editor-input"
                    placeholder="Description"
                    name="description"
                    v-model="dataArticle.description"
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
                    v-model="dataArticle.body"
                  ></textarea>
                </div>
                <div class="editor-control">
                  <p class="editor-label">Tags</p>
                  <input
                    type="text"
                    class="editor-input"
                    placeholder="Tags"
                    name="tagList"
                    v-model="dataArticle.tagList"
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
                <button type="button" @click="saveArticle" class="editor-btn">
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
  name: "BlogEditor",
  data() {
    return {
      tags: [],
      dataArticle: {
        title: "",
        description: "",
        body: "",
        tagList: "",
      },
    };
  },
  methods: {
    saveArticle() {
      let obj = {
        article: {
          title: this.dataArticle.title,
          description: this.dataArticle.description,
          body: this.dataArticle.body,
          tagList: this.tags,
        },
      };
      console.log(obj);
      ArticleService.createArticle(obj).then((res) => {
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
          title: "Successfully added new post!",
        });
        this.dataArticle = "";
        this.$router.push("/");
      });
    },
    onAddTag() {
      if (this.dataArticle.tagList) {
        if (this.tags.indexOf(this.dataArticle.tagList) < 0) {
          this.tags.push(this.dataArticle.tagList);
        }
        this.dataArticle.tagList = "";
      }
    },
    removeTag(tagItem) {
      this.tags = this.tags.filter((tag) => {
        tag !== tagItem;
        console.log(tag !== tagItem);
      });
    },
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