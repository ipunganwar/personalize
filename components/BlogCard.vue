<template>
  <li class="blog">
    <nuxt-link :to="{ name: 'blog-slug', params: { slug: blog.name } }">
      <ImageResponsive
        :image-u-r-l="`blog/${blog.id}/_thumbnail.jpeg`"
        :classes="'cardThumbnail'"
        :height="'952'"
        :width="'509'"
        :alt="blog.cardAlt"
      />
      <h3 class="blog__title">
        {{ blog.title }}
      </h3>
      <p class="blog__description">
        {{ blog.description }}
      </p>
    </nuxt-link>
  </li>
</template>
<script>
export default {
  props: {
    blog: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
<style lang="scss" scoped>
.cardThumbnail {
  transition: all ease 0.75s;
  opacity: 0.7;

  &[lazy="loaded"] {
    opacity: 1;
  }
}

.blog {
  // border: 1px solid black;
  margin-top: 3rem;

  &__title {
    font-family: "Courier New", Courier, monospace;
    color: $secondary;
    padding-top: 1rem;
    font-size: 2.5rem;
    transition: color 0.3s;
  }

  &:hover {
    .blog__title {
      color: $primary;
    }
  }

  &__description {
    margin: 0;
    color: $grey-2;
  }
}
</style>
