<template>
  <div>
    {{ title }}
  </div>
</template>
<script>
export default {
  async asyncData({ params }) {
    const fileContent = await import(`~/contents/blogs/${params.slug}.md`);
    const attr = fileContent.attributes;
    return {
      name: params.slug,
      title: attr.title,
      singleComponent: fileContent.vue.component
    };
  }
};
</script>
