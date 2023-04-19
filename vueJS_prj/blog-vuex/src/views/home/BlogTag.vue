<template>
  <div class="post-sidebar--content">
    <h4>Tags</h4>
    <ul class="post-sidebar--tag tag--list">
      <!-- <li class="post-sidebar--item">
        <span class="tag-item">{{ item }}</span>
      </li> -->
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
</template>
<script>
import connectApi from "../../service/article.service";
export default {
  name: "BlogTag",
  data() {
    return {
      tags: [],
    };
  },
  methods: {
    getAllTags() {
      connectApi.getAll().then((res) => {
        if (res) {
          res.articles.forEach((el) => this.tags.push(el.tagList));
          this.tags = new Set(this.tags.flat());
        }
        console.log(this.tags);
      });
    },
  },
  mounted() {
    this.getAllTags();
  },
};
</script>