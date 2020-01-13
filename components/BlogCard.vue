<template>
  <li class="blog">
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
<style lang="scss">
.cardThumbnail {
  transition: all ease 0.75s;
  opacity: 0.7;
}

.blog {
  &__title {
    font-family: "Courier New", Courier, monospace;
    color: $secondary;
    padding-top: 1rem;
    font-size: 2.5rem;
    transition: color 0.3s;
  }

  &__description {
    margin: 0;
    color: $grey-2;
  }
}
</style>
