<template>
  <section>
    <h2>blog section</h2>
    <ul class="blogs">
      <BlogCard v-for="blog in blogs" :key="blog.name" :blog="blog" />
    </ul>
  </section>
</template>

<script>
import BlogCard from "~/components/BlogCard";

export default {
  components: { BlogCard },
  props: {
    blogs: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss">
.blogs {
  margin: 0;
}
</style>
