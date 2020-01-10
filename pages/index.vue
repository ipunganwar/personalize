<template>
  <div class="container">
    <h1>My blog posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link :to="getPermalink(post)">{{
          post.attributes.title
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prefix: 'posts'
    }
  },
  asyncData() {
    const resolve = require.context('~/contents/', true, /\.md$/)
    const imports = resolve.keys().map((key) => {
      // eslint-disable-next-line no-unused-vars
      const [, name] = key.match(/\/(.+)\.md$/)
      return resolve(key)
    })
    return {
      posts: imports
    }
  },
  methods: {
    getPermalink(post) {
      return `${this.prefix}/${
        post.meta.resourcePath
          .split('\\')
          .pop()
          .split('/')
          .pop()
          .split('.')[0]
      }`
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
</style>
