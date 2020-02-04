<template>
  <div class="blog">
    <div class="header">
      <nuxt-link to="/" class="header__back__link">
        Blog
      </nuxt-link>
    </div>

    <div class="blog__content">
      <main>
        <article>
          <header>
            <div class="blog__meta">
              <h3 class="blog__title">
                {{ blog.title }}
              </h3>
              <image-responsive
                :image-u-r-l="'blog/' + blog.id + '/_main.jpeg'"
                width="100%"
                :alt="'Blog Picture'"
                class="blog__img"
              />
            </div>
          </header>
          <component :is="blog.component" />
        </article>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    null;
  },
  created() {
    const slug = this.$route.params.slug;
    const fileContent = require(`~/contents/blogs/${slug}.md`);
    const attr = fileContent.attributes;
    this.blog = {
      name: slug,
      title: attr.title,
      id: attr.id,
      component: fileContent.vue.component
    };
  }
};
</script>
<style lang="scss">
.header {
  margin: 1rem;

  &__back__link {
  }
}
.blog {
  line-height: 1rem;
  &__content {
    width: 70%;
    margin: 0 auto;
  }

  &__img {
    margin-bottom: 1rem;
    margin-top: 2rem;
  }

  &__title {
    font-size: 40px;
    line-height: 48px;
  }
}
</style>
