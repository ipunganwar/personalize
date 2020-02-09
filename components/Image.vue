<template lang="html">
  <div v-lazy-container="{ selector: 'img' }" class="image-placeholder">
    <img
      :data-src="imageRequired"
      :data-loading="imageRequired.placeholder"
      :height="height"
      :width="width"
      :class="classes"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    imageURL: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    },
    classes: {
      type: String,
      default: ""
    }
  },
  computed: {
    imageRequired() {
      return require(`../assets/images/${this.imageURL}`);
    }
  }
};
</script>
<style lang="scss">
.image-placeholder {
  overflow: hidden;
  line-height: 0;
}

img {
  transition: all ease 0.3s;
  opacity: 0;

  &[lazy="loading"] {
    opacity: 1;
    filter: blur(15px);
  }

  &[lazy="loaded"] {
    opacity: 1;
  }
}
</style>
