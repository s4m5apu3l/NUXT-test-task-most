<template>
  <div class="mx-auto max-w-3xl pt-5">
    main page
  </div>
</template>

<script setup>

definePageMeta({
  pageTransition: {
    name: "slide-right",
  },
  // layout: "products",
});
</script>

<style lang="scss">
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>