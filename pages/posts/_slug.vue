<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- <component :is="singlePostComponent" /> -->
  </div>
</template>
<script>
export default {
  async asyncData({ params }) {
    try {
      console.info(params.slug)
      const post = await import(`~/contents/${params.slug}.md`)
      return {
        title: post.attributes.title,
        singlePostComponent: post.vue.component
      }
    } catch (err) {
      console.debug(err)
      return false
    }
  }
}
</script>
