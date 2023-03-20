<template>
  <div>
    <Header />
    <main>
      <div class="l-wrapper mt-10">
        <slot />
      </div>

    </main>
  </div>
</template>

<script setup>

// definePageMeta({
//   pageTransition: {
//     name: "slide-right",
//   },
// });
</script>

<style lang="scss">
.router-link-exact-active {
  color: #2a12b4;
}

</style>
