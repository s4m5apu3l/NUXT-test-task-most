<template>
  <div class="">
    <Header />

    <!-- output page content -->
    <div class="l-wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
