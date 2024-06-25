<script>
export default {
    name: 'FadeInOnScroll',
  data() {
    return {
      isVisible: false
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.unobserve(this.$refs.element);
        }
      },
      {
        threshold: 0.1
      }
    );

    observer.observe(this.$refs.element);
  }
};

</script>

<template>
    <div ref="element" :class="{'visible': isVisible}">
    <slot></slot>
  </div>
</template>



<style scoped>
div {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
div.visible {
  opacity: 1;
}
</style>