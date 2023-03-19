<template>
  <div class="">
    <Header />
    <main>
      <div class="l-wrapper">
      <slot />
    </div>
    </main>

  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
