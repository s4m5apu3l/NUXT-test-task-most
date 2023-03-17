<template>
  <div class="mx-auto">
    <header class="shadow-sm bg-white max-auto px-6">
      <nav
        class="mx-auto p-4 flex self-center justify-between flex-row"
      >
        <NuxtLink to="/" class="font-bold block'">
          <img class="max-w-1 w-28" src="../assets/img/log.png" alt="" />
        </NuxtLink>
        <ul class="flex gap-5 self-center font-bold text-lg delay-500 ease-linear">
          <li><NuxtLink to="/" class="hover:bg-green ease-linear">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:bg-green ease-linear">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn ">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- output page content -->
    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>