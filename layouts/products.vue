<template>
  <div>
    <Header />
    <div class="l-wrapper mt-10">
      <slot />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: "slide-right",
  },
});
</script>

<style lang="scss">
.router-link-exact-active {
  color: #12b488;
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
</style>
