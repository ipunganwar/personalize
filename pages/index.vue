<template>
  <div class="container">
    <BlogSection :blogs="blogs" />
  </div>
</template>
<script>
import BlogSection from "~/components/AppBlog";
import blogs from "~/contents/blogs";

export default {
  components: { BlogSection },
  async asyncData() {
    async function asyncImport(blogName) {
      const wholeMD = await import(`~/contents/blogs/${blogName}.md`);
      return wholeMD.attributes;
    }

    return Promise.all(blogs.map(blog => asyncImport(blog))).then(res => {
      return {
        blogs: res
      };
    });
  }
};
</script>
<style lang="scss">
.contents {
  display: flex;
}
</style>
