<template>
  <section>
    <div class="blogs__top">
      <h1>Blog Section</h1>
    </div>
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
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60%;
  text-align: center;

  &__top {
    display: flex;
    justify-content: center;
    color: red;
    margin-top: 4rem;
  }
}
</style>
